/**
 * ========================================
 * PORTFOLIO COMMAND DEFINITIONS
 * ========================================
 * 
 * This file contains all the content for your portfolio commands.
 * Edit the sections below to update your information.
 * 
 * HOW TO EDIT:
 * 1. Find the section you want to update
 * 2. Edit the content between the backticks (`...`)
 * 3. Save the file
 * 4. Run: npm run build
 * 5. Your changes will be live!
 * 
 * HTML TIPS:
 * - <span class="highlights">text</span> = Yellow highlight
 * - <b>text</b> = Bold
 * - Use <dt>, <dd>, <ul>, <li> for lists
 * - Use <table>, <tr>, <td> for tables
 */

// ========================================
// MAIN PORTFOLIO COMMANDS
// ========================================

export const COMMANDS = {
  
  // -------------------------------------
  // ABOUT ME
  // Format: <span class="highlights">tagline</span> and <p>paragraph</p>
  // -------------------------------------
  about: {
    cue: "About Me",
    response: `
      <p>
        <span class="highlights">
          Software Engineer at Cisco | C++ • Python • Networking • Automation
        </span>
      </p>
      <p>
        Passionate about solving complex problems and building efficient, scalable
        systems while continuously learning and innovating in technology.
      </p>
    `
  },

  // -------------------------------------
  // WORK EXPERIENCE
  // Format: <dt><b>Title - Company</b></dt>
  //         <dd>Date range. (Location)</dd>
  //         <ul><li>Achievement or responsibility</li></ul>
  // -------------------------------------
  experience: {
    cue: "My experience",
    response: `
      <dt><b>Software Engineer (Data Center Networking) - Cisco</b></dt>
      <dd>June 2025 — Present. (Bengaluru, hybrid)</dd>
      <ul>
        <li>
          Part of Cisco's Data Center Networking (DCN) team; develop
          <span class="highlights">automation solutions</span> for Nexus Dashboard
          Insights (NDI) using Python and the pyATS framework.
        </li>
      </ul>

      <dt><b>Consulting Engineer (Solution Validation Services) - Cisco</b></dt>
      <dd>Dec 2024 — June 2025. (Bengaluru, on-site)</dd>
      <ul>
        <li>
          Automated and validated
          <span class="highlights">Software Defined Access (SDA)</span> solutions
          for multiple EMEA enterprise customers in Cisco's Solution Validation
          Services (SVS) team.
        </li>
        <li>
          Developed a Master Test Plan (MTP) for the SDA solution.
        </li>
      </ul>

      <dt><b>Consulting Engineer (Apprentice) - Cisco</b></dt>
      <dd>Sept 2023 — Dec 2024. (Bengaluru, on-site)</dd>
      <ul>
        <li>
          Achieved <span class="highlights">CCNA</span> and
          <span class="highlights">DevNet</span> certifications while in Cisco's
          Solution Validation Services (SVS) team.
        </li>
        <li>
          Automated and validated Software Defined Access (SDA) solutions for
          EMEA enterprise customers.
        </li>
      </ul>
    `
  },

  // -------------------------------------
  // TECHNICAL SKILLS
  // Format: <table><tr><td>Category:</td><td>Skills</td></tr></table>
  // -------------------------------------
  skill: {
    cue: "My skills",
    response: `
      <table>
        <tr>
          <td>Programming:</td>
          <td>C++, Python, SQL</td>
        </tr>
        <tr>
          <td>Automation:</td>
          <td>pyATS, Robot, CXTA, Selenium</td>
        </tr>
        <tr>
          <td>Networking:</td>
          <td>IP Service, Routing & Switching, IP Protocols, Network Security & troubleshooting</td>
        </tr>
        <tr>
          <td>Tools & OS:</td>
          <td>Prompt Engineering, Git, CXTM, Jupyter Notebook, Google Colab, Lunix</td>
        </tr>
        <tr>
          <td>Libraries/Frameworks:</td>
          <td>Standard Template Library (STL), Pandas, NumPy, Matplotlib</td>
        </tr>
      </table>
    `
  },

  // -------------------------------------
  // PROJECTS
  // Format: <dt><b>Project name</b></dt>
  //         <dd>Date range</dd>
  //         <ul><li>Detail</li></ul>
  // -------------------------------------
  project: {
    cue: "My projects",
    response: `
      <dt><b>StudyNotion</b></dt>
      <dd>Feb. 2023 - Aug. 2023</dd>
      <ul>
        <li>
          <span class="highlights">Tools & technologies used:</span> 
          MongoDB, ExpressJS, NodeJS, ReactJS, Tailwind.
        </li>
        <li>
          Created three module (Student, Instructor and Admin), Payment integration 
          with Razorpay, Cloud-based media management with Cloudinary, user 
          authentication and authorization, OTP verification, content management.
        </li>
        <li>
          Student features include a homepage, course list, cart checkout, 
          course content, and account editing options.
        </li>
        <li>
          Instructor features include a dashboard with course overview, ratings 
          and feedback, insights with detailed metrics, course management pages 
          for creating, updating, and deleting courses, and profile details view 
          and edit options.
        </li>
      </ul>

      <dt><b>ADHD Disease Prediction - BE Final Year Major Project</b></dt>
      <dd>Jan. 2023 - Apr. 2023</dd>
      <ul>
        <li>
          <span class="highlights">Tools & technologies used:</span> 
          Machine Learning, Python, Google colab.
        </li>
        <li>
          Acquired a EEG data from IEEE and performed a data prepossessing and 
          data visualisation upon the raw data.
        </li>
        <li>
          Applied five machine learning algorithms (Logistic Regression, 
          K-Neighbours Classifier, Gaussian Naïve Bayes, Decision Tree Classifier, 
          and Random Forest Classifier) upon EEG data to study ADHD and obtain 
          a accuracy.
        </li>
        <li>
          Obtained a highest accuracy of 92.01% with K-Neighbours Classifier among 
          all the five algorithms applied.
        </li>
      </ul>
    `
  },

  // -------------------------------------
  // CERTIFICATIONS
  // Format: <ul><li>Certificate name.</li></ul>
  // -------------------------------------
  certificate: {
    cue: "My Certificates",
    response: `
      <ul>
        <li>Cisco Certified Network Associate (CCNA).</li>
        <li>Cisco Certified DevNet Associate (DevNet Associate).</li>
        <li>Cisco Qualified GEN AI Green Belt.</li>
        <li>Cisco Networking Academy - Introduction to Cybersecurity.</li>
      </ul>
    `
  },

  // -------------------------------------
  // EDUCATION
  // Format: <dt><b>Degree - University</b></dt>
  //         <dd>Date range</dd>
  //         <ul><li>Major or other details</li></ul>
  // -------------------------------------
  education: {
    cue: "My education",
    response: `
      <dt><b>Bachelor of Engineering - Barkatullah University Institute of Technology</b></dt>
      <dd>August 2019 — June 2023</dd>
      <ul>
        <li>
          <span class="highlights">Major:</span> Information Technology
        </li>
      </ul>
    `
  },

  // -------------------------------------
  // CONTACT INFORMATION
  // Format: <table><tr><td>Label:</td><td><a href="">value</a></td></tr></table>
  // -------------------------------------
  contact: {
    cue: "How to contact me",
    response: `
      <table>
        <tr>
          <td>Email:</td>
          <td>
            <a href="mailto:ashwinimishra24@gmail.com" 
               style="text-decoration: none; color:yellow;">
              ashwinimishra24@gmail.com
            </a>
          </td>
          <td>LinkedIn:</td>
          <td>
            <a href="https://www.linkedin.com/in/ashwinimishra24/" 
               style="text-decoration: none; color:yellow;">
              ashwinimishra24
            </a>
          </td>
        </tr>
      </table>
    `
  },

  // -------------------------------------
  // SOCIAL MEDIA LINKS
  // Format: <table><tr><td>Label:</td><td><a href="">value</a></td></tr></table>
  // -------------------------------------
  social: {
    cue: "My social handles",
    response: `
      <table>
        <tr>
          <td>Email:</td>
          <td>
            <a href="mailto:ashwinimishra24@gmail.com" 
               style="text-decoration: none; color:yellow;">
              ashwinimishra24@gmail.com
            </a>
          </td>
        </tr>
        <tr>
          <td>LinkedIn:</td>
          <td>
            <a href="https://www.linkedin.com/in/ashwinimishra24/" 
               style="text-decoration: none; color:yellow;">
              ashwinimishra24
            </a>
          </td>
        </tr>
        <tr>
          <td>Github:</td>
          <td>
            <a href="https://github.com/ashwinimishra24" 
               style="text-decoration: none; color:yellow;">
              ashwinimishra24
            </a>
          </td>
        </tr>
        <tr>
          <td>Twitter/X:</td>
          <td>
            <a href="https://x.com/i_AshwiniMishra" 
               style="text-decoration: none; color:yellow;">
              i_AshwiniMishra
            </a>
          </td>
        </tr>
      </table>
    `
  },

  // -------------------------------------
  // RESUME LINK
  // Update your resume URL here
  // -------------------------------------
  // resume: {
  //   cue: "Get my resume",
  //   response: `
  //     <a href="link to resume" 
  //        style="text-decoration: none; color:#e7eae5;">
  //       <p><u>Click here to download.</u></p>
  //     </a>
  //     <br>
  //     <object data="link to resume" 
  //             type="application/pdf" 
  //             width="100%" 
  //             height="250px">
  //     <br>
  //   `
  // },

  // ========================================
  // UTILITY COMMANDS
  // (System commands - generally don't need to edit)
  // ========================================

  "": {
    cue: "",
    response: ""
  },

  clear: null,
  help: null,
  man: null,

  // -------------------------------------
  // KEYBOARD SHORTCUTS INFO
  // -------------------------------------
  shortcuts: {
    cue: "Keyboard shortcuts",
    response: `
      <table>
        <tr>
          <td>Tab</td>
          <td>Autocomplete command</td>
        </tr>
        <tr>
          <td>↑ / ↓</td>
          <td>Navigate command history</td>
        </tr>
        <tr>
          <td>Ctrl+C</td>
          <td>Clear current input</td>
        </tr>
        <tr>
          <td>Ctrl+L</td>
          <td>Clear screen</td>
        </tr>
        <tr>
          <td>Enter</td>
          <td>Execute command</td>
        </tr>
      </table>
      <p style='margin-top: 8px; margin-bottom: 0; color: #888;'>
        💡 Tip: Type partial commands (e.g., 'he' for 'help') and press Tab to autocomplete!
      </p>
    `
  },

  // ========================================
  // FUN & EASTER EGG COMMANDS
  // (These are for entertainment - edit as you like!)
  // ========================================

  // -------------------------------------
  // WELCOME MESSAGE
  // -------------------------------------
  welcome: {
    cue: "Welcome message",
    response: `
      <p style='color: #5fc95a; font-weight: 500;'>
        👋 Welcome to Ashwini's Terminal Portfolio!
      </p>
      <p style='margin-top: 8px;'>
        This is an interactive terminal-style portfolio. Here are some tips to get started:
      </p>
      <ul style='margin-top: 8px;'>
        <li>Type <span class='highlights'>help</span> to see all available commands</li>
        <li>Use <span class='highlights'>Tab</span> key to autocomplete commands</li>
        <li>Press <span class='highlights'>↑/↓</span> arrows to navigate command history</li>
        <li>Try <span class='highlights'>about</span> to learn more about me</li>
        <li>Type <span class='highlights'>fun</span> to see hidden easter eggs! 🎉</li>
      </ul>
      <p style='margin-top: 8px; color: #888;'>
        Pro tip: This terminal supports fuzzy matching - just type 'ab' instead of 'about'!
      </p>
    `
  },

  // -------------------------------------
  // WHO AM I
  // -------------------------------------
  whoami: {
    cue: "Current user info",
    response: `
      <p style='color: #5fc95a;'>guest@ashwini-portfolio</p>
      <p style='margin-top: 4px;'>
        You are browsing as: <span class='highlights'>Guest User</span>
      </p>
      <p style='margin-top: 4px;'>
        Terminal: <span class='highlights'>Ashwini's Portfolio v2.0</span>
      </p>
      <p style='margin-top: 4px;'>
        Shell: <span class='highlights'>bash-style terminal</span>
      </p>
      <p style='margin-top: 4px;'>
        Permissions: <span class='highlights'>read-only</span> (safe mode)
      </p>
    `
  },

  // -------------------------------------
  // DATE (Dynamic - handled in code)
  // -------------------------------------
  date: {
    cue: "Display current date and time",
    response: "" // Dynamically generated in commandService.js
  },

  // -------------------------------------
  // QUOTE (Dynamic - random quotes)
  // -------------------------------------
  quote: {
    cue: "Random inspirational quote",
    response: "" // Dynamically generated from funContent.js
  },

  // -------------------------------------
  // JOKE (Dynamic - random jokes)
  // -------------------------------------
  joke: {
    cue: "Random tech joke",
    response: "" // Dynamically generated from funContent.js
  },

  // -------------------------------------
  // MATRIX EASTER EGG
  // -------------------------------------
  matrix: {
    cue: "Enter the matrix",
    response: `
      <p style='color: #5fc95a; font-weight: 500;'>Wake up, Neo...</p>
      <p style='margin-top: 4px; color: #5fc95a;'>The Matrix has you...</p>
      <p style='margin-top: 4px;'>Follow the white rabbit. 🐰</p>
      <p style='margin-top: 8px; font-style: italic; color: #888;'>
        Knock, knock, Neo.
      </p>
    `
  },

  // -------------------------------------
  // FUN COMMANDS LIST
  // -------------------------------------
  fun: {
    cue: "List of fun commands",
    response: `
      <p style='color: #5fc95a; font-weight: 500;'>
        🎉 Easter Eggs & Fun Commands:
      </p>
      <table style='margin-top: 8px;'>
        <tr><td>whoami</td><td>Who are you?</td></tr>
        <tr><td>date</td><td>Current date and time</td></tr>
        <tr><td>quote</td><td>Random inspirational quote</td></tr>
        <tr><td>joke</td><td>Random tech joke</td></tr>
        <tr><td>matrix</td><td>Enter the Matrix</td></tr>
        <tr><td>banner</td><td>Show ASCII art banner</td></tr>
        <tr><td>tip</td><td>Random productivity tip</td></tr>
        <tr><td>sudo</td><td>Try it and see! 😉</td></tr>
      </table>
      <p style='margin-top: 8px; color: #888;'>
        Psst... There might be more hidden commands! Keep exploring!
      </p>
    `
  },

  // -------------------------------------
  // TIP (Dynamic - random tips)
  // -------------------------------------
  tip: {
    cue: "Random productivity tip",
    response: "" // Dynamically generated from funContent.js
  },

  // -------------------------------------
  // SUDO EASTER EGG
  // -------------------------------------
  sudo: {
    cue: "Attempt superuser access",
    response: `
      <p style='color: #ff5555;'>⚠️ Permission denied!</p>
      <p style='margin-top: 4px;'>
        Nice try! But you don't have sudo privileges here. 😄
      </p>
      <p style='margin-top: 4px; color: #888;'>
        This is a safe, read-only environment.
      </p>
      <p style='margin-top: 8px; font-style: italic; color: #888;'>
        "With great power comes great responsibility" - Uncle Ben
      </p>
    `
  },

  // -------------------------------------
  // BANNER - ASCII ART
  // -------------------------------------
  banner: {
    cue: "Display ASCII art banner",
    response: `
      <pre style='color: #5fc95a;'>
 █████╗ ███████╗██╗  ██╗██╗    ██╗██╗███╗   ██╗██╗   
██╔══██╗██╔════╝██║  ██║██║    ██║██║████╗  ██║██║   
███████║███████╗███████║██║ █╗ ██║██║██╔██╗ ██║██║   
██╔══██║╚════██║██╔══██║██║███╗██║██║██║╚██╗██║██║   
██║  ██║███████║██║  ██║╚███╔███╔╝██║██║ ╚████║██║██╗
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚═╝╚═╝</pre>
      <p style='margin-top: 8px; color: #888;'>
        ASCII art banner - Making terminals beautiful since 1963! 🎨
      </p>
    `
  }
};

// ========================================
// COMMAND ACTIONS
// (For future dynamic functionality)
// ========================================
export const COMMAND_ACTIONS = {
  // Reserved for future use
  // Example: openLink: (url) => window.open(url, '_blank')
};

/**
 * ========================================
 * EDITING GUIDE
 * ========================================
 * 
 * QUICK REFERENCE:
 * 
 * To add highlights (yellow text):
 *   <span class="highlights">your text</span>
 * 
 * To make text bold:
 *   <b>your text</b>
 * 
 * Experience / Projects / Education (list per item):
 *   <dt><b>Title or name</b></dt>
 *   <dd>Date or date range. (Optional: location)</dd>
 *   <ul>
 *     <li>Point 1</li>
 *     <li>Point 2</li>
 *   </ul>
 * 
 * To create a table (for skills/contact):
 *   <table>
 *     <tr>
 *       <td>Label:</td>
 *       <td>Value</td>
 *     </tr>
 *   </table>
 * 
 * To add a link:
 *   <a href="url" style="text-decoration: none; color:yellow;">
 *     Link Text
 *   </a>
 * 
 * AFTER EDITING:
 * 1. Save this file
 * 2. Run: npm run build
 * 3. Your changes will appear in the terminal!
 * 
 * ========================================
 */
