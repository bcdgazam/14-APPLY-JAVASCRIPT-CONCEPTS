//14-11 Check whether a number is a Prime Number or not

function isPrime(n){
    for(i = 2; i < n; i++){
        if (n % i == 0){
            return 'Not a Prime Number';
        }
    }
    return 'Your Number Is a Prime Number';
}

let result = isPrime(139);
console.log(result);