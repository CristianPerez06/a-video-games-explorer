import { Header, Content } from "./components";

import styles from "./Details.module.scss";

interface DetailsProps {
  slug: string;
}

const Details = ({ slug }: DetailsProps) => {
  return (
    <article
      className={styles["container"]}
      role="article"
      aria-label="Game details content"
    >
      <Header />
      <Content gameSlug={slug} />
    </article>
  );
};

export default Details;
