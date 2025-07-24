import { Home as HomeContent } from "@/components";
import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Game Haven - Your Digital Game Library",
  description: "Browse and discover your favorite games in our digital library",
};

const Home = () => {
  return (
    <main
      className={styles["container"]}
      role="main"
      aria-label="Game library home page"
    >
      <HomeContent />
    </main>
  );
};

export default Home;
