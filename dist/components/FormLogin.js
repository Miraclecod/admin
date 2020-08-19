"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
//@ts-ignore
const actions_1 = require("../redux/actionTypes/actions");
const FormLogin = () => {
    const initialState = { email: '', password: '' };
    const [user, setUser] = react_1.default.useState(initialState);
    const [submitted, setSubmitted] = react_1.default.useState(false);
    ;
    const dispatch = react_redux_1.useDispatch();
    // @ts-ignore
    function handleOnChange(e) {
        const { name, value } = e.target;
        setUser(Object.assign(Object.assign({}, user), { [name]: value }));
    }
    // @ts-ignore
    function handleOnClick(e) {
        const reg = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        e.preventDefault();
        setSubmitted(true);
        if (user.email && user.password && reg.test(user.email)) {
            dispatch(actions_1.userActions.login(user.email, user.password));
        }
        else {
        }
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { className: "formStyle" },
            react_1.default.createElement("p", { className: "textFormStyle" }, "Login : "),
            react_1.default.createElement("input", { type: "email", name: "email", className: "inputStyle", value: user.email, placeholder: "enter email", onChange: handleOnChange }),
            react_1.default.createElement("br", null),
            submitted && !user.email &&
                react_1.default.createElement("div", { className: "invalidFeedback" }, "Email is required"),
            react_1.default.createElement("br", null),
            react_1.default.createElement("p", { className: "textFormStyle" }, "Password : "),
            react_1.default.createElement("input", { type: "password", name: "password", className: "inputStyle", value: user.password, placeholder: "enter password", onChange: handleOnChange }),
            react_1.default.createElement("br", null),
            submitted && !user.password &&
                react_1.default.createElement("div", { className: "invalidFeedback" }, "Password is required"),
            react_1.default.createElement("br", null),
            react_1.default.createElement("button", { className: "buttonForm", onClick: handleOnClick }, "Log in"))));
};
exports.default = FormLogin;
//# sourceMappingURL=FormLogin.js.map