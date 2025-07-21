This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

Before running the development server, you need to set up IGDB API credentials:

1. **Get IGDB API Credentials:**

   - Go to [Twitch Developer Console](https://dev.twitch.tv/console)
   - Create a new application
   - Copy your `Client ID` and `Client Secret`

2. **Set Environment Variables:**
   Create a `.env.local` file in the root directory and add:

   ```
   IGDB_CLIENT_ID=your_client_id_here
   IGDB_CLIENT_SECRET=your_client_secret_here
   ```

   **Note:** These are server-side environment variables (no `NEXT_PUBLIC_` prefix) since the IGDB API is accessed through Next.js API routes for security.

### Development Server

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
# or
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Features

### Game Search

- **IGDB Integration**: Powered by the Internet Game Database API
- **Server-Side API**: Secure server-side integration with Next.js API routes
- **Real-time Search**: Search games by title, genre, developer, or publisher
- **Rich Game Data**: Includes cover images, descriptions, ratings, platforms, and more
- **Performance Optimized**: Caching and optimized API calls
- **Error Handling**: User-friendly error messages and loading states

### Component Architecture

- **Modular Design**: Reusable components following established patterns
- **TypeScript**: Full type safety throughout the application
- **SCSS Modules**: Scoped styling with modern CSS features

## API Configuration

The application uses the IGDB (Internet Game Database) API for game data through Next.js API routes:

- **Server-Side Authentication**: OAuth2 token management handled securely on the server
- **API Routes**:
  - `GET /api/games/search?q={query}` - Search for games
  - `GET /api/games/[id]` - Get detailed game information
- **Rate Limiting**: Built-in request optimization and caching
- **Error Handling**: Comprehensive error handling for API failures
- **Security**: Client secrets are never exposed to the browser

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Environment Variables for Deployment

When deploying, make sure to set the following environment variables in your deployment platform:

- `IGDB_CLIENT_ID` (server-side only)
- `IGDB_CLIENT_SECRET` (server-side only)

**Important:** These should be set as server-side environment variables, NOT as `NEXT_PUBLIC_` variables, to keep your credentials secure.
