import { Header, Content } from "./components";

import styles from "./Details.module.scss";

interface DetailsProps {
  slug: string;
}

const Details = ({ slug }: DetailsProps) => {
  return (
    <div className={styles["container"]}>
      <Header />
      <Content gameSlug={slug} />
    </div>
  );
};

export default Details;
