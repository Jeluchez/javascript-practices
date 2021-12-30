const a = () => new Promise(resolve => {
    setTimeout(() => resolve('result  of a()'), 1000);
});
const b = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('result  of b()'), 500);
});
const c = () => new Promise(resolve => {
    setTimeout(() => resolve('result  of c()'), 1100);
});

const doJobs = async () => {
    try {
        const resultA = await a();
        const resultB = await b();
        const resultC = await c();
        return new Promise(resolve => {
            setTimeout(() => resolve({
                values: [resultA, resultB, resultC]
            }), 3000);
        });
    } catch (error) {
        return [null,null,null];
    }

}
// Job return a promise
doJobs().then((allResult) => {
    console.log('succes:', allResult.values);
})
    .catch((error) => {
        console.log('error:', error);
    })
//normal flow
console.log("I'am a sync operation");