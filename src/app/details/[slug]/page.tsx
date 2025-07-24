import { Details as DetailsContent } from "@/components";

import styles from "./details.module.scss";

interface DetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Details = async ({ params }: DetailsPageProps) => {
  const { slug } = await params;

  return (
    <div className={styles["container"]}>
      <DetailsContent slug={slug} />
    </div>
  );
};

export default Details;
