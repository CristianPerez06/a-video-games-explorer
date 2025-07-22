import styles from "./Summary.module.scss";

const Summary = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["item"]}>
        <span className={styles["title"]}>Summary</span>
        <p className={styles["description"]}>
          Grand Theft Auto V is a vast open world game set in Los Santos, a
          sprawling sun-soaked metropolis struggling to stay afloat in an era of
          economic uncertainty and cheap reality TV. The game blends
          storytelling and gameplay in new ways as players repeatedly jump in
          and out of the lives of the game’s three lead characters, playing all
          sides of the game’s interwoven story.
        </p>
      </div>
      <div className={styles["item"]}>
        <span className={styles["title"]}>Platforms</span>
        <p className={styles["description"]}>
          PC (Microsoft Windows) , PlayStation 3 , PlayStation 4 , Xbox 360 ,
          Xbox One
        </p>
      </div>
    </div>
  );
};

export default Summary;
