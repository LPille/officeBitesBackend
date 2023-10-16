"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipeController_1 = require("../controllers/recipeController");
const router = express_1.default.Router();
router.get('/recipes', recipeController_1.getAllRecipes);
router.post('/recipes', recipeController_1.addRecipe);
exports.default = router;
//# sourceMappingURL=recipeRoutes.js.map