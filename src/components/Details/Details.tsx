import { Header, Content } from "./components";

import styles from "./Details.module.scss";

interface DetailsProps {
  gameId: string;
}

const Details = ({ gameId }: DetailsProps) => {
  return (
    <div className={styles["container"]}>
      <Header />
      <Content gameId={gameId} />
    </div>
  );
};

export default Details;
