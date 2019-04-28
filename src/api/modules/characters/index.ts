import axios from "../axiosInstance";
import Config from "@/api/modules/characters/config.json";
import CharacterMock from "@/api/modules/characters/characterMock.json";
import MatchesMock from "@/api/modules/characters/matchesMock.json";
import MockAdapter from "axios-mock-adapter";

import ROUTES from "@/api/modules/characters/routes";
import { CharacterSearch, MatchVotePayload } from "@/types";

if (Config.mocks) {
  const mock = new MockAdapter(axios);
  mock.onGet(ROUTES.GET_CHARACTERS).reply(200, CharacterMock.list);
  mock.onGet(ROUTES.GET_MATCHES).reply(200, MatchesMock.list);
  mock.onGet(`${ROUTES.GET_CHARACTER}`).reply(200, CharacterMock.list[0]);
  mock.onGet(`${ROUTES.GET_MATCH}`).reply(200, MatchesMock.list[0]);
  mock.onPost(`${ROUTES.POST_VOTE}`).reply(200, MatchesMock.list[0]);
}

export default {
  getCharacters(name?: string) {
    let params: CharacterSearch = {};
    if (name) {
      params.name = name;
    }
    return axios.get<CharacterSearch>(ROUTES.GET_CHARACTERS, params);
  },
  getCharacter(id: number) {
    return axios.get(`${ROUTES.GET_CHARACTER}`);
  },
  getMatches() {
    return axios.get(`${ROUTES.GET_MATCHES}`);
  },
  getMatch(first: number, second: number) {
    return axios.get(`${ROUTES.GET_MATCH}`);
  },
  postVote(payload: MatchVotePayload) {
    return axios.post(ROUTES.POST_VOTE, payload);
  }
};
