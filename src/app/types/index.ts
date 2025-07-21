export type SavedGame = {
  id: string;
  imageSrc?: string;
  releaseDate?: Date;
  addedAt: Date;
};

export type IGDBGame = {
  id: number;
  name: string;
  cover: {
    image_id: string;
  };
  first_release_date: number;
};

export interface SortOption {
  id: string;
  description: string;
}
