import { CharacterMatch } from "@/types";
import CharactersAPI from "@/api/modules/characters";

export default {
  getCharacters(context: any) {
    CharactersAPI.getCharacters()
      .then((res: any) => context.commit("updateCharacterList", res.data))
      .catch((err: any) => context.commit("updateCharacterList", err));
  },
  getCharacter(context: any, id: number) {
    CharactersAPI.getCharacter(id)
      .then((res: any) => context.commit("updateCharacter", res.data))
      .catch((err: any) => context.commit("updateCharacter", err));
  },
  getMatches(context: any) {
    CharactersAPI.getMatches()
      .then((res: any) => context.commit("updateMatches", res.data))
      .catch((err: any) => context.commit("updateMatches", err));
  },
  getMatch(context: any, match: CharacterMatch) {
    CharactersAPI.getMatch(match.first, match.second)
      .then((res: any) => context.commit("updateMatch", res.data))
      .catch((err: any) => context.commit("updateMatch", err));
  }
};
