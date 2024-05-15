import { GenreService } from "./genre.service";
import { GenreDto } from "./genre.dto";
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    addGenre(dto: GenreDto): Promise<import("./genre.entity").Genre>;
    listAllGenre(): Promise<import("./genre.entity").Genre[]>;
    listMoviesByGenre(name: string): Promise<import("./genre.entity").Genre>;
    editGenreByName(name: string, dto: GenreDto): Promise<import("./genre.entity").Genre>;
    editGenreById(id: number, dto: GenreDto): Promise<import("./genre.entity").Genre>;
    deleteGenreByName(name: string): Promise<import("./genre.entity").Genre>;
    deleteGenreById(id: number): Promise<import("./genre.entity").Genre>;
}
