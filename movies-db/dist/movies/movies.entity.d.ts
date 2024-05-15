import { Genre } from "src/genre/genre.entity";
export declare class Movie {
    id: number;
    name: string;
    description: string;
    release_year: number;
    genre_id: number;
    genre: Genre;
    imdb_rating: number;
    imdb_link: string;
}
