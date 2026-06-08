import React from "react";
import AsciiAnimation from "../common/AsciiAnimation";
import "../../styles/terminal.css";

/**
 * Header component - displays the animated ASCII banner (Ghostty-inspired loop)
 * Optimized with React.memo for performance
 */
const Header = React.memo(() => {
  return <AsciiAnimation />;
});

Header.displayName = 'Header';

export default Header;
