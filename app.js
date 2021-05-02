function addRow() {
  var myNr = document.getElementById("Nr");
  var myForce = document.getElementById("dF").value;
  var myIntensity = document.getElementById("I").value;
  var myLength = document.getElementById("dl").value;
  var table = document.getElementById("myTableData");

  var myB = myForce / (myIntensity * myLength);

  if (!isNaN(myB)) {
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML =
      '<input class="button" type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML = myNr.value;
    row.insertCell(2).innerHTML = myForce;
    row.insertCell(3).innerHTML = myIntensity;
    row.insertCell(4).innerHTML = myLength;
    row.insertCell(5).innerHTML = myB;
    averageB();
  } else {
    alert("Please provide meaningful data.");
  }
}

function deleteRow(obj) {
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("myTableData");
  table.deleteRow(index);
}

// Mai adaugati la functia asta sa se calculeze si eroarea si tot
function averageB() {
  let data = document.querySelectorAll("#myTableData td");

  // Valorile a lui B din tabel se vor stoca in cleanData
  let cleanData = [];
  for (let i = 0; i < data.length; i++) {
    if (!((i + 1) % 6)) {
      cleanData.push(parseFloat(data[i].innerHTML));
    }
  }

  // Rezultatul nu numai decat sa fie un paragraf, puteti sa improvizati, mai creati un tabel sau ceva
  let avg = cleanData.reduce((p, c) => p + c, 0) / cleanData.length;
  document.getElementById("outputText").innerHTML =
    "Current data in the system: <strong>B = " + avg + "</strong>";
}
