
const API_KEY = '9bb0a30799522b8f5cf9c9dc';

// DOM elements
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convert');
const resultDiv = document.getElementById('result');
const switchBtn = document.getElementById('switch');

// Function to fetch all supported currency codes and populate select menus
async function loadCurrencies() {
  // Supported codes endpoint: https://www.exchangerate-api.com/docs/supported-codes-endpoint
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;
  try {
    // Fetch supported codes
    const res = await fetch(url);
    if (!res.ok) throw new Error("Could not fetch supported codes");
    const data = await res.json();
    const codes = data.supported_codes; // Array of [code, name]
    // Clear old options
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';
    // Populate select menus
    codes.forEach(([code, name]) => {
      const optionFrom = document.createElement('option');
      optionFrom.value = code;
      optionFrom.textContent = `${code} - ${name}`;
      fromSelect.appendChild(optionFrom);

      const optionTo = document.createElement('option');
      optionTo.value = code;
      optionTo.textContent = `${code} - ${name}`;
      toSelect.appendChild(optionTo);
    });
    // Default selections for ease of use
    fromSelect.value = 'USD';
    toSelect.value = 'EUR';
  } catch (error) {
    resultDiv.textContent = error.message;
  }
}

// Function to fetch conversion rate and show result
async function convertCurrency() {
  // Get user inputs
  const from = fromSelect.value;
  const to = toSelect.value;
  const amount = parseFloat(amountInput.value) || 0;

  // Pair Conversion API endpoint: https://www.exchangerate-api.com/docs/pair-conversion-requests
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`;

  resultDiv.textContent = "Loading...";
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Could not fetch conversion rate.");
    const data = await res.json();
    if (!data.conversion_result) throw new Error("Invalid conversion response.");
    // Show result
    resultDiv.textContent = `${amount} ${from} = ${data.conversion_result} ${to}\nExchange Rate: ${data.conversion_rate}`;
  } catch (error) {
    resultDiv.textContent = error.message;
  }
}

// Switch button swaps the currencies and recalculates
switchBtn.addEventListener('click', () => {
  // Swap selected currencies
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  // Re-compute conversion
  convertCurrency();
});

// Convert button event
convertBtn.addEventListener('click', convertCurrency);

// Load the currencies on page load
loadCurrencies();
