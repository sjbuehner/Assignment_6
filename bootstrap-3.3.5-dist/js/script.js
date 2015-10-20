//function message(message){console.log(message);}
//

//use this to pass along the message to fill-in a field. 
function changeMe() {
	alert("You must complete this field");
}
//validate for all Ordering Form sections (there should be a function that solves this repetition. 
var idName = document.getElementById("name");
idName.onblur = function () {
		if (idName.value == "") {
			changeMe();
			idName.style.border = "1px solid red";
		} else
			idName.style.border = "1px solid green";
	} // put RegEX here ^[^0-9]+$  only alpha

var idStreet = document.getElementById("street");
idStreet.onblur = function () {
	if (idStreet.value == "") {
		changeMe();
		idStreet.style.border = "1px solid red";
	} else
		idStreet.style.border = "1px solid green";
}

var idApt = document.getElementById("apt");
idApt.onblur = function () {
	if (idApt.value == "") {
		changeMe();
		idApt.style.border = "1px solid red";
	} else
		idApt.style.border = "1px solid green";
}

var idCity = document.getElementById("city");
idCity.onblur = function () {
	if (idCity.value == "") {
		changeMe();
		idCity.style.border = "1px solid red";
	} else
		idCity.style.border = "1px solid green";
}

//Only two alpha characters to State - convert to UPPERCASE
var idState = document.getElementById("state");
idState.onblur = function () {
	if (idState.value == "" || idState.length !== 2) {
		alert("Please enter a two digit State code");
		idState.style.border = "1px solid red";
	} else {
		idState.style.border = "1px solid green";
		var stateUpper = idState.toUpperCase;
	}
}

//Ensure a text box opens if building_type other is selected

//RegEx for zip code, phone number and email


//Only two alpha characters to State - convert to UPPERCASE


//function limitLength(obj., length){
//    var maxLength = length;
//    if(obj.value.length>maxLength)obj.value=obj.value.substring(0,maxLength)
//}

//Assign cost