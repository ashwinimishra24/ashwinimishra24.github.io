import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Terminal from "../components/layout/Terminal";
import { useCommandHistory } from "../hooks/useCommandHistory";
import { useWelcomeMessage } from "../hooks/useWelcomeMessage";
import { parseCommandString } from "../services/commandService";
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

  return (
    <div className="App">
      <Header />
      <Terminal
        prompts={promptsArray}
        onAddPrompt={addPrompt}
        onClearHistory={clearPrompts}
      />
    </div>
  );
};

export default Home;
