function a(cb) {
    setTimeout(() => {
        console.log('result of a');
        cb();
    }, 500);
}
function b(cb) {
    setTimeout(() => {
        console.log('result of b');
        cb();
    }, 500);
}
function c(cb) {
    setTimeout(() => {
        console.log('result of c');
        cb();
    }, 500);
}
a(()=>{
    console.log('a() is done');
    b(()=>{
        console.log('b() is done');
        c(()=>{
            console.log('c() is done');
        });
    });
});