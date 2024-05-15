import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Movie } from "./movies.entity";
import { MovieController } from "./movies.controller";
import { MovieService } from "./movies.service";


@Module({
    imports: [TypeOrmModule.forFeature([Movie])],
    controllers: [MovieController],
    providers: [MovieService]
})
export class MovieModule {

}