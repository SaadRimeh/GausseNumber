# GausseNumber

A small Expo + React Native starter app created with `create-expo-app` and using the Expo Router (file-based routing).

## Features

- Expo Router based structure (`app/`)
- Example screens in `app/screens` and a preserved starter in `app-example/`
- TypeScript-aware config and typings (`expo-env.d.ts`, `tsconfig.json`)

## Tech stack

- React Native (via Expo)
- Expo Router (file-based routing)
- Metro bundler (via Expo)

## Folder layout

- `app/` — Your app source (routes & screens)
- `app-example/` — Starter/example app preserved by `reset-project`
- `assets/` — Images and other static assets
- `package.json` — Scripts and dependencies
- `tsconfig.json` / `expo-env.d.ts` — TypeScript config and typings

## Setup

Prerequisites: Node.js (>=14), npm or yarn, and `npx` available.

Install dependencies:

```bash
npm install
# or
yarn
```

Start the development server:

```bash
npx expo start
# or
yarn expo start
```

Open on your device or emulator using the Expo dev tools (press `a` for Android emulator, `i` for iOS simulator, or scan the QR with Expo Go).

## Reset starter code

This repo includes a helper script that moves the starter example into `app-example` and creates a blank `app` directory so you can begin from a clean slate.

Run:

```bash
npm run reset-project
```

## Development notes

- Edit your app in `app/` using file-based routes. See `app/_layout.tsx` for layout and navigation setup.
- Example screens: `app/screens/HomeScreen.js`, `app/screens/GameScreen.js`.

## Build & deploy

Use the Expo documentation for building and deploying. For managed workflow builds consider using EAS:

```bash
npx eas build --platform all
```

## Contributing

Open issues or PRs; keep changes small and focused.


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

