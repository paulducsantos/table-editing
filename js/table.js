var deleteButtons = document.getElementsByClassName("delete-row");
var addButton = document.getElementById("add-row");
var rowCount;
var contactTable = document.getElementById("contacts");
var tableBody = document.getElementById("table-body");
var deleteButtonLastColumn = document.createElement("button");
deleteButtonLastColumn.innerHTML = "X";
deleteButtonLastColumn.setAttribute("class", "btn btn-default danger delete-row");

for(var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function(){
    console.log(deleteButtons[i], i);
    var row =  this.parentNode.parentNode;
    row.parentNode.removeChild(row)
  });  
}

function rowCounter () {
  var rows = document.getElementById("contacts").getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
  rows = (rows - 1)*2;
  return rows
}

addButton.addEventListener("click", function () {
  rowCount = rowCounter();
  var newRow = document.createElement("tr");
  var firstName = document.createTextNode(document.getElementById("first-name").value);
  var lastName = document.createTextNode(document.getElementById("last-name").value);
  var email = document.createTextNode(document.getElementById("email-field").value);
  var rowElements = [firstName, lastName, email, deleteButtonLastColumn];
  for (i = 0; i < 4; i++) {
    var newTd = document.createElement("td");
    var tableData = rowElements[i];
    newTd.appendChild(tableData);
    newRow.appendChild(newTd);
  };

  tableBody.insertBefore(newRow, tableBody.childNodes[rowCount]);
  rowCounter();
});




