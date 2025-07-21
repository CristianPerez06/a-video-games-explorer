export type SavedGame = {
  id: string;
  imageSrc: string;
};

export type IGDBGame = {
  id: number;
  name: string;
  cover: {
    image_id: string;
  };
};
