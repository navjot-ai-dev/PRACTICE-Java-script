
const from = document.getElementById("from");
const to = document.getElementById("to");
const result = document.getElementById("result");
const amount = document.getElementById("amount");


const currencies = [
"USD","EUR","GBP","INR","JPY","AUD","CAD",
"CHF","CNY","SGD","NZD","AED","PKR","BDT"
];

currencies.forEach(currency => {
    from.innerHTML += `<option value="${currency}">${currency}</option>`;
    to.innerHTML += `<option value="${currency}">${currency}</option>`;
});

from.value = "USD";
to.value = "INR";

async function convertCurrency(){
    let amt = amount.value;

    const url =
`https://open.er-api.com/v6/latest/${from.value}`;

    try{
        const res = await fetch(url);
        const data = await res.json();

        const rate = data.rates[to.value];
        const converted = (amt * rate).toFixed(2);

        result.innerHTML =
        `${amt} ${from.value} = ${converted} ${to.value}`;
    }
    catch(error){
        result.innerHTML = "Error fetching exchange rate";
    }
}

document.querySelector(".convert")
.addEventListener("click", convertCurrency);

document.getElementById("swap")
.addEventListener("click", () => {
    let temp = from.value;
    from.value = to.value;
    to.value = temp;
    convertCurrency();
});

convertCurrency();