import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Genre } from "./genre.entity";
import { Repository } from "typeorm";
import { GenreDto } from "./genre.dto";
import { Movie } from "src/movies/movies.entity";



@Injectable()
export class GenreService {

    constructor(@InjectRepository(Genre) private readonly genreRepo: Repository<Genre>) {
    }

    //create genre
    async addGenre(dto: GenreDto) {
        const genre = this.genreRepo.create(dto);

        return await this.genreRepo.save(genre);
    }

    //list movies by Genre name
    async listByGenre(name: string) {

        const genre = await this.genreRepo.findOne({
            where: { name },
            relations: {
                movie: true,
            }
        });

        const movies = genre;

        return movies;

    }

    //return the list of all genres
    async listAll() {
        return await this.genreRepo.find({
            relations: {
                movie: true,
            }
        });
    }

    //update/edit genre by Name
    async editGenreByName(name: string, dto: GenreDto) {
        const genre = await this.genreRepo.findOne({
            where: { name },
            relations: {
                movie: true,
            }
        });

        genre.name = dto.name;

        await this.genreRepo.save(genre);

        return genre;

    }

    //update/edit genre by Id
    async editGenreById(id: number, dto: GenreDto) {
        const genre = await this.genreRepo.findOne({
            where: { id },
            relations: {
                movie: true,
            }
        });

        genre.name = dto.name;

        await this.genreRepo.save(genre);

        return genre;

    }

    //delete genre by name
    async deleteGenreByName(name: string) {
        const genre = await this.genreRepo.findOne({ where: { name } });

        if (!genre) {
            throw new NotFoundException(`Movie with name "${name}" not found`);
        }

        return await this.genreRepo.remove(genre);
    }

        //delete genre
        async deleteGenreById(id: number) {
            const genre = await this.genreRepo.findOne({ where: { id } });
    
            if (!genre) {
                throw new NotFoundException(`Movie with name "${name}" not found`);
            }
    
            return await this.genreRepo.remove(genre);
        }

}

