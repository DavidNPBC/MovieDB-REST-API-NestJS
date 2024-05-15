import { Movie } from "src/movies/movies.entity";


export class GenreDto {
    id: number;
    name: string;
    movie: Movie[]
}