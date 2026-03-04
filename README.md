# 💼 Ashwini's Portfolio - Terminal Interface

A modern, terminal-style portfolio website built with React. Features an interactive command-line interface showcasing professional experience, skills, projects, and contact information.

## ✨ Features

- **Terminal-Style Interface**: Interactive command-line experience
- **Command System**: Type commands to navigate through portfolio sections
- **URL State Management**: Shareable URLs with command history
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Optimized Performance**: React.memo, useCallback, and custom hooks
- **Security Focused**: No eval(), secure command parsing
- **Modern Architecture**: Industry-standard folder structure

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd Portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# Serve the production build
npx serve -s build
```

## 📁 Project Structure

```
src/
├── assets/                                 # Static assets (images, fonts, etc.)
├── components/                             # React components
│   ├── common/                             # Reusable components
│   │   ├── CommandHistory.js
│   │   ├── CommandInput.js
│   │   ├── PromptAnswer.js
│   │   └── UserLog.js
│   ├── layout/                             # Layout components
│   │   ├── Header.js
│   │   └── Terminal.js
│   └── index.js                            # Component exports
├── config/                                 # Configuration files
│   ├── appConfig.js
│   └── index.js
├── constants/                              # Application constants
│   ├── commands.js
│   └── index.js
├── hooks/                                  # Custom React hooks
│   ├── useAutoScroll.js
│   ├── useCommandHistory.js
│   └── index.js
├── pages/                                  # Page components
│   └── Home.js
├── services/                               # Business logic & services
│   ├── commandService.js
│   └── index.js
├── styles/                                 # CSS styles
│   ├── App.css
│   ├── index.css
│   └── terminal.css
├── utils/                                 # Utility functions
│   ├── stringHelpers.js
│   └── index.js
├── App.js                                 # Main App component
└── index.js                               # Entry point
```

## 🎯 Available Commands

Type any of these commands in the terminal interface:

- `help` or `man` - Display all available commands
- `about` - Learn about me
- `experience` - View my work experience
- `education` - View my work education
- `skill` - See my technical skills
- `project` - Explore my projects
- `certificate` - View my certifications
- `contact` - Get my contact information
- `social` - Find me on social media
- `clear` - Clear the terminal

## 🔧 Configuration

### App Configuration

Edit `src/config/appConfig.js` to customize:
- Terminal username and hostname
- Color theme
- Banner ASCII art

### Commands

Edit `src/constants/commands.js` to:
- Add new commands
- Modify command responses
- Update command descriptions

## 🎨 Customization

### Colors

Theme colors are defined in `src/config/appConfig.js`:

```javascript
theme: {
  primary: "#4ee32c",      // Green
  secondary: "#1D4ED8",    // Blue
  background: "#300A24",   // Purple
  text: "#e7eae5",         // Off-white
  highlight: "yellow"      // Yellow
}
```

### Styling

- Global styles: `src/styles/index.css`
- App layout: `src/styles/App.css`
- Terminal interface: `src/styles/terminal.css`

## 🔒 Security Features

- ✅ No `eval()` usage - commands parsed securely
- ✅ Input sanitization
- ✅ No hardcoded credentials
- ✅ Safe HTML rendering with dangerouslySetInnerHTML only where necessary

## ⚡ Performance Optimizations

- React.memo for component memoization
- useCallback for function optimization
- Custom hooks for state management
- Code splitting ready
- Lazy loading support
- Optimized re-renders

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Development Notes

### Adding New Commands

1. Add command definition to `src/constants/commands.js`
2. Update command service if special logic needed
3. Test with `npm start`

### Custom Hooks

- `useCommandHistory`: Manages command history with URL sync
- `useAutoScroll`: Auto-scrolls to element on dependency change

### Component Organization

- **common/**: Reusable UI components
- **layout/**: Page layout components
- **pages/**: Full page components

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

### Deploy to GitHub Pages

1. **Create a GitHub repo** (e.g. `Portfolio`) and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Set the correct homepage** in `package.json` if your repo name or username differs:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/Portfolio"
   ```

3. **Install dependencies and deploy:**
   ```bash
   npm install
   npm run deploy
   ```

4. **Enable GitHub Pages** (if needed): Repo → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: **gh-pages** → **Save**.

Your site will be live at `https://YOUR_USERNAME.github.io/Portfolio`.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ashwini Mishra**

- Email: ashwinimishra24@gmail.com
- LinkedIn: [ashwinimishra24](https://www.linkedin.com/in/ashwinimishra24/)
- GitHub: [ashwinimishra24](https://github.com/ashwinimishra24)
- Twitter: [@i_AshwiniMishra](https://x.com/i_AshwiniMishra)

## 🙏 Acknowledgments

- Inspired by terminal/command-line interfaces
- Built with React and modern web technologies
- Ubuntu Mono font for authentic terminal feel

---

Made with ❤️ by Ashwini Mishra
