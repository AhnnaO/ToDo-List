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

console.log(myList);


var dailyList = localStorage.setItem("text", JSON.stringify(myList));

//console.log(dailyList);

function retrieveList() {
    var values = new Array;
    var storedValues = localStorage.getItem("text");
    if (storedValues != null) {
        values = JSON.parse(storedValues);
    }
    return values;
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

    var newItem = "";
    var allItems = retrieveList();

    for (i = 0; i < allItems.length; i++) {

        var liOpenTag = "<li class='list-group-item col-12' >";
        var labelTag = "<label class='form-check-label' for='defaultCheck";
        var inputTag = "'><input class='form-check-input' onclick='moveFromList(" + i + ")' type='checkbox' value=''" + allItems[i].todo + "' id='defaultCheck";
        var CloseTag = "</input></li>";

        newItem += liOpenTag + labelTag + [i] + inputTag + [i] + "'>" + allItems[i].todo + CloseTag;

    }

    document.getElementById("dailyList").innerHTML = newItem;
}


//  !! (todoId) comes from  + i + in inputTag

function moveFromList(todoId) {

    var allBoxes = document.getElementsByClassName("form-check-input");
    console.log(allBoxes);

    var checkedBoxes = "";

    var liOpenTag = "<li class='list-group-item col-12'>";
    var CloseTag = "</li>";
    //var labelTag = "<label class='form-check-label' for='defaultCheck";
    //var inputTag = "'><input class='form-check-input' onclick='returnToList(" + i + ")' type='checkbox' value='" + myList[i].todo + "' id='defaultCheck";

    document.getElementById("finishedList").innerHTML = "";

    myList[todoId].checked = !myList[todoId].checked;

    for (var i = 0; i < allBoxes.length; i++) {
        if (allBoxes[i].checked == true) {
            allBoxes[i].parentNode.classList.add('checked');
            console.log("Complete");
        } else {
            allBoxes[i].parentNode.classList.remove('checked');
            console.log("uncomplete");
        }
    }
    localStorage.setItem("text", JSON.stringify(myList));

    var finished = myList[todoId].todo;
    
    // for (var j = 0; j < allBoxes.length; j++) {
    
    //     if (allBoxes[j].checked == true) {
    
            checkedBoxes = liOpenTag + finished + CloseTag;
            
            document.getElementById("finishedList").innerHTML += checkedBoxes;
        // } else {
        //     document.getElementById("finishedList").innerHTML = "";
        // }
    }
    //document.getElementById("defaultCheck").value = "";
    localStorage.setItem("text", JSON.stringify(myList));



// function returnToList(todoId){
//     var allFinishedItems = moveFromList();

//     // //trying to incorporate printlist code to get checkable boxes available in finished list.
//     for (i = 0; i < allFinishedItems.length; i++) {

//     document.getElementById("dailyList").innerHTML = "";

//     myList[todoId].checked = !myList[todoId].checked;
//     }
//     document.getElementById("dailyList").innerHTML = allFinishedItems;
// }