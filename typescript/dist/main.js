"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var routes_1 = __importDefault(require("./router/routes"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(morgan_1.default('tiny'));
app.use(helmet_1.default());
app.use('/tweet', routes_1.default);
app.use(function (req, res, next) {
    res.sendStatus(404);
});
app.use(function (error, req, res, next) {
    console.error(error);
    res.sendStatus(500);
});
app.listen(8080);
//# sourceMappingURL=main.js.map