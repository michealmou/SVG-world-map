// DOM Elements
const map = document.querySelector("svg");
const countries = document.querySelectorAll("path");
const sidepanel = document.querySelector(".side-panel");
const container = document.querySelector(".side-panel .container");
const closeBtn = document.querySelector(".close-btn");
const zoomin = document.querySelector(".zoom-in");
const zoomout = document.querySelector(".zoom-out");
const countryname = document.querySelector('.country');
const flag = document.querySelector('.flag');
const area = document.querySelector('.area');
const capital = document.querySelector('.capital');
const loading = document.querySelector(".loading");

// Custom country data (will be populated from API)
let customCountryData = {};

// Fetch all countries from REST Countries API
async function loadCountriesData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) throw new Error('Failed to fetch countries');
        
        const countries = await response.json();
        countries.forEach(country => {
            customCountryData[country.cca2] = {
                name: country.name.common,
                flag: country.flags.png,
                area: country.area ? (country.area.toLocaleString() + " km²") : "N/A",
                capital: country.capital ? country.capital[0] : "N/A",
                region: country.region,
                population: country.population ? country.population.toLocaleString() : "N/A",
                description: `${country.name.common} is located in ${country.region}.`
            };
        });
        console.log("Countries data loaded successfully");
    } catch (error) {
        console.error("Error loading countries data:", error);
    }
}

// Load countries data on page load
document.addEventListener('DOMContentLoaded', loadCountriesData);

// Hover Effects
countries.forEach(country => {
    country.addEventListener("mouseenter", function () {
        this.style.fill = "#c99aff";
    });

    country.addEventListener("mouseout", function () {
        this.style.fill = "#ececec";
    });

    // Click event
    country.addEventListener("click", function (e) {
        const countryName = this.getAttribute("name");
        
        // Show loading state
        if (loading) loading.innerText = "Loading...";
        if (container) container.classList.add("hide");
        if (loading) loading.classList.remove("hide");
        if (sidepanel) sidepanel.classList.add("active");

        // Get custom data
        const countryData = customCountryData[countryName];

        // Fetch from REST Countries API
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
            .then(response => {
                if (!response.ok) return null;
                return response.json();
            })
            .then(data => {
                setTimeout(() => {
                    const apiData = data ? data[0] : null;

                    if (countryname) countryname.innerText = countryData ? countryData.name : (apiData ? apiData.name.common : countryName);
                    if (area) area.innerText = `Area: ${countryData ? countryData.area : (apiData ? apiData.area + " km²" : "N/A")}`;
                    if (capital) capital.innerText = `Capital: ${countryData ? countryData.capital : (apiData && apiData.capital ? apiData.capital[0] : "N/A")}`;
                    
                    if (flag) {
                        const flagUrl = (countryData && countryData.flag) ? countryData.flag : (apiData ? apiData.flags.png : "");
                        if (flagUrl) {
                            flag.src = flagUrl;
                            flag.style.display = "block";
                        }
                    }

                    // Hide loading and show content
                    if (loading) loading.classList.add("hide");
                    if (container) container.classList.remove("hide");
                }, 400);
            })
            .catch(error => {
                console.error("Fetch Error:", error);
                if (loading) loading.innerText = "Failed to load country details.";
            });
    });
});

// Close side panel
if (closeBtn) {
    closeBtn.addEventListener("click", function () {
        sidepanel.classList.remove("active");
    });
}

// Close panel when clicking on map background
if (map) {
    map.addEventListener("click", function (event) {
        if (event.target === map) {
            sidepanel.classList.remove("active");
        }
    });
}

// Zoom controls
if (zoomin) {
    // a button that zooms in the map when clicked
    zoomin.addEventListener("click", function () {
        console.log("Zoom in");
        var zoom = 1.2; // Zoom factor
        var zoomstep = 0.2; // Zoom step
        document.getElementById(zoomin).addEventListener("click", function () {
            zoom += zoomstep;
            map.style.transform = "scale(" + zoom + ")";
        });
})};

if (zoomout) {
    zoomout.addEventListener("click", function () {
        console.log("Zoom out");
        var zoom = 1.2; // Zoom factor
        var zoomstep = 0.2; // Zoom step
        document.getElementById(zoomout).addEventListener("click", function () {
            zoom -= zoomstep;
            if (zoom < 0.5) zoom = 0.5; // Minimum zoom level
            map.style.transform = "scale(" + zoom + ")";
        });
    });
}

zoomout.addEventListener("click", function () {
    console.log("Zoom out");
});

