import { Movie } from "src/movies/movies.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({})
export class Genre {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Movie, (movie) => movie.genre)
    movie: Movie[];

}