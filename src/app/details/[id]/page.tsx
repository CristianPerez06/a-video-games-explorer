import { Details as DetailsContent } from "@/components";

import styles from "./details.module.scss";

interface DetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const Details = async ({ params }: DetailsPageProps) => {
  const { id } = await params;

  return (
    <div className={styles["container"]}>
      <DetailsContent gameId={id} />
    </div>
  );
};

export default Details;
