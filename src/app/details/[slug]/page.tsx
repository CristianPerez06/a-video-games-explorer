import { Metadata } from "next";
import { Details as DetailsContent } from "@/components";

import styles from "./details.module.scss";

interface DetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: DetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.split("-").join(" ");

  return {
    title: `${title} - Game Details | Game Haven`,
    description: `Details and information about ${title}`,
  };
}

const Details = async ({ params }: DetailsPageProps) => {
  const { slug } = await params;

  return (
    <main
      className={styles["container"]}
      role="main"
      aria-label="Game details page"
    >
      <DetailsContent slug={slug} />
    </main>
  );
};

export default Details;
