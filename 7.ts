
function factorial (n : number): number{
    let result = 1
    for (let i = 1; i<=n ;i++ ){
        result *=i;
    }
return result
}

console.log(factorial(4))