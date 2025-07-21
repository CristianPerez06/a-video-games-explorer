"use client";

import { Header } from "@/app/components/shared";
import { Library } from "./components";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <Header
        onGameSelected={(id) => {
          console.log("Game selected - id: ", id);
        }}
        onBack={() => {}}
      />
      <Library items={[]} />
    </div>
  );
};

export default Home;
