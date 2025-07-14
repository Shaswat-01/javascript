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
  { name: 'Afghanistan', flag: 'https://flagcdn.com/af.svg' },
  { name: 'Albania', flag: 'https://flagcdn.com/al.svg' },
  { name: 'Algeria', flag: 'https://flagcdn.com/dz.svg' },
  { name: 'Andorra', flag: 'https://flagcdn.com/ad.svg' },
  { name: 'Angola', flag: 'https://flagcdn.com/ao.svg' },
  { name: 'Argentina', flag: 'https://flagcdn.com/ar.svg' },
  { name: 'Armenia', flag: 'https://flagcdn.com/am.svg' },
  { name: 'Australia', flag: 'https://flagcdn.com/au.svg' },
  { name: 'Austria', flag: 'https://flagcdn.com/at.svg' },
  { name: 'Azerbaijan', flag: 'https://flagcdn.com/az.svg' },
  { name: 'Bahamas', flag: 'https://flagcdn.com/bs.svg' },
  { name: 'Bahrain', flag: 'https://flagcdn.com/bh.svg' },
  { name: 'Bangladesh', flag: 'https://flagcdn.com/bd.svg' },
  { name: 'Barbados', flag: 'https://flagcdn.com/bb.svg' },
  { name: 'Belarus', flag: 'https://flagcdn.com/by.svg' },
  { name: 'Belgium', flag: 'https://flagcdn.com/be.svg' },
  { name: 'Belize', flag: 'https://flagcdn.com/bz.svg' },
  { name: 'Benin', flag: 'https://flagcdn.com/bj.svg' },
  { name: 'Bhutan', flag: 'https://flagcdn.com/bt.svg' },
  { name: 'Bolivia', flag: 'https://flagcdn.com/bo.svg' },
  { name: 'Bosnia and Herzegovina', flag: 'https://flagcdn.com/ba.svg' },
  { name: 'Botswana', flag: 'https://flagcdn.com/bw.svg' },
  { name: 'Brazil', flag: 'https://flagcdn.com/br.svg' },
  { name: 'Brunei', flag: 'https://flagcdn.com/bn.svg' },
  { name: 'Bulgaria', flag: 'https://flagcdn.com/bg.svg' },
  { name: 'Burkina Faso', flag: 'https://flagcdn.com/bf.svg' },
  { name: 'Burundi', flag: 'https://flagcdn.com/bi.svg' },
  { name: 'Cambodia', flag: 'https://flagcdn.com/kh.svg' },
  { name: 'Cameroon', flag: 'https://flagcdn.com/cm.svg' },
  { name: 'Canada', flag: 'https://flagcdn.com/ca.svg' },
  { name: 'Cape Verde', flag: 'https://flagcdn.com/cv.svg' },
  { name: 'Central African Republic', flag: 'https://flagcdn.com/cf.svg' },
  { name: 'Chad', flag: 'https://flagcdn.com/td.svg' }
];

countriesData.forEach(country => {
  const card = document.createElement('div');
  card.style.display = 'inline-block';
  card.style.margin = '10px';
  card.style.padding = '20px';
  card.style.textAlign = 'center';
  card.style.background = '#ff8888';
  card.style.borderRadius = '12px';
  card.style.backdropFilter = 'blur(4px)';
  card.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
  card.style.color = 'white';
  card.style.width = '140px';

  const img = document.createElement('img');
  img.src = country.flag;
  img.alt = country.name;
  img.style.width = '80px';
  img.style.height = 'auto';
  img.style.borderRadius = '8px';
  img.style.marginBottom = '0px';
  img.style.boxShadow = '0 0 10px rgba(255,255,255,0.2)';

  const name = document.createElement('p');
  name.textContent = country.name;
  name.style.margin = '0';
  name.style.fontWeight = 'bold';
  name.style.fontSize = '12px';

  card.appendChild(img);
  card.appendChild(name);
  boxesContainer.appendChild(card);
});
document.head.appendChild(style);

document.head.appendChild(countryStyle);