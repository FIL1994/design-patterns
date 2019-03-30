"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const got_1 = __importDefault(require("got"));
class Requester {
    async get(url) {
        const options = {
            json: true
        };
        const response = await got_1.default(url, options);
        return response.body;
    }
}
class Adapter extends Requester {
    constructor(axios) {
        super();
        this.axios = axios;
    }
    async get(url) {
        const response = await axios_1.default.get(url, { responseType: "json" });
        return response.data;
    }
}
async function makeRequest(requester) {
    const data = await requester.get("https://jsonplaceholder.typicode.com/todos/4");
    return data;
}
async function run() {
    console.log("making requests");
    const requester = new Requester();
    const adapter = new Adapter(axios_1.default);
    console.log("requester", await makeRequest(requester));
    console.log("adapter", await makeRequest(adapter));
}
run();
