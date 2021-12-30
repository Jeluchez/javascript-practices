function get(url) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            if (req.status == 200) {
                resolve(req.response);
            }
            else {
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };
        // Make the request
        req.send();
    });
}
// use promise
get('names.json').then((data) => {
    const names = JSON.parse(data);
    let template = '<ul>';
    names.forEach(name => {
        template += `<li>${name.nombre} y trabajo en ${name.job}</li>`
    });
    template += '</ul>';
    document.body.innerHTML = template;
})