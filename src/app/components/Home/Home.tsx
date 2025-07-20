"use client";

import { Header } from "@/app/components/shared";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <Header onBack={() => {}} />
    </div>
  );
};

export default Home;
