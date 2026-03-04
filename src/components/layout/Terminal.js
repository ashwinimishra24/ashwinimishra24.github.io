import React from "react";
import CommandHistory from "../common/CommandHistory";
import CommandInput from "../common/CommandInput";
import "../../styles/terminal.css";

/**
 * Terminal component - main terminal container
 * Combines history and input components
 */
const Terminal = React.memo(({ prompts, onAddPrompt, onClearHistory }) => {
  return (
    <>
      <div className="prompt">
        <CommandHistory prompts={prompts} />
      </div>
      <div className="prompt">
        <CommandInput
          onAddPrompt={onAddPrompt}
          promptHistory={prompts}
          onClearHistory={onClearHistory}
        />
      </div>
    </>
  );
});

Terminal.displayName = 'Terminal';

export default Terminal;
