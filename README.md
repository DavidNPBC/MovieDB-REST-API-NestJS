## Coding Challenge

This was a coding challenge I did in 72h.
I was challenged to do the backend part of a project that would store movies in a database.
I was challenged to do it in technology I had never worked with and managed to complete the challenge
The technology is Nest.JS and Typescript

## Running the app

To run the app just enter npm start run:prod or npm start run:dev
Then you can use postman to interact with the data
This project uses MySQL as the database and assumes you have a root user with no password

## Functionalities

Basically, in this project there are movies that have a ManyToOne relationship with genres.
Hence, you can add, edit, search and delete movies or genres.
One can edit and delete movies and genres by both Id or by Name
One can list all genres and all movies of a specific genre
One can find a movie by its id or by its name

For Movies:
(GET) Find All Movies endpoint: localhost:3000/movie/
(POST) Add Movie endpoint: localhost:3000/movie/
(GET) Find Movie By Id: localhost:3000/movie/id/{id} ex: localhost:3000/movie/id/1 
(GET) Find Movie BY Name: localhost:3000/movie/{name} ex: localhost:3000/movie/Inglourious%20Basterds
(PUT) Update Movie By Id: localhost:3000/movie/id/{id} ex: localhost:3000/movie/id/1 
(PUT) Update Movie By Name: localhost:3000/movie/{name} ex: localhost:3000/movie/Inglourious%20Basterds
(DELETE) Delete Movie By Id: localhost:3000/movie/id/{id} ex: localhost:3000/movie/id/1 
(DELETE) Delete Movie By Name: localhost:3000/movie/{name} ex: localhost:3000/movie/Inglourious%20Basterds

For Genres:
(GET) Find All Genres endpoint: localhost:3000/genre/
(POST) Add Movie endpoint: localhost:3000/genre/
(GET) Find All Movies By Genre: localhost:3000/genre/{genre} ex: localhost:3000/genre/War
(PUT) Update Genre By Id: localhost:3000/genre/id/{id} ex: localhost:3000/genre/id/1 
(PUT) Update Genre By Name: localhost:3000/genre/{name} ex: localhost:3000/genre/War
(DELETE) Delete Genre By Id: localhost:3000/genre/id/{id} ex: localhost:3000/genre/id/1 
(DELETE) Delete Genre By Name: localhost:3000/genre/{name} ex: localhost:3000/genre/War
