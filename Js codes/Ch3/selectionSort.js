var a = [17, 34, 29, 90, 68, 45, 89];
var min;
document.write("<pr>Unsorted list: ", a, "</p>");

for (var i = 0; i < a.length - 1; i++)
{
  min = i;
  for (var j = i + 1; j < a.length; j++)
  {
    if (a[j] < a[min])
    {
      min = j;
    }

    var temp = a[i];
    a[i] = a[min];
    a[min] = temp;

    // document.write("<pr>list: ", a, "</p>");

  }

}
document.write("<pr>Sorted list: ", a, "</p>");
