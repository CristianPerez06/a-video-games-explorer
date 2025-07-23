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
  involved_companies: {
    company: {
      name: string;
    };
  }[];
  rating: number;
  genres: {
    name: string;
  }[];
  summary: string;
  platforms: {
    name: string;
  }[];
  screenshots: {
    image_id: string;
  }[];
  similar_games: {
    id: number;
    name: string;
    cover: {
      image_id: string;
    };
  }[];
};

export interface SortOption {
  id: string;
  description: string;
}

export type GameDetails = {
  id: string;
  name: string;
  imageSrc?: string;
  releaseDate?: Date;
  publishers: {
    name: string;
  }[];
  rating?: number;
  genre: {
    name: string;
  }[];
  summary: string;
  platforms: string[];
  media: {
    imageId: string;
    imageSrc: string;
  }[];
  similarGames: {
    id: string;
    name: string;
    imageSrc?: string;
  }[];
};
