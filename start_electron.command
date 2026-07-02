#!/bin/bash
set -e

cd "$(dirname "$0")"

export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

echo "Starting Image Enhancer Electron UI..."
echo "Project directory: $(pwd)"
echo

pause_before_exit() {
  read -r -p "Press Enter to close..."
}

if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo "Node.js and npm were not found. Please install Node.js first."
  echo "Download: https://nodejs.org/"
  pause_before_exit
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo "Installing Electron dependencies..."
  ELECTRON_MIRROR="${ELECTRON_MIRROR:-https://npmmirror.com/mirrors/electron/}" npm install
fi

echo "Launching Electron app..."
set +e
npm start
EXIT_CODE=$?
set -e

if [ "$EXIT_CODE" -ne 0 ]; then
  echo
  echo "Electron app exited with code $EXIT_CODE."
  pause_before_exit
fi

exit "$EXIT_CODE"
