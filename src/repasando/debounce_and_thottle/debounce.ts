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

function debounce<T>(
  func: (this: T, value: KeyboardEvent) => void,
  delayTime: number
) {
  console.log("message");
  let timeout;
  return function (this: T, value: KeyboardEvent) {
    const context = this; //get the context when the func is invoked
    clearTimeout(timeout); //cleared everytime user types in
    timeout = setTimeout(() => {
      func.call(context, value);
    }, delayTime); //execute the function
  };
}

const handleDebounce = debounce(search, 400);

const input = document.createElement("input");
const div = document.createElement("div");
input.addEventListener("keyup", handleDebounce);
// input.addEventListener('keyup', (e) => console.log(e));
const body = document.body;

body.append(input);
body.append(div);
