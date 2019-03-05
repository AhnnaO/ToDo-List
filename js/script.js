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
    
var myList = [
    task1,
    task2,
    task3
];

console.log(myList);

//inputClass.checked ("false");
//}
var dailyList = localStorage.setItem("text", JSON.stringify(myList));

console.log(dailyList);

var inputClass = document.getElementsByClassName("form-check-input");
console.log(inputClass);


function retrieveList(){
    var values = new Array;
    var storedValues = localStorage.getItem("text");
    if (storedValues != null){
        values = JSON.parse(storedValues);
    }
    return values;
}

function addList() {
         
    var x = document.getElementById("newList").value;
    var values = retrieveList();
    values.push({
        todo: x,
        checked: false
        });
   
    localStorage.setItem("text", JSON.stringify(values));

    printNewList();

}

function printNewList(){
    
    var allItems = retrieveList();
    var newItem = "";
    
    for (i = 0; i < allItems.length; i++) {
        var liOpenTag = "<li class='list-group-item'>";
        var labelTag = "<label class='form-check-label' for='defaultCheck";
        var inputTag = "'><input class='form-check-input' onclick='moveFromList(" + i + ")' type='checkbox' value='" + allItems[i].todo + "' id='defaultCheck";
        var CloseTag = "</input></li>";

        newItem += liOpenTag + labelTag + [i] + inputTag + [i] + "'>" + allItems[i].todo + CloseTag;
 
            
    }  
    
    document.getElementById("dailyList").innerHTML = newItem;
    for (i = 0; i < inputClass.length; i++) {
 
        if(inputClass[i].checked === true) {
            //localStorage.setItem(document.getElementsByClassName("form-check-input")[i].getAttribute('id'), //inputClass[i].checked);
        }
    }
    console.log(allItems);
}

//console.log(printNewList());

//  !!todoId comes from  + i + in line 64

function moveFromList(todoId) {
    var checkedBoxes = "";
    var liOpenTag = "<li class='list-group-item'>";
    var CloseTag = "</li>";

    //for (i = 0; i < inputClass.length; i++) {
 
        //if(inputClass[i].checked === true) {
            myList[todoId].checked = true;
            //localStorage.setItem(document.getElementsByClassName("form-check-input")[i].getAttribute('id'), inputClass[i].checked);
        var finished = myList[todoId].todo; 
        //console.log(localStorage.getItem(document.getElementsByClassName("form-check-input")[i].getAttribute('id')));
        //console.log(myList[i]);
            //finished.style.textDecoration = "line-through";
            
               
               //if(finished === true){
               checkedBoxes += liOpenTag + finished + CloseTag; 
               //document.getElementById("finishedList").innerHTML = "<li>" + myList + "</li>";
             //console.log(myList);
            document.getElementById("finishedList").innerHTML = checkedBoxes;
        //}
        
    //}
 //}

 localStorage.setItem("text", JSON.stringify(myList));
} 