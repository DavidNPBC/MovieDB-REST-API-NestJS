import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { MovieModule } from './movies/movies.module';
import { GenreModule } from './genre/genre.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'movies',
    entities: [join(process.cwd(), 'dist/**/*.entity.js')],
    synchronize: true,
  }),
  MovieModule,
  GenreModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
