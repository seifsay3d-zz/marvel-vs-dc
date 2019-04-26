import { CharactersState } from "@/types";

export default {
  getCharactersByPower: (state: CharactersState) => (isAscending: boolean) => {
    return [...state.list]
      .sort((a, b) => {
        if (a.power > b.power) {
          return isAscending ? 1 : -1;
        }
        return isAscending ? -1 : 1;
      })
      .slice(0, 4);
  }
};
