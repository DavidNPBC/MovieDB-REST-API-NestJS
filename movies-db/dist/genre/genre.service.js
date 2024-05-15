"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const genre_entity_1 = require("./genre.entity");
const typeorm_2 = require("typeorm");
let GenreService = class GenreService {
    constructor(genreRepo) {
        this.genreRepo = genreRepo;
    }
    async addGenre(dto) {
        const genre = this.genreRepo.create(dto);
        return await this.genreRepo.save(genre);
    }
    async listByGenre(name) {
        const genre = await this.genreRepo.findOne({
            where: { name },
            relations: {
                movie: true,
            }
        });
        const movies = genre;
        return movies;
    }
    async listAll() {
        return await this.genreRepo.find({
            relations: {
                movie: true,
            }
        });
    }
    async editGenreByName(name, dto) {
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
    async editGenreById(id, dto) {
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
    async deleteGenreByName(name) {
        const genre = await this.genreRepo.findOne({ where: { name } });
        if (!genre) {
            throw new common_1.NotFoundException(`Movie with name "${name}" not found`);
        }
        return await this.genreRepo.remove(genre);
    }
    async deleteGenreById(id) {
        const genre = await this.genreRepo.findOne({ where: { id } });
        if (!genre) {
            throw new common_1.NotFoundException(`Movie with name "${name}" not found`);
        }
        return await this.genreRepo.remove(genre);
    }
};
exports.GenreService = GenreService;
exports.GenreService = GenreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(genre_entity_1.Genre)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GenreService);
//# sourceMappingURL=genre.service.js.map