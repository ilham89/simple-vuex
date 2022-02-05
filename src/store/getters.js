//getters bisa berisi data data murni / data data yang sudah diolah
export default {
  members: (state) => {
    return state.members.sort(() => {
      return -1;
    });
  },
  countries: (state) => {
    return state.countries;
  },
  countryLoading: (state) => {
    return state.countryLoading;
  },
};
