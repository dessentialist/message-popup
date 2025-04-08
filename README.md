# Terminal Interface Demo

An interactive terminal interface that simulates a command-line environment in the browser.

## Features

- Real-time command typing simulation
- Authentic terminal appearance
- Custom command responses
- Smooth animations and effects

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Start the production server:
```bash
npm start
```

## Available Commands

The demo currently supports these commands:
- `echo "Hello World! 👋"` - Displays a welcome message
- `whoami` - Shows user information
- `uptime` - Displays system uptime

## Project Structure

```
terminal-interface/
├── index.html      # Main HTML file
├── style.css       # Terminal styling
├── script.js       # Terminal logic
├── server.js       # Express server
└── package.json    # Project dependencies
```

## Development

To run the development server with hot reload:
```bash
npm run dev
```

The server will start on http://localhost:3000

## License

MIT 