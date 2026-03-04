import React from "react";
import { APP_CONFIG } from "../../config/appConfig";
import "../../styles/terminal.css";

/**
 * UserLog component - displays the terminal prompt prefix
 * Optimized with React.memo for performance
 */
const UserLog = React.memo(() => {
  return (
    <div className="prompt-form">
      <p style={{ color: APP_CONFIG.theme.primary }}>{APP_CONFIG.username}@{APP_CONFIG.hostname}</p>
      <p>:</p>
      <p style={{ color: APP_CONFIG.theme.secondary }}>~</p>
      <p>$</p>
    </div>
  );
});

UserLog.displayName = 'UserLog';

export default UserLog;
