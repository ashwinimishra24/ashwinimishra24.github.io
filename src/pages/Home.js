import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Terminal from "../components/layout/Terminal";
import { useCommandHistory } from "../hooks/useCommandHistory";
import { useWelcomeMessage } from "../hooks/useWelcomeMessage";
import { parseCommandString } from "../services/commandService";
import { APP_CONFIG } from "../config/appConfig";
import "../styles/App.css";

/**
 * Home page - Main portfolio page with terminal interface
 * Features auto-welcome message on first visit
 */
const Home = () => {
  const { promptsArray, addPrompt, clearPrompts } = useCommandHistory();
  const { shouldShowWelcome } = useWelcomeMessage();

  // Show welcome message on first visit
  useEffect(() => {
    // Only run if no URL commands and welcome should be shown
    if (promptsArray.length === 0 && shouldShowWelcome()) {
      const welcomeCommand = parseCommandString('welcome');
      addPrompt({
        inputValue: 'welcome',
        answer: welcomeCommand.answer,
        action: welcomeCommand.action,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const windowTitle = `${APP_CONFIG.username}@${APP_CONFIG.hostname}: ~`;

  return (
    <div className="App">
      <div className="terminal-window">
        <div className="terminal-titlebar">
          <span className="tb-dots" aria-hidden="true">
            <span className="tb-dot tb-dot--red" />
            <span className="tb-dot tb-dot--yellow" />
            <span className="tb-dot tb-dot--green" />
          </span>
          <span className="terminal-title">{windowTitle}</span>
        </div>
        <div className="terminal-body">
          <Header />
          <Terminal
            prompts={promptsArray}
            onAddPrompt={addPrompt}
            onClearHistory={clearPrompts}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
