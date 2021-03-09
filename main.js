console.log("script loadings getting BTC price");
let currencies = ["usd", "jpy", "vnd"];
currencies.forEach((item) => {
  getBTCVal(item);
});


function getBTCVal(currency) {
  let url = `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function() {
      let results = JSON.parse(this.responseText);
      console.log(currency.toUpperCase());
      let theval = results.bpi[currency.toUpperCase()].rate_float;
      console.log(theval);
      outputPrice(currency, theval);
  }
  xhr.send();
}

function outputPrice(currency, theval) {
  let theclass = "." + currency;
  let thetarg = document.querySelector(theclass);
  console.log(thetarg);

  thetarg.innerText = theval;
}
