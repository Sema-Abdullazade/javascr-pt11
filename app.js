let currencies = ['USD', 'EUR', 'AZN' ,'TRY'];


function populateCurrencyOptions() {
    let fromSelect = document.getElementById('from');
    let toSelect = document.getElementById('to');

    currencies.forEach(currency => {
        let option = document.createElement('option');
        option.text = currency;
        option.value = currency;
        fromSelect.add(option.cloneNode(true));
        toSelect.add(option);
    });
}

window.onload = populateCurrencyOptions;

function convert() {
    let amount = document.getElementById('amount').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        .then(response => response.json())
        .then(data => {
            let rate = data.rates[to];
            let result = amount * rate;
            document.getElementById('result').innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
        })
        .catch(error => console.log('Xəta baş verdi:', error));
}