import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { GenreService } from "./genre.service";
import { GenreDto } from "./genre.dto";
import { MovieService } from "../movies/movies.service";



@Controller("genre")
export class GenreController {
    constructor(private readonly genreService: GenreService) { }

    @Post()
    addGenre(@Body() dto: GenreDto) {
        return this.genreService.addGenre(dto);
    }


    @Get()
    listAllGenre() {
        return this.genreService.listAll();
    }

    @Get(':name')
    listMoviesByGenre(@Param('name') name: string) {
        return this.genreService.listByGenre(name);
    }

    @Put(':name')
    editGenreByName(@Param('name') name: string, @Body() dto: GenreDto) {
        return this.genreService.editGenreByName(name, dto);
    }

    @Put('id/:id')
    editGenreById(@Param('id') id: number, @Body() dto: GenreDto) {
        return this.genreService.editGenreById(id, dto);
    }

    @Delete(':name')
    deleteGenreByName(@Param('name') name: string) {
        return this.genreService.deleteGenreByName(name);
    }
    @Delete('id/:id')
    deleteGenreById(@Param('id') id: number) {
        return this.genreService.deleteGenreById(id);
    }



}