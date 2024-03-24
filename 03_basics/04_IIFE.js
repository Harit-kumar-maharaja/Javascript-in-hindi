// IMMEDIATELY INVOKED FUNCTIOMN EXPRESSION

(function chai() {
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`DB Connected to ${name}`);
})("Harit")