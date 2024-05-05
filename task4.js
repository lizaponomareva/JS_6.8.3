const id = setInterval(function (a, b) {
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
}, 1000, 1, 2);

clearInterval(id);