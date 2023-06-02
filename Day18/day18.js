const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const fetchCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    console.log(countries);

    // for (let countrie of countries) {
    //   let countrieLanguage = '';
    //   for (let language of countrie.languages) {
    //     countrieLanguage = language.name;
    //   }

    //   console.log(
    //     `Countrie: ${countrie.name}\n Capital: ${countrie.capital}\n Language: ${countrieLanguage}\n Populationa: ${countrie.population} million people`
    //   );
    // }

    // let newArr = [];
    // for (let countrie of countries) {
    //   newArr.push({ countrie: countrie.name, population: countrie.population });
    // }

    // console.log(
    //   newArr.sort((a, b) => b.population - a.population).splice(0, 10)
    // );

    let languages = new Set();
    countries.forEach(country => {
      const countryLanguage = country.languages;
      countryLanguage.forEach(language => {
        languages.add(language.name);
      });
    });
    console.log(languages);
  } catch (err) {
    console.log(err);
  }
};

fetchCountries();

const fetchCats = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();

    for (let cat of cats) {
      const catName = cat.name;
      const catWeight = cat.weight.metric
        .split(' - ')
        .map(str => parseInt(str))
        .reduce((a, b) => a + b, 0);

      const catAverage = catWeight / cat.weight.metric.length;

      console.log(`Cat name:${catName}\n Average weigth: ${catAverage} kg`);
    }
  } catch (err) {
    console.error(err);
  }
};

// const catNames = fetchCats();
// console.log(catNames);
