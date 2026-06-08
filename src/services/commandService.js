import { COMMANDS } from '../constants/commands';
import { resolveCommand } from '../utils/commandHelpers';
import { getRandomQuote, getRandomJoke, getRandomTip, formatQuote, formatJoke, formatTip } from '../utils/funContent';

/**
 * Parse a command string into structured command object
 * Supports fuzzy matching for commands
 * @param {string} inputValue - The command input string
 * @returns {object} Parsed command with options and args
 */
export function parseCommandString(inputValue) {
  const command = inputValue.split(" ").filter((el) => el !== "");
  let parsingError = undefined;
  
  if (command.length === 0) {
    return {
      inputValue,
      answer: "",
      action: "IGNORE",
    };
  }

  // Resolve fuzzy command (e.g., "he" -> "help")
  const resolvedCommand = resolveCommand(command[0]);
  
  const parsedCommand = {
    options: [],
    command: resolvedCommand.toLowerCase(),
    args: [],
  };

  for (let i = 1; i < command.length; ++i) {
    const elm = command[i];
    if (elm === "" || elm === " ") continue;
    
    if (elm === "--") {
      for (let j = i + 1; j < command.length; ++j) {
        parsedCommand.args.push(command[j]);
      }
      break;
    } else if (elm.slice(0, 2) === "--") {
      const com = elm.slice(2);
      if (com.length < 2) {
        parsingError = "error at " + command[i];
        break;
      }
      if (i + 1 === command.length) {
        parsingError = "error at " + command[i];
        break;
      }
      if (command[i + 1].startsWith("-")) {
        parsingError = "error at " + command[i + 1];
        break;
      }
      parsedCommand.options.push({
        command: com,
        arg: command[++i],
      });
      continue;
    } else if (elm.slice(0, 1) === "-") {
      const com = elm.slice(1);
      if (com.length !== 1) {
        parsingError = "error at " + command[i];
        break;
      }
      if (i + 1 === command.length) {
        parsingError = "error at " + command[i];
        break;
      }
      if (command[i + 1].startsWith("-")) {
        parsingError = "error at " + command[i + 1];
        break;
      }
      parsedCommand.options.push({
        command: com,
        arg: command[++i],
      });
    } else {
      parsedCommand.args.push(command[i]);
    }
  }

  if (parsingError) {
    return {
      inputValue,
      answer: parsingError,
      action: null,
    };
  }

  const { res, action } = getResponse(parsedCommand);
  return {
    inputValue,
    answer: res,
    action,
  };
}

/**
 * Get response for a parsed command - SECURE VERSION (no eval())
 * @param {object} parsedCommand - Parsed command object
 * @returns {object} Response with res and action
 */
export function getResponse(parsedCommand) {
  const command = parsedCommand.command;
  let res = undefined;
  let action = undefined;

  if (COMMANDS[command] === undefined) {
    res = "Command not found. Use <span class=\"highlights\"><i>help</i></span> command to list all valid commands.";
  } else if (COMMANDS[command] === null && command === "clear") {
    res = null;
    action = "CLEAR";
  } else if (command === "") {
    res = "";
  } else if (COMMANDS[command] === null && (command === "help" || command === "man")) {
    // Categorized help system
    res = "<p style='color: #5fc95a; font-weight: 500;'>📚 Available Commands</p>";
    
    // Main Commands
    res += "<p style='color: #ffff00; margin-top: 12px; font-weight: 500;'>Main Commands:</p>";
    res += "<table>";
    const mainCommands = ['about', 'experience', 'education', 'skill', 'project', 'certificate', 'contact', 'social', 'resume'];
    for (let cmd of mainCommands) {
      if (COMMANDS[cmd]) {
        res += "<tr><td>" + cmd + "</td><td>" + COMMANDS[cmd].cue + "</td></tr>";
      }
    }
    res += "</table>";
    
    // Utility Commands
    res += "<p style='color: #ffff00; margin-top: 12px; font-weight: 500;'>Utility:</p>";
    res += "<table>";
    const utilCommands = ['help', 'shortcuts', 'clear', 'welcome'];
    for (let cmd of utilCommands) {
      const cue = cmd === 'help' || cmd === 'man' ? 'Show this help' : 
                  cmd === 'clear' ? 'Clear terminal screen' : 
                  COMMANDS[cmd] ? COMMANDS[cmd].cue : '';
      if (cue) {
        res += "<tr><td>" + cmd + "</td><td>" + cue + "</td></tr>";
      }
    }
    res += "</table>";
    
    // Fun Commands
    res += "<p style='color: #ffff00; margin-top: 12px; font-weight: 500;'>Fun Commands:</p>";
    res += "<table>";
    const funCommands = ['fun', 'whoami', 'date', 'banner', 'quote', 'joke', 'matrix', 'tip', 'sudo'];
    for (let cmd of funCommands) {
      if (COMMANDS[cmd]) {
        res += "<tr><td>" + cmd + "</td><td>" + COMMANDS[cmd].cue + "</td></tr>";
      }
    }
    res += "</table>";
    
    res += "<p style='margin-top: 12px; color: #888;'>💡 Tip: Type 'shortcuts' for keyboard shortcuts, or 'fun' for easter eggs!</p>";
  } else {
    // Handle dynamic commands
    if (command === 'quote') {
      const quote = getRandomQuote();
      res = formatQuote(quote);
    } else if (command === 'joke') {
      const joke = getRandomJoke();
      res = formatJoke(joke);
    } else if (command === 'tip') {
      const tip = getRandomTip();
      res = formatTip(tip);
    } else if (command === 'date') {
      // Dynamic date command
      res = `<p style='color: #5fc95a;'>${new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p><p style='margin-top: 4px; color: #888;'>Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}</p>`;
    } else {
      // Static response from COMMANDS
      res = COMMANDS[command].response;
    }
  }

  return {
    res,
    action,
  };
}
