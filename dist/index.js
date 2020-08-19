"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
//@ts-ignore
const rootReducer_1 = require("./redux/rootReducer");
const Login_1 = __importDefault(require("./Pages/Login"));
require("./styles/main.sass");
//const sagaMiddleware = createSagaMiddleware()
const store = redux_1.createStore(rootReducer_1.rootReducer, redux_1.compose(redux_1.applyMiddleware(redux_thunk_1.default), 
//@ts-ignore
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
//sagaMiddleware.run(Saga)
react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
    react_1.default.createElement(Login_1.default, null)), document.getElementById("app"));
//# sourceMappingURL=index.js.map