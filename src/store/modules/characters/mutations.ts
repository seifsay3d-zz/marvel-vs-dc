export default {
  updateCharacterList(state: any, list: any) {
    state.list = list;
  },
  updateCharacter(state: any, character: any) {
    state.character = character;
  },
  updateMatch(state: any, characters: any) {
    state.match = characters;
  }
};
