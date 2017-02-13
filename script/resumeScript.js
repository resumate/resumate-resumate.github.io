var submit_button = document.getElementById("submit");
var addnew_btn = document.getElementById("addnew");
var styleSheet = "<style>* { font-family: Trebuchet MS, Tahoma, sans-serif; } body { width: 8.5in; margin: 0 auto; } #nameDiv{ position: relative; top: -.28in; width: 2in; float: left; } #name-output { font-size: 36pt; display: block; text-transform: uppercase; font-weight: bold; margin-bottom: -.05in; } #contactDiv { float: right; } .secTitle { color: #1D6DA6; font-size: 14pt; text-transform: uppercase; font-weight: bold; } .work-title { font-weight: bold; } #workDiv, #actDiv, #commDiv { width: 4in; } #accomDiv, #educationDiv, #skillsDiv, #contactDiv { width: 3.5in; } #workDiv, #actDiv, #commDiv, #accomDiv, #educationDiv, #skillsDiv, #objectiveDiv { clear: both; } #divFloatLeft { float: left; } #divFloatRight { float: right; } span { display: block; font-size: 12pt; } #objectiveDiv { border-top-width: 2px; border-bottom-width: 2px; border-top-style: solid; border-bottom-style: solid; border-top-color: #cccccc; border-bottom-color: #cccccc; padding-bottom: .25in; } ul { list-style: none; padding-left: 0; } li:before { content: '- '; margin-left: -.12in; } li { margin-left: .11in; margin-bottom: .05in; } #school-output, #gradeLvl-output, #GPA-output, #classes-output { line-height: .25in; } #school-output { margin-top: -.05in; font-weight: bold; } #gradeLvl-output, #GPA-output { display: inline; } #GPA-output:before { content: '| '; } #GPA-output:after { content: ' GPA'; } #printBtn { position: fixed; top: 0; right: 0; text-transform: uppercase; background-color: #1D6DA6; color: white; font-weight: bold; font-size: 13pt; padding: 15px; border: none; } #printMsg { text-align: center; } </style>";

function displayFunction(idName) {
    $(idName).fadeIn(700);
}
function hideFunction(idName) {
    /*if ($(".work-description").is(":focus")) {
        $("#jobDescPop").css("display", "block");
    } else {*/
        $(idName).css("display", "none");
    //}
}

function nWin() {
  var w = window.open();
  var html = $("#toNewWindow").html();
    $(w.document.body).html(html + styleSheet);
    $(w.document.head).html("<title>Your Resume</title><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'>");
    
}

$(function() {
    $("input#submit").click(nWin);
});

//undo all info upon refreshing the page
/*window.onunload = function() {

};*/

submit_button.addEventListener('click', function (){
    var name = document.getElementById("name").value;
    var title = document.getElementsByClassName("jobTitle");
    var workDesc = document.getElementsByClassName("work-description");
    var schoolName = document.getElementById("schoolName").value;
    var gradeLevel = document.getElementById("gradeLevel").value;
    var GPA = document.getElementById("GPA").value;
    var classes = document.getElementById("classes").value;
    var email = document.getElementById("email").value; 
    var phone = document.getElementById("phone").value; 
    var objective = document.getElementById("objective").value;
    var skills = document.getElementsByClassName("skills");
    var accomplishments = document.getElementsByClassName("accomplishments");
    var actleader = document.getElementsByClassName("activities");
    var commserv = document.getElementsByClassName("service");


    document.getElementById("name-output").innerHTML = name;   
    document.getElementById("email-output").innerHTML = email;   
    document.getElementById("phone-output").innerHTML = phone;   
    document.getElementById("obj-output").innerHTML = objective;   
    document.getElementById("school-output").innerHTML = schoolName;   
    document.getElementById("gradeLvl-output").innerHTML = gradeLevel;   
    document.getElementById("GPA-output").innerHTML = GPA;   
    document.getElementById("classes-output").innerHTML = classes;   
    fillText(skills, "skill-item", "skills-output");
    fillText(accomplishments, "acc-item", "acc-output");
    fillText(actleader, "activity-item", "act-output");
    fillText(commserv, "service-item", "comm-output");
    
    if ( accomplishments[0].value == "" ){
        document.getElementById("accomDiv").innerHTML = "";   
    }
    if ( commserv[0].value == "" ) {
        document.getElementById("commDiv").innerHTML = "";   
    }
    if ( title[0].value == "" ) {
        document.getElementById("workDiv").innerHTML = "";   
    }
    
    function fillText(info, itemName, outputID) {
        for (i = 0; i < info.length; i++) {
            var listItem = document.createElement("li");
            listItem.setAttribute("class", itemName);
            var listText = document.createTextNode(info[i].value);
            listItem.appendChild(listText);  
            document.getElementById(outputID).appendChild(listItem);  
        }
    }
    for (i = 0; i < title.length; i++) {
        var pItem = document.createElement("p");
        pItem.setAttribute("class", "work-title");
        var titleText = document.createTextNode(title[i].value);
        pItem.appendChild(titleText);  
        var pItem2 = document.createElement("p");
        pItem2.setAttribute("class", "work-desc");
        var descText = document.createTextNode(workDesc[i].value);
        pItem2.appendChild(descText);  
        document.getElementById("workXP-output").appendChild(pItem);  
        document.getElementById("workXP-output").appendChild(pItem2);  
    }

});



function addInputBox(i, liClass, inputClass){
    var list = document.getElementsByClassName("addedfields")[i];

    var node = document.createElement("li");
    node.setAttribute("class", liClass);
    var input_node = document.createElement("input");
    input_node.type = "text";
    input_node.setAttribute("maxlength", "80");
    input_node.className = inputClass;
    var remove_node = document.createElement("input");
    remove_node.type = "button";
    remove_node.className = "removeButton";
    remove_node.value = "Remove";
    node.appendChild(remove_node);
    node.insertBefore(input_node, remove_node);
    list.appendChild(node);

    remove_node.addEventListener('click', function(){
        remove_node.className = "disappear";
        input_node.className = "disappear";
        node.className = "disappear";
    });
}

function addWorkXP(){
    var list = document.getElementsByClassName("addedfields")[1];
    var node = document.createElement("li");
    node.setAttribute("class", "work-list");
    var input_node1 = document.createElement("input");
    input_node1.type = "text";
    input_node1.placeholder = "Job Title (Year)";
    input_node1.className = "jobTitle";
    var input_node2 = document.createElement("textarea");
    input_node2.placeholder = "Description";
    input_node2.setAttribute("maxlength", "200");
    input_node2.className = "work-description";
    var remove_node = document.createElement("input");
    remove_node.type = "button";
    remove_node.className = "removeButton";
    remove_node.value = "Remove";
    node.appendChild(remove_node);
    node.insertBefore(input_node2, remove_node);
    node.insertBefore(input_node1, input_node2);
    list.appendChild(node);

    remove_node.addEventListener('click', function(){
        remove_node.className = "disappear";
        input_node1.className = "disappear";
        input_node2.className = "disappear";
        node.className = "disappear";
    });
}