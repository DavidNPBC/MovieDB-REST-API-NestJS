import { Genre } from "src/genre/genre.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity({})
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    release_year: number;

    @Column({ name: 'genre_id' })
    genre_id: number;

    @ManyToOne(() => Genre, genre => genre.movie)
    @JoinColumn({ name: 'genre_id' })
    genre: Genre;

    @Column({ type: 'decimal', precision: 3, scale: 1 })
    imdb_rating: number;

    @Column()
    imdb_link: string
}