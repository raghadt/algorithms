/*
efficient method for computing the greatest common divisor (GCD) of two numbers
*/
function euclid(m, n)
{
  var r;
  while (n != 0)
  {
    r = m % n;
    m = n;
    n = r;

  }
  return m;
}


var m = prompt("Enter m");
var n = prompt("Enter n");

document.write(euclid(m, n));
