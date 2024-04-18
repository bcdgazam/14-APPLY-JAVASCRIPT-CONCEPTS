//14-10 Create Fibonacci series in a recursive way (full series)

function fibonacci(n){
    if (n == 0){
        return [0];
    }
    else if (n == 1){
        return [0, 1];
    }
    else {
        let fibo = fibonacci(n-1);
        let nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}

let result = fibonacci(12);
console.log(result);