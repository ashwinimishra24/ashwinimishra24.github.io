// Application configuration
export const APP_CONFIG = {
  title: "Ashwini's Portfolio",
  username: "guest",
  hostname: "ashwini-portfolio",
  theme: {
    primary: "#5fc95a",
    secondary: "#3b78ff",
    background: "#300A24",
    text: "#e7eae5",
    highlight: "yellow"
  },
  placeholder: "help"
};

// Ghostty animated ASCII banner.
// Plays the official Ghostty pre-rendered ASCII frames (bundled in /public).
// Frames courtesy of the gist by DerStimmler:
// https://gist.github.com/DerStimmler/9168e34a5fdcd5cbfd4d2007fb552f74
export const GHOST_ANIMATION = {
  // Served same-origin from public/ (works offline + on GitHub Pages).
  src: "/ghostty-frames.json",
  fps: 30,
  // Colors are controlled in terminal.css via the `.ascii-animation`
  // CSS variables `--ghost-inner` (body) and `--ghost-outer` (outline).
};

// ASCII Art Banner
export const BANNER = `
 █████╗ ███████╗██╗  ██╗██╗    ██╗██╗███╗   ██╗██╗   
██╔══██╗██╔════╝██║  ██║██║    ██║██║████╗  ██║██║   
███████║███████╗███████║██║ █╗ ██║██║██╔██╗ ██║██║   
██╔══██║╚════██║██╔══██║██║███╗██║██║██║╚██╗██║██║   
██║  ██║███████║██║  ██║╚███╔███╔╝██║██║ ╚████║██║██╗
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚═╝╚═╝
`;
