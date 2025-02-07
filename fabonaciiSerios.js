//  Write a JavaScript function that returns the Fibonacci sequence up to a 
// given number of terms.

function fibonacciSeries(num) {
    if (num <= 0) return [];
    if (num === 1) return [0]; 
    let series = [0, 1]; 
    for (let i = 2; i < num; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}
let num = 10;
console.log(fibonacciSeries(num)); 