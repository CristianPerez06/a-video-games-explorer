"use client";

import { Header } from "@/app/components/shared";
import { Library } from "./components";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <Header onBack={() => {}} />
      <Library
        items={[
          { id: "1", imageSrc: "https://via.placeholder.com/150" },
          { id: "2", imageSrc: "https://via.placeholder.com/150" },
          { id: "3", imageSrc: "https://via.placeholder.com/150" },
          { id: "4", imageSrc: "https://via.placeholder.com/150" },
          { id: "5", imageSrc: "https://via.placeholder.com/150" },
          { id: "6", imageSrc: "https://via.placeholder.com/150" },
          { id: "7", imageSrc: "https://via.placeholder.com/150" },
          { id: "8", imageSrc: "https://via.placeholder.com/150" },
          { id: "9", imageSrc: "https://via.placeholder.com/150" },
          { id: "10", imageSrc: "https://via.placeholder.com/150" },
          { id: "11", imageSrc: "https://via.placeholder.com/150" },
          { id: "12", imageSrc: "https://via.placeholder.com/150" },
          { id: "13", imageSrc: "https://via.placeholder.com/150" },
          { id: "14", imageSrc: "https://via.placeholder.com/150" },
          { id: "15", imageSrc: "https://via.placeholder.com/150" },
          { id: "16", imageSrc: "https://via.placeholder.com/150" },
          { id: "17", imageSrc: "https://via.placeholder.com/150" },
          { id: "18", imageSrc: "https://via.placeholder.com/150" },
          { id: "19", imageSrc: "https://via.placeholder.com/150" },
          { id: "20", imageSrc: "https://via.placeholder.com/150" },
        ]}
      />
    </div>
  );
};

export default Home;
