import { Character, CharactersState, Match } from "@/types/index.d.ts";

export default {
  updateCharacterList(state: CharactersState, list: Character[]) {
    state.list = list;
  },
  updateCharacter(state: CharactersState, character: Character) {
    state.character = character;
  },
  updateMatch(state: CharactersState, match: Match) {
    state.match = match;
  },
  updateMatches(state: CharactersState, matches: Match[]) {
    state.matches = matches;
  }
};
