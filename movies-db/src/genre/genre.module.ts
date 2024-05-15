import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Genre } from "./genre.entity";
import { GenreController } from "./genre.controller";
import { GenreService } from "./genre.service";
import { MovieModule } from "src/movies/movies.module";

@Module({
    imports: [TypeOrmModule.forFeature([Genre]),
        MovieModule],
    controllers: [GenreController],
    providers: [GenreService]
})

export class GenreModule {

}