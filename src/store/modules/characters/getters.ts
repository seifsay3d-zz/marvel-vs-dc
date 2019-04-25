export default {
  getStrongestCharacters(state) {
    return state.list
      .sort((a, b) => {
        if (a.power > b.power) {
          return -1;
        }
        return 1;
      })
      .slice(0, 4);
  }
};
