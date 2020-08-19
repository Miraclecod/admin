"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FormRegister = () => {
    const initialState = { email: '', password: '', name: '', lastName: '' };
    const [user, setUser] = react_1.default.useState(initialState);
    const [submitted, setSubmitted] = react_1.default.useState(false);
    // @ts-ignore
    function handleOnChange(e) {
        const { name, value } = e.target;
        setUser(Object.assign(Object.assign({}, user), { [name]: value }));
    }
    // @ts-ignore
    function handleOnClick(e) {
        e.preventDefault();
        setSubmitted(true);
        if (user.name && user.password && user.name && user.lastName)
            console.log(user);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", null,
            react_1.default.createElement("input", { type: "email", className: "inputStyle", name: user.email, onChange: handleOnChange }),
            submitted && !user.email &&
                react_1.default.createElement("div", { className: "invalidFeedback" }, "Email is required"),
            react_1.default.createElement("input", { type: "password", name: user.password, className: "inputStyle", onChange: handleOnChange }),
            submitted && !user.password &&
                react_1.default.createElement("div", { className: "invalidFeedback" }, "Password is Required"),
            react_1.default.createElement("input", { type: "text", name: user.name, className: "inputStyle", onChange: handleOnChange }),
            submitted && !user.name &&
                react_1.default.createElement("div", { className: "invalidFeedback" }, "Name is required"),
            react_1.default.createElement("input", { type: "text", name: user.lastName, className: "inputStyle", onChange: handleOnChange }),
            submitted && !user.lastName &&
                react_1.default.createElement("div", { className: "invalidFeedback" }, "Lastname is required"),
            react_1.default.createElement("button", { onClick: handleOnClick, className: "buttonForm" }, "Registration"))));
};
exports.default = FormRegister;
//# sourceMappingURL=FormRegister.js.map