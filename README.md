# Anki AI Frontend

A frontend application for a spaced repetition system inspired by Anki.

## About

The goal of this project is to build a modern alternative to Anki with a different vision of the learning experience.

This is **not intended to be a one-to-one clone of Anki**. Instead, the project aims to implement the features and workflows that I personally prefer while preserving the core principles that make Anki an excellent learning tool.

The project is currently in the early stages of development.

At the moment, the following functionality is available:

- Browse cards within a deck
- Server-side pagination
- View individual cards
- Delete cards

Planned features include:

- Creating and editing cards
- Reviewing cards
- Search and filtering
- Tags
- Import and export
- AI-powered features
- And more

---

## Backend

This frontend requires the backend application to run.

Before starting the frontend, clone and run the backend:

https://github.com/Legoshi404/anki-ai-backend

---

## Requirements

The recommended development environment is:

- Node.js 22+
- npm 10+
- Git

---

## Installation

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Mantine
- Fetch API
- ESLint
- Prettier

---

## Architecture

The project follows the **Feature-Sliced Design (FSD)** architecture.

The codebase is organized into independent layers to improve scalability, maintainability, and separation of concerns.

---

## Current Status

🚧 This project is under active development.

Currently implemented:

- Browse cards within a deck
- Server-side pagination
- View individual cards
- Delete cards
