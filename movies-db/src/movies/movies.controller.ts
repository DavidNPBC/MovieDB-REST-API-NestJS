import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { MovieService } from "./movies.service";
import { MovieDto } from "./movies.dto";



@Controller("movie")
export class MovieController {
    constructor(private readonly movieService: MovieService) { }

    @Post()
    addMovie(@Body() dto: MovieDto) {
        return this.movieService.addMovie(dto);
    }

    @Get(':name')
    findByName(@Param('name') name: string) {
        return this.movieService.findByName(name);
    }

    @Get('id/:id')
    findById(@Param('id') id: number) {
        return this.movieService.findById(id);
    }

    @Get()
    listAll() {
        return this.movieService.listAll();
    }

    @Put('id/:id')
    editById(@Param('id') id: number, @Body() dto: MovieDto) {
        return this.movieService.editById(id, dto);
    }

    @Put(':name')
    editByName(@Param('name') name: string, @Body() dto: MovieDto) {
        return this.movieService.editByName(name, dto);
    }


    @Delete('id/:id')
    deletebyId(@Param('id') id: number) {
        return this.movieService.deleteByMovieId(id);
    }

    @Delete(':name')
    deleteByName(@Param('name') name: string) {
        return this.movieService.deleteByMovieName(name);
    }



}