# Gaming Haven Z

Gaming Haven Z is a modern web application that serves as your ultimate destination for exploring and discovering video games. Built with Next.js and powered by the IGDB API, it provides a seamless and interactive experience for gamers to search, browse, and learn about their favorite games.

## Key Features

- **Extensive Game Database**: Access a vast collection of games with detailed information including descriptions, ratings, release dates, and platforms
- **Smart Search**: Find games quickly with an intelligent search system that provides real-time suggestions
- **Responsive Design**: Enjoy a consistent experience across all devices with a mobile-first, responsive interface
- **Modern UI/UX**: Clean, intuitive interface designed for optimal user experience
- **Performance Optimized**: Fast loading times and smooth interactions through Next.js optimizations

Whether you're a casual gamer looking to discover new titles or a gaming enthusiast seeking detailed information about specific games, Gaming Haven Z provides the tools and information you need in an elegant, user-friendly package.

## Live Demo

Experience Gaming Haven Z in action at [https://aerolab-frontend-code-challenge.vercel.app/](https://aerolab-frontend-code-challenge.vercel.app/). The production deployment showcases all features in a fully optimized environment, demonstrating the smooth performance and polished user experience you can expect from the application.

## Running locally

In case you are curious about running Gaming Haven Z locally, we've made it super easy to get started! Follow these simple steps to set up your own development environment and explore the codebase.

### Prerequisites

Before running the development server, you need to set up IGDB API credentials:

**Set Environment Variables:**
Create a `.env` file in the root directory and add:

```
IGDB_CLIENT_ID=your_client_id_here
IGDB_CLIENT_SECRET=your_client_secret_here
```

### Development Server

Next step is to install dependencies and run the development server:

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

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to experience the application firsthand.

### Storybook

Storybook is a powerful tool for UI component development. It allows developers to create and manage UI components in isolation, making it easier to build and maintain user interfaces. Storybook also provides a way to document and test components, ensuring consistent and reliable UI development. It's a great way to visualize and interact with the components in different states, making it easier to develop, test, and showcase UI components.
To explore the app's basic components, utilize Storybook. Execute the following commands to access it:

```bash
npm run storybook
# or
yarn storybook
# or
pnpm run storybook
# or
bun storybook
```

Open your browser and go to [http://localhost:6006](http://localhost:6006) to explore the app's basic components.

## Technical Stack

Gaming Haven Z is built using the following technologies:

- **Next.js**: A React framework that enables server-side rendering and other optimizations for a better user experience.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and developer productivity.
- **SCSS**: A preprocessor scripting language that extends CSS with advanced features like variables, nesting, and mixins, making it easier to write and maintain stylesheets.
- **Vercel**: A cloud platform for static sites and serverless functions, used for hosting the application.
- **IGDB API**: The Internet Game Database API, used for fetching game data.
- **ESLint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, used for code quality and consistency.
- **Prettier**: An opinionated code formatter, used for code formatting consistency.
- **Cursor**: The integrated development environment (IDE) used for writing and editing code.
- **GitHub**: The version control system used for managing the codebase.
- **Figma**: The tool used for design and prototyping.
- **React Toastify**: The tool used for displaying notifications in the application.
- **Date fns**: A lightweight JavaScript library for working with dates and times, providing a simple and intuitive API for date manipulation and formatting.
- **Lodash**: A utility library that provides a wide range of functional programming helpers, making it easier to work with arrays, objects, and functions in JavaScript.
- **Lucide React**: A React component library for building user interfaces with a focus on simplicity, consistency, and ease of use.
- **Zustand**: A small, fast, and scalable state management library for React applications that simplifies state management and debugging.
- **Storybook**: A tool for UI component development that allows developers to create and manage UI components in isolation, making it easier to build and maintain user interfaces.
- **Jest**: A JavaScript testing framework with a focus on simplicity and support for large web applications, used for unit and integration testing.

## Notes for the Reviewer

- The app isn’t currently connected to a backend to save data and uses Zustand to manage state instead. On first load, the Home page fetches the top 10 rated games from IGDB and stores them in state to mimic saved games, avoiding an empty state. After that, you can add or remove games from the Saved Games list. If you remove all games, the empty state will show.
- Regarding the following requirement:
  > The logo should be visible and clickable, returning the user to the home screen.
- The designs for the Details page show a Back Button instead of a Logo. A Logo would be clearer for users, as it’s commonly understood to link to the Home page. A Back Button, however, takes users to the previous page, which isn’t always the Home page. For example, if a user clicks a game in the Similar Games section, they’re taken to that game’s Details page, and the Back Button would return them to the previous Details page. Just wanted to point out that the designs don’t align with the requirement.
