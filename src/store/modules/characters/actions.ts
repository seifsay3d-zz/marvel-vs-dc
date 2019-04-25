import { CharacterMatch } from "@/types";
import CharactersAPI from "@/api/modules/characters";

export default {
  getCharacters(context: any) {
    CharactersAPI.getCharacters()
      .then((res: any) => context.commit("updateCharacterList", res.data))
      .catch((err: any) => console.error(err));
  },
  getCharactersByName(context: any, name: string) {
    CharactersAPI.getCharacters(name)
      .then((res: any) => context.commit("updateCharacterList", res.data))
      .catch((err: any) => console.error(err));
  },
  getCharacter(context: any, id: number) {
    CharactersAPI.getCharacter(id)
      .then((res: any) => context.commit("updateCharacter", res.data))
      .catch((err: any) => console.error(err));
  },
  getMatches(context: any) {
    CharactersAPI.getMatches()
      .then((res: any) => context.commit("updateMatches", res.data))
      .catch((err: any) => console.error(err));
  },
  getMatch(context: any, match: CharacterMatch) {
    CharactersAPI.getMatch(match.first, match.second)
      .then((res: any) => context.commit("updateMatch", res.data))
      .catch((err: any) => console.error(err));
  }
};
