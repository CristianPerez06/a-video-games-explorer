# a-video-games-explorer

A modern web application that serves as your ultimate destination for exploring and discovering video games. Built with Next.js and powered by the IGDB API, it provides a seamless and interactive experience for gamers to search, browse, and learn about their favorite games.

## Tech stack

- ReactJS
- NextJS
- Typescript
- SCSS
- IGDB API
- classnames
- react-toastify
- date-fns
- lodash
- lucide-react
- zustand
- storybook
- Prettier and ESLint

## Getting Started

### Prerequisites

Before running the development server, you need to set up the connection to IGDB API.

**Set Environment Variables**

Create a `.env` file in the root directory and add:

```
IGDB_CLIENT_ID=your_client_id_here
IGDB_CLIENT_SECRET=your_client_secret_here
```

### Development Server

Next step is to install dependencies, run the development server and storybook:

```bash
To run the application locally:

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Run Storybook: `npm run storybook`
```

## Live Demo

A live version of this app is hosted on [Vercel](https://vercel.com/) (free tier). Please note:

- The app may take several seconds to start on first use, as the server may be sleeping.
- Performance may be limited during periods of high usage.

[View the live demo here](https://a-video-game-explorer.vercel.app/)
