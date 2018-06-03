var num = 99;
var plural;
var singular;

while (num > 0) {
    plural = num === 1 ? "bottle" : "bottles";
    singular = num === 2 ? "bottle" : "bottles";
    console.log(num + " " + plural + " of juice on the wall! " + num + " " + plural + " of juice! Take one down, pass it around... " + (num-1) + " " + singular + " of juice on the wall!");
    num--;
}
