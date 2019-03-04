var myList = [
    'Work out',
    'Drop off the kids',
    'Pack a lunch'
];


var inputClass = document.getElementsByClassName("form-check-input");
//var finishedTasks = [''];


function everydayList() {
    var entireList = "";
    var liOpenTag = "<li class='list-group-item'>";
    var labelTag = "<label class='form-check-label' for='defaultCheck";
    var inputTag = "'><input class='form-check-input' onclick='moveFromList()' type='checkbox' value='' id='defaultCheck";
    var CloseTag = "</input></li>";

    for (i = 0; i < myList.length; i++) {
        entireList += liOpenTag + labelTag + [i] + inputTag + [i] + "'>" + myList[i] + CloseTag;
    }
    document.getElementById("dailyList").innerHTML = entireList;
}

function addList() {
    var newItem = "";
    var liOpenTag = "<li class='list-group-item'>";
    var labelTag = "<label class='form-check-label' for='defaultCheck";
    var inputTag = "'><input class='form-check-input' onclick='moveFromList()' type='checkbox' value='' id='defaultCheck";
    var CloseTag = "</input></li>";

    for (i = 0; i < myList.length; i++) {
        newItem += liOpenTag + labelTag + [i] + inputTag + [i] + "'>" + retrievedList + CloseTag;
    }
    console.log(liOpenTag);
    console.log(labelTag);
    console.log(inputTag);
    console.log(newItem);
    var x = document.getElementById("newList").value;
    myList.push(x);
    localStorage.setItem("text", x);
    var retrievedList = localStorage.getItem("text");        
    console.log(retrievedList);
    //everydayList();

    document.getElementById("dailyList").innerHTML = newItem;
    document.getElementById("newList").value = "";
}

function moveFromList() {
    var checkedBoxes = "";
    var liOpenTag = "<li class='list-group-item'>";
    var CloseTag = "</li>";

    for (i = 0; i < inputClass.length; i++) {
 
        localStorage.setItem(document.getElementsByClassName("form-check-input")[i].getAttribute('id'), inputClass[i].checked);
        var finished = localStorage.getItem(document.getElementsByClassName("form-check-input")[i].getAttribute('id'));
        console.log(localStorage.getItem(document.getElementsByClassName("form-check-input")[i].getAttribute('id')));
        //console.log(myList[i]);
            //finished.style.textDecoration = "line-through";
            
               
               //if(finished === true){
               checkedBoxes += liOpenTag + finished + CloseTag; 
               //document.getElementById("finishedList").innerHTML = "<li>" + myList + "</li>";
             //console.log(myList);
            document.getElementById("finishedList").innerHTML = checkedBoxes;
    //}
 }
} 
// function moveFromList() {
//     var checkedBoxes = "";
//     var liOpenTag = "<li class='list-group-item'>";
//     var labelTag = "<label class='form-check-label' for='defaultCheck";
//     var inputTag = "'><input class='form-check-input' onclick='moveFromList()' type='checkbox' value='' id='defaultCheck";
//     var CloseTag = "</input></li>";

//     for (i = 0; i < inputClass.length; i++) {

//         localStorage.setItem(document.getElementsByClassName("form-check-input")[i].getAttribute('id'), inputClass[i].checked);
//         var finished = localStorage.getItem(document.getElementsByClassName("form-check-input")[i].getAttribute('id'));
//         for (i = 0; i < finished.length; i++) {
//             checkedBoxes += liOpenTag + labelTag + [i] + inputTag + [i] + "'>" + myList[i] + CloseTag;
//         }
//         document.getElementById("finishedList").innerHTML = checkedBoxes;
//     }
// }    
//         //if(true) {
//             //finishedTasks.push(finished);
//             //everydayList();
//           //checkedBoxes += liOpenTag + labelTag + [i] + inputTag + [i] + "'>" + finishedList[i] + CloseTag;
//             //finished.style.textDecoration = "line-through";
//             //for(j = 0; j < finishedTasks.length; j++){
//                 //document.getElementById("finishedList").innerHTML = entireList + finishedTasks;
//                 document.getElementById("finishedList").innerHTML = finished;
//             //}
//         }


//     }
// }    

    


    // Save List
//  JSON.stringify() change list to text & JSON.parse() to change teext to list


// var retrievedList = localStorage.getItem(“listFromInput”);
// var itemFromStorage = JSON.parse(retrievedList);
// var globalList = itemFromStorage;

// function gettingAndSettingLocalStorage(){
//  globalList.push(document.getElementById(“item”).value);

//  var listFromInput = localStorage.setItem(“listFromInput”, JSON.stringify(globalList));

//  // retrieve stored data (JSON stringified) and convert

//  var retrievedList = localStorage.getItem(“listFromInput”);
//  var itemFromStorage = JSON.parse(retrievedList);

//  var singleItem = “”;
//    for(let i = 0; i < itemFromStorage.length; i++){
//      singleItem += “<li>” + itemFromStorage[i] + “</li>“;
//    }
//  document.getElementById(“result”).innerHTML = singleItem;