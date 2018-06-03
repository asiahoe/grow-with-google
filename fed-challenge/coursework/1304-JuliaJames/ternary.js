var x = 1;
var output;

while (x <= 20) {

    output = x % 3 === 0 ?      // if x is divisible by 3
            (x % 5 === 0 ?      // and if x is divisible by 5
                "JuliaJames" :  // output "JuliaJames"
                "Julia") :      // else output "Julia"
            (x % 5 === 0 ?      // if x is divisible by 5
                "James" :       // output "James"
                x);             // else output = x

    console.log(output);        // output x
    x++;                        // increment x
}
