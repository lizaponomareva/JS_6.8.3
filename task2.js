function isNumberPrime(num) {
    if (num <= 1 || num > 1000) {
        console.log('Данные неверны');
        return;
    }
    // Проверяем, является ли число простым
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(num, 'не является простым числом');
            return;
        }
    }
    console.log(num, 'является простым числом');
}

// Пример использования функции:
isNumberPrime(12); // 12 не является простым числом
isNumberPrime(7);  // 7 является простым числом