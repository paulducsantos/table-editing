
// global variables
deleteButtonsCount = document.getElementsByClassName("delete-row");
var addButton = document.getElementById("add-row");
var contactTable = document.getElementById("contacts");
var tableBody = document.getElementById("table-body");

for(var i = 0; i < deleteButtonsCount.length; i++) {
  deleteButtonsCount[i].addEventListener("click", function(){
    var row =  this.parentNode.parentNode;
    row.parentNode.removeChild(row)
  });  
}

function rowCounter () {
  var rows = document.getElementById("contacts").getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
  rows = ((rows - 1)*2);
  return rows
}

addButton.addEventListener("click", function () {
  rowCount = rowCounter();
  var newRow = document.createElement("tr");
  var firstName = document.createTextNode(document.getElementById("first-name").value);
  var lastName = document.createTextNode(document.getElementById("last-name").value);
  var email = document.createTextNode(document.getElementById("email-field").value);
  var deleteButtonLastColumn = document.createElement("button");
  deleteButtonLastColumn.innerHTML = "X";
  deleteButtonLastColumn.setAttribute("class", "btn btn-default danger delete-row");
  deleteButtonLastColumn.addEventListener("click", function(){
    var row =  this.parentNode.parentNode;
    row.parentNode.removeChild(row)
  });
  var rowElements = [firstName, lastName, email, deleteButtonLastColumn];
  for (i = 0; i < 4; i++) {
    var newTd = document.createElement("td");
    var tableData = rowElements[i];
    newTd.appendChild(tableData);
    newRow.appendChild(newTd);
  };

  tableBody.insertBefore(newRow, tableBody.lastChild.previousSibling);
});




