function doneClicked() {
	zeroToOne = document.getElementById("0to1").value;
	twoToThree = document.getElementById("2to3").value;
	fourToSix = document.getElementById("4to6").value;
	sevenToNine = document.getElementById("7to9").value;
	tenToThirteen = document.getElementById("10to13").value;
	fourteenToSeventeen = document.getElementById("14to17").value;
	eighteenToSixty = document.getElementById("18to60").value;
	sixtyOnePlus = document.getElementById("61Plus").value;

	var familySize = +zeroToOne + +twoToThree + +fourToSix + +sevenToNine + +tenToThirteen + +fourteenToSeventeen + +eighteenToSixty + +sixtyOnePlus;
	if(familySize > 0) {
		calculateCombinations(familySize);
		calculateMisc(familySize);
		calculatePersonals(familySize);
		calculateFrozenMeats();
		calculateCannedVegetables(familySize);
	}
}

function calculateCannedVegetables(familySize) {
	var totalVegetables = (+twoToThree * 12) + (+fourToSix * 16) + (+sevenToNine * 20) + (+tenToThirteen * 20)
	 + (+fourteenToSeventeen * 24) + (+eighteenToSixty * 20) + (+sixtyOnePlus * 20);
	var value = Math.ceil(totalVegetables * 3 / (15 * 3));
	document.querySelector("#CannedVegetablesValue").value = value;
}

function calculateCombinations(familySize) {
	if(familySize <= 2) {
		document.querySelector("#CombinationsValue").value = 2;
		return;
	} else if (familySize <= 4) {
		document.querySelector("#CombinationsValue").value = 3;
		return;
	} else if (familySize <= 6) {
		document.querySelector("#CombinationsValue").value = 4;
		return;
	} else if (familySize <= 8) {
		document.querySelector("#CombinationsValue").value = 5;
		return;
	} else if (familySize <= 10) {
		document.querySelector("#CombinationsValue").value = 6;
		return;
	} else if (familySize <= 12) {
		document.querySelector("#CombinationsValue").value = 7;
		return;
	} else if (familySize <= 14) {
		document.querySelector("#CombinationsValue").value = 8;
		return;
	} else if (familySize > 14) {
		document.querySelector("#CombinationsValue").value = 9;
		return;
	}
}

function calculateMisc(familySize){
	if(familySize <= 4) {
		document.querySelector("#MiscValue").value = 2;
		return;
	} else if(familySize <= 12) {
		document.querySelector("#MiscValue").value = 3;
		return;
	} else if(familySize > 12) {
		document.querySelector("#MiscValue").value = 4;
		return;
	}
}

function calculatePersonals(familySize) {
	if(familySize <= 4) {
		document.querySelector("#PersonalsValue").value = 2;
		return;
	} else if(familySize <= 8) {
		document.querySelector("#PersonalsValue").value = 3;
		return;
	} else if(familySize <= 12) {
		document.querySelector("#PersonalsValue").value = 4;
		return;
	} else if(familySize > 12) {
		document.querySelector("#PersonalsValue").value = 5;
		return;
	}	
}

function calculateFrozenMeats() {
	document.querySelector("#FrozenMeatsValue").value = "VARIES";
}