const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");
const autoclicker = document.getElementById("autoclicker");

let numberOfCookies = 0;
let numberOfCookiesOnClick = 1;
let upgradePrice = 50;
let autoclickerPrice = 1000;
let numberOfAutoClickerCookies = 0;

cookie.onclick = () => {
  numberOfCookies += numberOfCookiesOnClick;
  counter.innerHTML = `🍪: ${numberOfCookies}`;
};

upgrade.onclick = () => {
  if (numberOfCookies >= 50) {
    numberOfCookies -= 50; // numberOfCookies += 1; upgrade nuberOfCookies += 2...
    counter.innerHTML = `🍪: ${numberOfCookies}`;
    numberOfCookiesOnClick++;
  }
};

upgrade1.onclick = () => {
  if (numberOfCookies >= 500) {
    numberOfCookies -= 500; // numberOfCookies += 1; upgrade nuberOfCookies += 2...
    counter.innerHTML = `🍪: ${numberOfCookies}`;
    numberOfCookiesOnClick += 20;
  }
};

autoclicker.onclick = () => {
  if (numberOfCookies >= autoclickerPrice) {
    numberOfCookies -= autoclickerPrice;
    counter.innerHTML = `🍪: ${numberOfCookies}`;
    if (numberOfAutoClickerCookies == 0) {
      setInterval(() => {
        numberOfCookies += numberOfAutoClickerCookies;
        counter.innerHTML = `🍪: ${numberOfCookies}`;
      }, 1000);
    }
    numberOfAutoClickerCookies = 50;
    autoclickerPrice *= 2;
    autoclickerPrice.innerHTML = `Kup autokliker: ${autoclickerPrice}`;
  }
};
