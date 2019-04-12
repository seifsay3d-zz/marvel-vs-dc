import { Character, CharactersState } from "@/types/index.d.ts";

export default {
  updateCharacterList(state: CharactersState, list: Character[]) {
    state.list = list;
  },
  updateCharacter(state: CharactersState, character: Character) {
    state.character = character;
  },
  updateMatch(state: CharactersState, characters: Character[]) {
    state.match = characters;
  }
};
