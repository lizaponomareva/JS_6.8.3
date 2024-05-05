function sum(a) {
    return function innerSum(b) {
        a + b;
    }
}
