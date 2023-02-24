const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const countiesContainer = document.getElementById('all-counties');
    // console.log(countries);
// for(const country of countries){
//     console.log(country)
// }

// using forEach
countries.forEach(country => {
    // console.log(country.cca2)
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country')
    countryDiv.innerHTML = `
    
    <h3>Name: ${country.name.common} </h3>
    <p>capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
    <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
    
    
    `;

    countiesContainer.appendChild(countryDiv);
    
});
}


const loadCountryDetails= code =>{
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]))
}
const showCountryDetails = country =>{
    const detailContainer = document.getElementById('country-detail')
    detailContainer.innerHTML = `
    <h2>country Details</h2>
       <h3>Name: ${country.name.common} </h3>
       <p>Capital: ${country.capital}</p>
       <img src="${country.flags.png}"> 
    
    
    
    `
}
loadCountries()