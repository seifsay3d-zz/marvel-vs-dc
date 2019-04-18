import axios from "../axiosInstance";
import Config from "@/api/modules/characters/config.json";
import MockData from "@/api/modules/characters/mockData.json";
import MockAdapter from "axios-mock-adapter";

import ROUTES from "@/api/modules/characters/routes";

if (Config.mocks) {
  const mock = new MockAdapter(axios);
  mock.onGet(ROUTES.GET_CHARACTERS).reply(200, MockData.list);
  mock.onGet(ROUTES.GET_MATCHES).reply(200, [
    {
      first: MockData.list[0],
      second: MockData.list[1]
    },
    {
      first: MockData.list[1],
      second: MockData.list[2]
    },
    {
      first: MockData.list[0],
      second: MockData.list[2]
    }
  ]);
  mock.onGet(`${ROUTES.GET_CHARACTER}`).reply(200, MockData.list[0]);
  mock.onGet(`${ROUTES.GET_MATCH}`).reply(200, {
    first: MockData.list[0],
    second: MockData.list[1]
  });
}

export default {
  getCharacters() {
    return axios.get(ROUTES.GET_CHARACTERS);
  },
  getCharacter(id: number) {
    return axios.get(`${ROUTES.GET_CHARACTER}`);
  },
  getMatches() {
    return axios.get(`${ROUTES.GET_MATCHES}`);
  },
  getMatch(first: number, second: number) {
    return axios.get(`${ROUTES.GET_MATCH}`);
  }
};
