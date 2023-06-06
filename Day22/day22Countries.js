import countriesData from '../Day9/countries_data.js';

document.body.style.display = 'flex';
document.body.style.flexWrap = 'wrap';

const sortedArr = [...countriesData];

sortedArr.sort((a, b) => {
  const countryNameA = a.name;
  const countryNameB = b.name;
  if (countryNameA < countryNameB) {
    return -1;
  }
  if (countryNameA > countryNameB) {
    return 1;
  }
  return 0;
});

for (let i = 0; i < sortedArr.length; i++) {
  const country = document.createElement('h1');

  country.textContent = sortedArr[i].name;
  country.style.fontSize = '12px';
  country.style.display = 'flex';
  country.style.justifyContent = 'center';
  country.style.alignItems = 'center';
  country.style.width = '100px';
  country.style.height = '100px';
  country.style.margin = '1px';
  country.style.border = '1px solid gray';
  document.body.appendChild(country);
}
