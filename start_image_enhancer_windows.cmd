@echo off
setlocal

cd /d "%~dp0"
title Image Enhancer

echo Starting Image Enhancer Electron UI...
echo Project directory: %CD%
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Please install Node.js first.
  echo Download: https://nodejs.org/
  echo.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found. Please install Node.js with npm first.
  echo Download: https://nodejs.org/
  echo.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo Installing Electron dependencies...
  if not defined ELECTRON_MIRROR set "ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/"
  call npm install
  set "INSTALL_CODE=%ERRORLEVEL%"
  if not "%INSTALL_CODE%"=="0" (
    echo.
    echo Dependency installation failed with code %INSTALL_CODE%.
    pause
    exit /b %INSTALL_CODE%
  )
)

echo Launching Electron app...
call npm start
set "EXIT_CODE=%ERRORLEVEL%"

if not "%EXIT_CODE%"=="0" (
  echo.
  echo Electron app exited with code %EXIT_CODE%.
  pause
)

exit /b %EXIT_CODE%
