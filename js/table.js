var deleteButtons = document.getElementsByClassName("delete-row");
var addButton = document.getElementById("add-row");

for(var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function(){
    console.log(deleteButtons[i], i);
    var row =  this.parentNode.parentNode;
    row.parentNode.removeChild(row)
  });  
}

function rowCounter () {
  var rows = document.getElementById("contacts").getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
  rows -= 1;
  return rows
}

addButton.addEventListener("click", function(){
  rowCount = rowCounter();
  console.log(rowCount)
})

