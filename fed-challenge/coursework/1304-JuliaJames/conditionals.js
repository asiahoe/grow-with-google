var x = 1;

if (x % 3 === 0 && x % 5 === 0) {   // if x is divisible by 3 and divisible by 5
    console.log("JuliaJames");      // output "JuliaJames"
} else if (x % 3 === 0) {           // else if x is only divisible by 3
    console.log("Julia");           // output "Julia"
} else if (x % 5 === 0) {           // else if x is only divisible by 5
    console.log("James");           // output "James"
} else {                            // else if it is indvisible by both
    console.log(x);                 // output x
} x++;                              // increment x
