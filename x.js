function xxx() {
    if (document.querySelectorAll('[data-testid="widget-balance_card-balance-0"]')[0].innerText == "2000 USD") {
        clearInterval(x);

    } else {

        document.querySelectorAll('[data-testid="widget-balance_card-balance-0"]')[0].innerText = "2000 USD";
    }
}
var x = setInterval(xxx, 1000);