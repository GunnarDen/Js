const summa = 12000;
const tax = 0.07;
const cash = summa * (1 + tax)^24;

console.log(cash)

if (cash >= 13500) {
    console.log('Покупаем!')
} else if (cash < 13500) {
    console.log('Не хватает средств')
}