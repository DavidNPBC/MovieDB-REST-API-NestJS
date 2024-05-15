import { Genre } from "./genre.entity";
import { Repository } from "typeorm";
import { GenreDto } from "./genre.dto";
export declare class GenreService {
    private readonly genreRepo;
    constructor(genreRepo: Repository<Genre>);
    addGenre(dto: GenreDto): Promise<Genre>;
    listByGenre(name: string): Promise<Genre>;
    listAll(): Promise<Genre[]>;
    editGenreByName(name: string, dto: GenreDto): Promise<Genre>;
    editGenreById(id: number, dto: GenreDto): Promise<Genre>;
    deleteGenreByName(name: string): Promise<Genre>;
    deleteGenreById(id: number): Promise<Genre>;
}
