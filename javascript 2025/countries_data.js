// ===== Top 10 Populations & Languages Section =====
const sectionTitle = document.createElement('h1');
sectionTitle.innerHTML = '<span style="font-size: 28px;">🌍</span> World Countries List';
sectionTitle.style.textAlign = 'center';
sectionTitle.style.marginTop = '50px';
boxesContainer.appendChild(sectionTitle);

const btnWrapper = document.createElement('div');
btnWrapper.style.display = 'flex';
btnWrapper.style.justifyContent = 'center';
btnWrapper.style.gap = '20px';
btnWrapper.style.marginBottom = '30px';

const populationBtn = document.createElement('button');
populationBtn.textContent = 'Top 10 Populations';
populationBtn.style.padding = '10px 20px';
populationBtn.style.backgroundColor = '#ff6464';
populationBtn.style.color = '#fff';
populationBtn.style.border = 'none';
populationBtn.style.borderRadius = '6px';
populationBtn.style.cursor = 'pointer';

const languageBtn = document.createElement('button');
languageBtn.textContent = 'Top 10 Languages';
languageBtn.style.padding = '10px 20px';
languageBtn.style.backgroundColor = '#ff6464';
languageBtn.style.color = '#fff';
languageBtn.style.border = 'none';
languageBtn.style.borderRadius = '6px';
languageBtn.style.cursor = 'pointer';

btnWrapper.appendChild(populationBtn);
btnWrapper.appendChild(languageBtn);
boxesContainer.appendChild(btnWrapper);

const chartContainer = document.createElement('div');
chartContainer.id = 'chartContainer';
chartContainer.style.maxWidth = '700px';
chartContainer.style.margin = '0 auto 50px';
boxesContainer.appendChild(chartContainer);

const top10Populations = [
  { name: 'China', population: 1440000000 },
  { name: 'India', population: 1400000000 },
  { name: 'USA', population: 331000000 },
  { name: 'Indonesia', population: 273000000 },
  { name: 'Pakistan', population: 226000000 },
  { name: 'Brazil', population: 213000000 },
  { name: 'Nigeria', population: 208000000 },
  { name: 'Bangladesh', population: 168000000 },
  { name: 'Russia', population: 148000000 },
  { name: 'Mexico', population: 128000000 }
];

const top10Languages = [
  { language: 'English', speakers: 1500000000 },
  { language: 'Mandarin Chinese', speakers: 1120000000 },
  { language: 'Hindi', speakers: 602000000 },
  { language: 'Spanish', speakers: 559000000 },
  { language: 'French', speakers: 274000000 },
  { language: 'Standard Arabic', speakers: 274000000 },
  { language: 'Bengali', speakers: 273000000 },
  { language: 'Russian', speakers: 258000000 },
  { language: 'Portuguese', speakers: 258000000 },
  { language: 'Urdu', speakers: 231000000 }
];

function createBarChart(data, labelKey, valueKey, color = 'orange') {
  chartContainer.innerHTML = '';

  data.forEach(item => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.margin = '10px 0';

    const label = document.createElement('div');
    label.textContent = item[labelKey];
    label.style.width = '120px';

    const bar = document.createElement('div');
    bar.style.height = '25px';
    bar.style.background = color;
    bar.style.width = (item[valueKey] / data[0][valueKey]) * 100 + '%';
    bar.style.margin = '0 10px';
    bar.style.borderRadius = '5px';

    const value = document.createElement('div');
    value.textContent = item[valueKey].toLocaleString();

    row.appendChild(label);
    row.appendChild(bar);
    row.appendChild(value);
    chartContainer.appendChild(row);
  });
}

populationBtn.addEventListener('click', () => {
  createBarChart(top10Populations, 'name', 'population', 'orange');
});

languageBtn.addEventListener('click', () => {
  createBarChart(top10Languages, 'language', 'speakers', 'green');
});

// Default Chart
createBarChart(top10Populations, 'name', 'population', 'orange');

// ===== World Countries Grid with Flags =====
const countriesGridTitle = document.createElement('h1');
countriesGridTitle.innerHTML = '🌍 World Countries List';
countriesGridTitle.style.textAlign = 'center';
boxesContainer.appendChild(countriesGridTitle);

// Country Search Controls
const totalCountries = document.createElement('p');
totalCountries.id = 'totalCountries';
totalCountries.style.textAlign = 'center';
totalCountries.style.margin = '10px 0';
boxesContainer.appendChild(totalCountries);

const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.gap = '20px';
buttonContainer.style.marginBottom = '20px';

const startsWithBtn = document.createElement('button');
startsWithBtn.textContent = 'STARTING WORD';
startsWithBtn.style.padding = '10px 20px';
startsWithBtn.style.cursor = 'pointer';

const anyWordBtn = document.createElement('button');
anyWordBtn.textContent = 'SEARCH WITH ANY WORD';
anyWordBtn.style.padding = '10px 20px';
anyWordBtn.style.cursor = 'pointer';

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search Country...';
searchInput.style.padding = '10px';
searchInput.style.width = '200px';
searchInput.style.borderRadius = '6px';
searchInput.style.border = '1px solid #ccc';

buttonContainer.appendChild(startsWithBtn);
buttonContainer.appendChild(anyWordBtn);
buttonContainer.appendChild(searchInput);
boxesContainer.appendChild(buttonContainer);

// Countries container
const countryGrid = document.createElement('div');
countryGrid.id = 'countryGrid';
countryGrid.style.display = 'grid';
countryGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
countryGrid.style.gap = '20px';
countryGrid.style.justifyItems = 'center';
countryGrid.style.margin = '20px';
boxesContainer.appendChild(countryGrid);

// Fetch countries data
async function fetchCountries() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const countries = await res.json();
  return countries;
}

let countriesCache = [];

function renderCountries(countries) {
  countryGrid.innerHTML = '';
  totalCountries.textContent = `Total Countries: ${countries.length}`;
  countries.forEach(country => {
    const card = document.createElement('div');
    card.style.backgroundColor = '#e6f0ff';
    card.style.padding = '15px';
    card.style.borderRadius = '10px';
    card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    card.style.textAlign = 'center';
    card.style.width = '120px';

    const img = document.createElement('img');
    img.src = country.flags.svg;
    img.alt = country.name.common;
    img.style.width = '60px';
    img.style.height = '40px';
    img.style.objectFit = 'cover';
    img.style.marginBottom = '10px';

    const name = document.createElement('p');
    name.textContent = country.name.common.toUpperCase();
    name.style.fontWeight = 'bold';
    name.style.fontSize = '14px';

    card.appendChild(img);
    card.appendChild(name);
    countryGrid.appendChild(card);
  });
}

function filterCountriesByStartingWord(word) {
  const filtered = countriesCache.filter(c =>
    c.name.common.toLowerCase().startsWith(word.toLowerCase())
  );
  renderCountries(filtered);
}

function filterCountriesByAnyWord(word) {
  const filtered = countriesCache.filter(c =>
    c.name.common.toLowerCase().includes(word.toLowerCase())
  );
  renderCountries(filtered);
}

// Search events
startsWithBtn.addEventListener('click', () => {
  filterCountriesByStartingWord(searchInput.value.trim());
});

anyWordBtn.addEventListener('click', () => {
  filterCountriesByAnyWord(searchInput.value.trim());
});

searchInput.addEventListener('input', () => {
  filterCountriesByAnyWord(searchInput.value.trim());
});

// Initial fetch & render
fetchCountries().then(data => {
  countriesCache = data;
  renderCountries(data);
});
 
// ===== World Countries Data List (add more if you want) =====
const countriesData = [
  { name: 'Afghanistan'},
  { name: 'Albania' },
  { name: 'Algeria' },
  { name: 'Andorra' },
  { name: 'Angola' },
  { name: 'Argentina' },
  { name: 'Armenia' },
  { name: 'Australia' },
  { name: 'Austria' },
  { name: 'Azerbaijan' },
  { name: 'Bahamas' },
  { name: 'Bahrain' },
  { name: 'Bangladesh' },
  { name: 'Barbados' },
  { name: 'Belarus' },
  { name: 'Belgium' },
  { name: 'Belize' },
  { name: 'Benin' },
  { name: 'Bhutan' },
  { name: 'Bolivia' },
  { name: 'Bosnia and Herzegovina' },
  { name: 'Botswana' },
  { name: 'Brazil' },
  { name: 'Brunei' },
  { name: 'Bulgaria' },
  { name: 'Burkina Faso' },
  { name: 'Burundi' },
  { name: 'Cambodia' },
  { name: 'Cameroon' },
  { name: 'Canada' },
  { name: 'Cape Verde' },
  { name: 'Central African Republic' },
  { name: 'Chad' },
];

// ====== Create Countries Container ======
const countriesWrapper = document.createElement('div');
countriesWrapper.id = 'countriesWrapper';
boxesContainer.appendChild(countriesWrapper);

// ====== Generate Country Cards ======
countriesData.forEach(country => {
  const countryCard = document.createElement('div');
  countryCard.className = 'country-card';

  const flag = document.createElement('img');
  flag.src = `https://flagsapi.com/${country.name.toUpperCase()}/flat/64.png`;
  flag.alt = `${country.name} Flag`;
  flag.className = 'flag-img';

  const name = document.createElement('p');
  name.className = 'country-name';
  name.textContent = country.name.toUpperCase();

  countryCard.appendChild(flag);
  countryCard.appendChild(name);
  countriesWrapper.appendChild(countryCard);
});

// ====== Styling via JS ======
const style = document.createElement('style');
style.textContent = `
  #countriesWrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
    margin-top: 40px;
    padding: 20px;
  }

  .country-card {
   background-color: #ff8888;
    border-radius: 12px;
    padding: 15px 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .country-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  }

  .flag-img {
    width: 64px;
    height: 42px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .country-name {
    font-size: 14px;
    font-weight: bold;
    color: #222;
    margin: 0;
  }
`;
document.head.appendChild(style);

document.head.appendChild(countryStyle);