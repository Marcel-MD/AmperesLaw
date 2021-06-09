function addRow() {
  var myNr = document.getElementById("Nr");
  var myMass = document.getElementById("m").value;
  var myIntensity = document.getElementById("I").value;
  var myLength = document.getElementById("dl").value;
  var table = document.getElementById("myTableData");

  var myB = (myMass * 9.8) / (myIntensity * myLength);

  if (!isNaN(myB) && (myIntensity > 0) && (myLength > 0) && (myMass > 0)) {
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML =
      '<input class="button" type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML = myNr.value;
    row.insertCell(2).innerHTML = myMass;
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
  averageB();
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

  let err = [];
  cleanData.forEach((B) => {
    err.push(Math.abs(B - avg));
  });

  let avgErr = err.reduce((p, c) => p + c, 0) / err.length;

  document.getElementById("outputText").innerHTML =
    "Current data in the system: <strong>B = " +
    avg.toFixed(10) +
    " , error = " +
    (avgErr * 100).toFixed(10) +
    "%" +
    "</strong>";
}
