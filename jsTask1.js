// function getSum() {
//   var num1 = parseInt(document.getElementById("n1").value);
//   var num2 = parseInt(document.getElementById("n2").value);
//   var sum = num1 + num2;

//   document.getElementById("result").innerHTML = sum;
// }

// function setFocus(field) {
//   field.style.background = "green";
// }

// function setBlur(field) {
//   field.style.background = "white";
// }

// function setSelection(field) {
//   field.style.fontWeight = "italic";
//   field.style.background = "red";
// }

// function switchDemo() {
//   var choice = prompt("enter 1. Html, 2. css, 3. JS");
  
//   switch (choice) {
//     case "1":
//       alert("you are at HTML");
//       break;
    
//     case "2":
    
//     case "3":
//       alert("you are at css");
//       alert("you are at js");
//       break;
//   }
// }


// function parent() {
//   var array = [
//     [1, 2, 3, 4], 
//     [6, 7, 8],
//     [15, 28, 23, 04]
//   ]

//   for(var i in array) {
//     console.log("row",i, array[i]);
//   }

//   for(var i = 0; i < array.length; i++) {
//     console.log("row", i);
//     for(var j = 0; j < array[i].length; j++) {
//       console.log(array[i][j]);
//     }
//   }
// }

// tableDemo();

// function tableDemo() {
//   var dc_movies = ["superman", "Xmen", "wonder_women"];
//   var marvel_movies = ["spiderman", "avatar", "black panther"];

//   document.write("<table border>")
//   document.write("<tr> <th> category </th> <th> movie1 </th> <th> movie2 </th> <th> movie3 </th> </tr>");

//   document.write("<tr> <td> DC</td>");
//   for(var i = 0; i < dc_movies.length; i++) {
//     document.write("<td>", dc_movies[i]," </td>");
//   }
//   document.write("</tr>");

//   document.write("<tr><td> marvel</td>");
//   for(var i = 0; i < marvel_movies.length; i++) {
//     document.write("<td>", marvel_movies[i]," </td>");
//   }
//   document.write("</tr>");

//   document.write("</table>");
  
//   // document.getElementById("temp_table").style.border="10px solid black";

// }

studentReportCard();


function avg(arr) {
  var sum = 0;
  for(var i in arr) {
    sum += arr[i];
  }

  return sum/arr.length;
}

function studentReportCard() {
  var arr = {
    "student1" :[129, 23, 56, 1],
    "student2" :[34, 12, 99, 98]
  };
  

  for(var i in arr) {
    console.log(i, "-", arr[i]);
  }
}