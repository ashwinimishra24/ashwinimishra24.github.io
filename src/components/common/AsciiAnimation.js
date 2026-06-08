import React, { useEffect, useRef, useState } from "react";
import { GHOST_ANIMATION } from "../../config/appConfig";
import "../../styles/terminal.css";

const getReducedMotionPreference = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Splits a frame line into colored segments without using innerHTML.
 * The frames only contain `<span class="c">...</span>` wrappers around the
 * "outer" (outline) characters; everything else is "inner" body text.
 * Parsing into React nodes keeps rendering fully XSS-safe.
 */
const parseLine = (line) => {
  const segments = [];
  const regex = /<span class="c">(.*?)<\/span>/g;
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ text: line.slice(lastIndex, match.index), outer: false });
    }
    segments.push({ text: match[1], outer: true });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < line.length) {
    segments.push({ text: line.slice(lastIndex), outer: false });
  }
  return segments;
};

/**
 * Plays the official Ghostty pre-rendered ASCII animation in a continuous loop.
 * Frames are loaded from a same-origin JSON asset and advanced on a timer.
 */
const AsciiAnimation = React.memo(() => {
  const { src, fps } = GHOST_ANIMATION;
  const [frames, setFrames] = useState(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const prefersReducedMotion = useRef(getReducedMotionPreference());

  useEffect(() => {
    let cancelled = false;
    const url = `${process.env.PUBLIC_URL || ""}${src}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ghost frames: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        if (cancelled) return;
        const parsed = json.frames.map((lines) => lines.map(parseLine));
        setFrames(parsed);
        if (prefersReducedMotion.current) {
          // Show a representative, fully-formed frame when motion is reduced.
          setFrameIndex(Math.floor(parsed.length / 2));
        }
      })
      .catch((error) => {
        console.error("AsciiAnimation: unable to load frames", error);
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  useEffect(() => {
    if (!frames || prefersReducedMotion.current) return undefined;
    const intervalId = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, 1000 / fps);
    return () => clearInterval(intervalId);
  }, [frames, fps]);

  if (!frames) {
    return <code className="ascii-animation ascii-animation--loading" aria-hidden="true" />;
  }

  const currentFrame = frames[frameIndex] || frames[0];

  return (
    <code
      className="ascii-animation"
      role="img"
      aria-label="Animated ASCII ghost banner"
    >
      {currentFrame.map((segments, lineIdx) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="frame-line" key={lineIdx}>
          {segments.map((segment, segIdx) =>
            segment.outer ? (
              // eslint-disable-next-line react/no-array-index-key
              <span className="c" key={segIdx}>
                {segment.text}
              </span>
            ) : (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={segIdx}>{segment.text}</React.Fragment>
            )
          )}
        </div>
      ))}
    </code>
  );
});

AsciiAnimation.displayName = "AsciiAnimation";

export default AsciiAnimation;
