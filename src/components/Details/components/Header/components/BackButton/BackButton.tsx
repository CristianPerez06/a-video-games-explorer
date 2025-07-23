"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";

import styles from "./BackButton.module.scss";

const BackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button className={styles["container"]} onClick={handleClick}>
      <ArrowLeftIcon className={styles["icon"]} />
      <span className={styles["text"]}>Back</span>
    </button>
  );
};

export default BackButton;
