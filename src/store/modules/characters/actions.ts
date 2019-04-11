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
  }
};
