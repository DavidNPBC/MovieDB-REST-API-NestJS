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
exports.GenreController = void 0;
const common_1 = require("@nestjs/common");
const genre_service_1 = require("./genre.service");
const genre_dto_1 = require("./genre.dto");
let GenreController = class GenreController {
    constructor(genreService) {
        this.genreService = genreService;
    }
    addGenre(dto) {
        return this.genreService.addGenre(dto);
    }
    listAllGenre() {
        return this.genreService.listAll();
    }
    listMoviesByGenre(name) {
        return this.genreService.listByGenre(name);
    }
    editGenreByName(name, dto) {
        return this.genreService.editGenreByName(name, dto);
    }
    editGenreById(id, dto) {
        return this.genreService.editGenreById(id, dto);
    }
    deleteGenreByName(name) {
        return this.genreService.deleteGenreByName(name);
    }
    deleteGenreById(id) {
        return this.genreService.deleteGenreById(id);
    }
};
exports.GenreController = GenreController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [genre_dto_1.GenreDto]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "addGenre", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "listAllGenre", null);
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "listMoviesByGenre", null);
__decorate([
    (0, common_1.Put)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, genre_dto_1.GenreDto]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "editGenreByName", null);
__decorate([
    (0, common_1.Put)('id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, genre_dto_1.GenreDto]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "editGenreById", null);
__decorate([
    (0, common_1.Delete)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "deleteGenreByName", null);
__decorate([
    (0, common_1.Delete)('id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "deleteGenreById", null);
exports.GenreController = GenreController = __decorate([
    (0, common_1.Controller)("genre"),
    __metadata("design:paramtypes", [genre_service_1.GenreService])
], GenreController);
//# sourceMappingURL=genre.controller.js.map