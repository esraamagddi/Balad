
  // Function to fetch country data from the API
  async function fetchCountryData() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  }

  // Function to dynamically populate the country select dropdown
  function populateCountrySelect(data) {
    const selectElement = document.getElementById('countrySelect');

    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = 'Select a country';
    selectElement.appendChild(defaultOption);

    // Populate the select dropdown with country options
    data.forEach(country => {
      const option = document.createElement('option');
      option.textContent = country.name.common;
      selectElement.appendChild(option);
    });
  }

  // Function to handle changes in the selected country
  function handleCountrySelectChange() {
    const selectedCountry = document.getElementById('countrySelect').value;
    // Add your logic here to update the page based on the selected country
    console.log('Selected Country:', selectedCountry);
  }

  // Wait for the DOM to be ready
  document.addEventListener('DOMContentLoaded', async () => {
    // Fetch country data
    const countryData = await fetchCountryData();

    // Populate the country select dropdown
    populateCountrySelect(countryData);

    // Add event listener for changes in the selected country
    document.getElementById('countrySelect').addEventListener('change', handleCountrySelectChange);
  });
