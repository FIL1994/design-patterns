import axios, { AxiosInstance } from "axios";
import got, { GotJSONOptions } from "got";

interface IRequester {
  get(url: string): Promise<any>;
}

class Requester implements IRequester {
  public async get(url: string): Promise<any> {
    const options: GotJSONOptions = {
      json: true
    };

    const response = await got(url, options);

    return response.body;
  }
}

class Adapter extends Requester {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    super();
    this.axios = axios;
  }

  public async get(url: string): Promise<any> {
    const response = await axios.get(url, { responseType: "json" });

    return response.data;
  }
}

async function makeRequest(requester: Requester): Promise<any> {
  const data = await requester.get(
    "https://jsonplaceholder.typicode.com/todos/4"
  );

  return data;
}

async function run() {
  console.log("making requests");

  const requester = new Requester();
  const adapter = new Adapter(axios);

  console.log("requester", await makeRequest(requester));
  console.log("adapter", await makeRequest(adapter));
}

run();
