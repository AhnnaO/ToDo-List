//my hard coded items
var task1 = {
    todo: 'Work out',
    checked: false
};

var task2 = {
    todo: 'Drop off the kids',
    checked: false
};

var task3 = {
    todo: 'Pack a lunch',
    checked: false
};
//stored in a list as objects    
var myList = [
    task1,
    task2,
    task3
];

function retrieveList() {

    var storedValues = localStorage.getItem("text");
    if (storedValues != null) {
        myList = JSON.parse(storedValues);
    }
    return myList;
}


function addList() {

    var x = document.getElementById("newList").value;
    myList = retrieveList();
    myList.push({
        todo: x,
        checked: false
    });

    localStorage.setItem("text", JSON.stringify(myList));

    printNewList();
    document.getElementById("newList").value = "";

}

function printNewList() {

    //print items todo    
    var newItem = "";
    var allItems = retrieveList();

    for (i = 0; i < allItems.length; i++) {
        if(!allItems[i].checked){
            var liOpenTag = "<li class='list-group-item col-12' >";
            var labelTag = "<label class='form-check-label' for='defaultCheck";
            var CloseTag = "</input></li>";
            var inputTag = "'><input class='form-check-input' onclick='moveFromList(" + i + ")' type='checkbox' id='defaultCheck";

            newItem += liOpenTag + labelTag + [i] + inputTag + [i] + "'>" + allItems[i].todo + CloseTag;
        }
    }

    document.getElementById("dailyList").innerHTML = newItem;

    //print completed items
    var checkedBoxes = "";
    
    var allItems = retrieveList();

    for (i = 0; i < allItems.length; i++) {
        if(allItems[i].checked){
            var liOpenTag = "<li class='list-group-item col-12' >";
            var labelTag = "<label class='form-check-label' checked for='defaultCheck";
            var inputTag = "'><input class='form-check-input' onclick='moveFromList(" + i + ")' type='checkbox' id='defaultCheck";
            var CloseTag = "</li>";
            
            checkedBoxes += liOpenTag + labelTag + [i] + inputTag + [i] + "'>" + allItems[i].todo + CloseTag;
        }
        localStorage.setItem("text", JSON.stringify(myList));
    }

    document.getElementById("finishedList").innerHTML = checkedBoxes;

    }

function moveFromList(todoId) {

    myList[todoId].checked = !myList[todoId].checked;
    localStorage.setItem("text", JSON.stringify(myList));

    printNewList();
    
}
