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
  }
}

function deleteRow(obj) {
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("myTableData");
  table.deleteRow(index);
}