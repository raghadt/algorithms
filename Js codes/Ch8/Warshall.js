var a = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 0]
];


for (var k = 0; k < a.length; k++)
{


  for (var i = 0; i < a.length; i++)
  {
    for (var j = 0; j < a.length; j++)
    {
      if (a[i][k] == 1 && a[k][j] == 1)
      {
        a[i][j] = 1;
        // document.write("<p> k:", k, "  i:", i, " j:", j, "  </p>");

        // for (var q = 0; q < a.length; q++)
        // {
        //   // document.write("<p>",
        //   //   a[q],
        //   //   "</p>");
        //
        //
        // }
        // document.write("------");
      }
    }
  }
}


for (var i = 0; i < a.length; i++)
{
  document.write("<p>",
    a[i],
    "</p>");
}
