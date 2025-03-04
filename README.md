# Chrome DevTools Frontend Build

This repository automatically builds and publishes the Chrome DevTools frontend to npm.

## About

This package provides a pre-built version of the Chromium DevTools frontend, making it easy to use in other projects without having to build it from source.

## Installation

```bash
npm install chrome-devtools-frontend-build
pnpm add chrome-devtools-frontend-build
```

## Build Process

The DevTools frontend is built from the official Chromium source using the following tools:
- depot_tools
- gn
- ninja

The build process runs on GitHub Actions whenever changes are pushed to the main branch. The resulting package is versioned based on the date and commit hash, then published to npm.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
