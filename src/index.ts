import axios from "axios";

const search = async (e) => {
  const name = e.target.value;
  const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  const countries = res.data;
  div.innerHTML = "";
  countries.forEach((country) => {
    const p = document.createElement("p");
    p.innerText = country.name.common;
    div.append(p);
  });
  // res.data.forEach((country) => {})
};
const throttle = <T>(
  func: (this: T, value: KeyboardEvent) => void,
  delay: number
) => {
  let inThrottle;
  return function (this: T, value: KeyboardEvent) {
    const context = this;
    if (!inThrottle) {
      func.call(context, value);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), delay);
    }
  };
};

const handleThrottle = throttle(search, 500);

const input = document.createElement("input");
const div = document.createElement("div");
input.addEventListener("keyup", handleThrottle);
// input.addEventListener('keyup', (e) => console.log(e));
const body = document.body;

body.append(input);
body.append(div);
