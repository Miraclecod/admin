"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FormLogin_1 = __importDefault(require("../components/FormLogin"));
const container = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};
const Login = () => {
    return (react_1.default.createElement("div", { style: container },
        react_1.default.createElement(FormLogin_1.default, null)));
};
exports.default = Login;
//# sourceMappingURL=Login.js.map