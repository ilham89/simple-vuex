export default {
  fetchAllCountries(context) {
    return fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => context.commit("setCountries", data))
      .catch((err) => console.log(err))
      .finally(() => context.commit("setCountryLoading", false));
  },
};
