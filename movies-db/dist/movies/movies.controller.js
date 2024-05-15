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
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movies_service_1 = require("./movies.service");
const movies_dto_1 = require("./movies.dto");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    addMovie(dto) {
        return this.movieService.addMovie(dto);
    }
    findByName(name) {
        return this.movieService.findByName(name);
    }
    findById(id) {
        return this.movieService.findById(id);
    }
    listAll() {
        return this.movieService.listAll();
    }
    editById(id, dto) {
        return this.movieService.editById(id, dto);
    }
    editByName(name, dto) {
        return this.movieService.editByName(name, dto);
    }
    deletebyId(id) {
        return this.movieService.deleteByMovieId(id);
    }
    deleteByName(name) {
        return this.movieService.deleteByMovieName(name);
    }
};
exports.MovieController = MovieController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movies_dto_1.MovieDto]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "addMovie", null);
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "findByName", null);
__decorate([
    (0, common_1.Get)('id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "listAll", null);
__decorate([
    (0, common_1.Put)('id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, movies_dto_1.MovieDto]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "editById", null);
__decorate([
    (0, common_1.Put)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, movies_dto_1.MovieDto]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "editByName", null);
__decorate([
    (0, common_1.Delete)('id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "deletebyId", null);
__decorate([
    (0, common_1.Delete)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "deleteByName", null);
exports.MovieController = MovieController = __decorate([
    (0, common_1.Controller)("movie"),
    __metadata("design:paramtypes", [movies_service_1.MovieService])
], MovieController);
//# sourceMappingURL=movies.controller.js.map