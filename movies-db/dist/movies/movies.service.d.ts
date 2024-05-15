import { Movie } from "./movies.entity";
import { Repository } from "typeorm";
import { MovieDto } from "./movies.dto";
export declare class MovieService {
    private readonly movieRepo;
    constructor(movieRepo: Repository<Movie>);
    addMovie(dto: MovieDto): Promise<Movie>;
    findByName(name: string): Promise<Movie>;
    findById(id: number): Promise<Movie>;
    listAll(): Promise<Movie[]>;
    editById(id: number, dto: MovieDto): Promise<Movie>;
    editByName(name: string, dto: MovieDto): Promise<Movie>;
    deleteByMovieId(id: number): Promise<Movie>;
    deleteByMovieName(name: string): Promise<Movie>;
}
