const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector("#to-coin")

function convertValues() {

    const inputCurrencyValue = document.querySelector("#result").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueConverted = document.querySelector(".currency-value") //valor convertido


    const dolarToday = 5.2
    const euroToday = 6.2
    const bitcoinToday = 126.843
    const libraToday = 6.13


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"

        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "XBT"

        }).format(inputCurrencyValue / bitcoinToday)
    }
    else if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"

        }).format(inputCurrencyValue / libraToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector("#currency-img")

    if (currencySelect.value == "dolar" ) {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/img/Dólar.svg"
    }
    if (currencySelect.value == "euro" ) {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/img/Euro.svg"
    }
    if (currencySelect.value == "bitcoin" ) {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/img/bitcoin.svg"
    }
    else if(currencySelect.value == "libra" ) {
        currencyName.innerHTML = "Libra esterlina"
        currencyImage.src = "./assets/img/libra.png"
    }
    
    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
