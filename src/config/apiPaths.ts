import { hostname } from "os";

const tesApi = (day: string, query: string) => {
  return `/api/test/data?day=${day}&query=${query}`;
};


export default {
  tesApi
};
