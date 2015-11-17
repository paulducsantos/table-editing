// global variables
deleteButtonsCount = document.getElementsByClassName("delete-row");
var addButton = document.getElementById("add-row");
var contactTable = document.getElementById("contacts");
var tableBody = document.getElementById("table-body");

// adds event listener to first delete buttons that appear on the page
for(var i = 0; i < deleteButtonsCount.length; i++) {
  deleteButtonsCount[i].addEventListener("click", function(){
    var row =  this.parentNode.parentNode;
    row.parentNode.removeChild(row)
  });  
}
// counts the number of rows on the table
function rowCounter () {
  var rows = document.getElementById("contacts").getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
  rows = ((rows - 1)*2);
  return rows
}

// event listener for the add a row button
addButton.addEventListener("click", addRow);

function aquireFirstNames () {
  var allFirstNames = [];
  var allFirstNameElements = document.getElementsByClassName("first-name");
  for (var i = 0; i < allFirstNameElements.length; i++) {
    allFirstNames.push(allFirstNameElements[i].innerText);
  }
  return allFirstNames;
}

function aquireLastNames () {
  var allLastNames = [];
  var allLastNameElements = document.getElementsByClassName("last-name");
  for (var i = 0; i < allLastNameElements.length; i++) {
    allLastNames.push(allLastNameElements[i].innerText);
  }
  return allLastNames;
}

function aquireEmails () {
  var allEmails = [];
  var allEmailElements = document.getElementsByClassName("email");
  for (var i = 0; i < allEmailElements.length; i++) {
    allEmails.push(allEmailElements[i].innerText);
  }
  return allEmails;
}

function addRow() {
  rowCount = rowCounter();
  var newRow = document.createElement("tr");
  var firstName = document.createTextNode(document.getElementById("first-name").value);
  var lastName = document.createTextNode(document.getElementById("last-name").value);
  var email = document.createTextNode(document.getElementById("email-field").value);

  var firstNameStr = document.getElementById("first-name").value;
  var lastNameStr = document.getElementById("last-name").value;
  var emailStr = document.getElementById("email-field").value;
  
  allFirstNames = aquireFirstNames();
  allLastNames = aquireLastNames();
  allEmails = aquireEmails ();
  for (i = 0; i < allFirstNames.length; i++){
    if (firstNameStr === allFirstNames[i]) {
      return;
    }
  };
  for (i = 0; i < allLastNames.length; i++){
    if (lastNameStr === allLastNames[i]) {
      return;
    }
  };
  for (i = 0; i < allEmails.length; i++){
    if (emailStr === allEmails[i]) {
      return;
    }
  };

  var deleteButtonLastColumn = document.createElement("button");
  deleteButtonLastColumn.innerHTML = "X";
  deleteButtonLastColumn.setAttribute("class", "btn btn-default danger delete-row");
  deleteButtonLastColumn.addEventListener("click", addEventToNewDeleteButton); //adds an event listener to new delete buttons for the new row
  var rowElements = [firstName, lastName, email, deleteButtonLastColumn];
  for (i = 0; i < 4; i++) {          //creates a new td for each column and appends to the new row
    var newTd = document.createElement("td");
// sets the 3 td the proper class names
    if (i===0) {
      newTd.setAttribute("class", "first-name");
    }
    if (i === 1) {
      newTd.setAttribute("class", "last-name");
    }
    if (i === 2) {
      newTd.setAttribute("class", "email");
    }

    var tableData = rowElements[i];
    newTd.appendChild(tableData);
    newRow.appendChild(newTd);
  };

  tableBody.insertBefore(newRow, tableBody.lastChild.previousSibling); //appends new row to the 2nd to last child of the table
}

function addEventToNewDeleteButton () {
  var row =  this.parentNode.parentNode;
  row.parentNode.removeChild(row);
}


