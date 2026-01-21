export interface Game {
  id: number;
  title: string;
  image: string;
  rating: number;
  category: string;
  trending?: boolean;
  reviews: number;
  description: string;
  releaseDate: string;
  screenshots: string[];
  videoUrl?: string;
  userReviews: {
    id: number;
    author: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}
