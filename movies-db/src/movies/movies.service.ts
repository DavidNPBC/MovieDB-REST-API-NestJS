import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movie } from "./movies.entity";
import { Repository } from "typeorm";
import { MovieDto } from "./movies.dto";



@Injectable()
export class MovieService {
    constructor(@InjectRepository(Movie) private readonly movieRepo: Repository<Movie>) {
    }

    //create movie
    async addMovie(dto: MovieDto) {
        const movie = this.movieRepo.create(dto); 
        return await this.movieRepo.save(movie); 
    }

    //find one movie by name
    async findByName(name: string): Promise<Movie> {
        const movie = await this.movieRepo.findOne({ where: { name } });
        if (!movie) {
            throw new NotFoundException(`Movie with name "${name}" not found`);
        }
        return movie;
    }

        //find one movie by id
        async findById(id: number): Promise<Movie> {
            const movie = await this.movieRepo.findOne({ where: { id } });
            if (!movie) {
                throw new NotFoundException(`Movie with name "${name}" not found`);
            }
            return movie;
        }

    //return the list of all movies
    async listAll() {
        return await this.movieRepo.find({
            relations: {
                genre: true,
            }
        });
    }

    //update/edit movie by id
    async editById(id: number, dto: MovieDto) {
        const movie = await this.movieRepo.findOne({ where: { id } });

        Object.assign(movie, dto);

        await this.movieRepo.save(movie);

        return movie;
    }


    //update/edit movie by name
    async editByName(name: string, dto: MovieDto) {
        const movie = await this.movieRepo.findOne({ where: { name } });

        Object.assign(movie, dto);

        await this.movieRepo.save(movie);

        return movie;
    }

    //delete movie by id
    async deleteByMovieId(id: number) {
        const movie = await this.movieRepo.findOne({ where: { id } });

        if (!movie) {
            throw new NotFoundException(`Movie with id "${id}" not found`);
        }

        return await this.movieRepo.remove(movie);
    }

        //delete movie by name
        async deleteByMovieName(name: string) {
            const movie = await this.movieRepo.findOne({ where: { name } });
    
            if (!movie) {
                throw new NotFoundException(`Movie with name "${name}" not found`);
            }
    
            return await this.movieRepo.remove(movie);
        }
    



}