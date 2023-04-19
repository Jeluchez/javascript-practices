const price = document.querySelector('#price');
price.value =200;
document.querySelector('#tax').addEventListener('change', (e) => {
    const tax = Number(e.target.value);
    const numwithTax = tax * Number(unFormatter(price.value));
    price.value = formatter(numwithTax);
})

function formatter(num) {
    let coin = new Intl.NumberFormat('in-US').format(num);
    return coin;
}
function unFormatter(num){
   return num.replace(/[,.]/g, m => (m === ',' ? '.' : ''));
}
// const multi = 4 * num;
// console.log(multi);

