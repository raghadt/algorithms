/*
Finding prime numbers
*/

var n = prompt("Enter n");
var a = [];
var l = [];
var j;

for (var p = 2; p < n; p++)
{
  a[p] = p;

}

for (var p = 2; p < Math.floor(Math.sqrt(n)); p++)
{

  if (a[p] != 0)
  {
    j = p * p;
    while (j <= n)
    {
      a[j] = 0;
      j += p;
    }
  }
}


var i = 0;
for (var p = 2; i < n; p++)
{
  if (a[p] != 0)
  {
    l[i] = a[p];
    i += 1;
  }
}

document.write(l);
