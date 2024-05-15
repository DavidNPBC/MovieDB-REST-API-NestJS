import { MovieService } from "./movies.service";
import { MovieDto } from "./movies.dto";
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    addMovie(dto: MovieDto): Promise<import("./movies.entity").Movie>;
    findByName(name: string): Promise<import("./movies.entity").Movie>;
    findById(id: number): Promise<import("./movies.entity").Movie>;
    listAll(): Promise<import("./movies.entity").Movie[]>;
    editById(id: number, dto: MovieDto): Promise<import("./movies.entity").Movie>;
    editByName(name: string, dto: MovieDto): Promise<import("./movies.entity").Movie>;
    deletebyId(id: number): Promise<import("./movies.entity").Movie>;
    deleteByName(name: string): Promise<import("./movies.entity").Movie>;
}
