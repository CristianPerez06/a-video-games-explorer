"use client";

import { Header } from "@/app/components/shared";
import { Library } from "./components";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <Header onBack={() => {}} />
      <Library items={[]} />
    </div>
  );
};

export default Home;
