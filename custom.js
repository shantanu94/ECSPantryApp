/*
PASSWORD
*/
password = "12345";

function doneClicked() {

	twoToThree = document.getElementById("2to3").value;
	fourToSix = document.getElementById("4to6").value;
	sevenToNine = document.getElementById("7to9").value;
	tenToThirteen = document.getElementById("10to13").value;
	fourteenToSeventeen = document.getElementById("14to17").value;
	eighteenToSixty = document.getElementById("18to60").value;
	sixtyOnePlus = document.getElementById("61Plus").value;

	vegetarianChecked = document.querySelector("#radioYes").checked;
	isVegetarian = vegetarianChecked ? true : false;

	var familySize = +twoToThree + +fourToSix + +sevenToNine + +tenToThirteen + +fourteenToSeventeen + +eighteenToSixty + +sixtyOnePlus;

	if(familySize > 0) {

		updateSettings();

		document.querySelector("#familySizeLabel").innerHTML = familySize;

		grainsNeed = ((+twoToThree * 5) + (+fourToSix * 5) + (+sevenToNine * 6) + (+tenToThirteen * 6) +
							(+fourteenToSeventeen * 8) + (+eighteenToSixty * 6) + (+sixtyOnePlus * 7)) * 3
							* grainsMet;
		fruitNeed = ((+twoToThree * 12) + (+fourToSix * 12) + (+sevenToNine * 12) + (+tenToThirteen * 16) +
							(+fourteenToSeventeen * 16) + (+eighteenToSixty * 16) + (+sixtyOnePlus * 16)) * 3
							* fruitMet;
		vegetablesNeed = ((+twoToThree * 12) + (+fourToSix * 16) + (+sevenToNine * 20) + (+tenToThirteen * 20) +
							(+fourteenToSeventeen * 24) + (+eighteenToSixty * 20) + (+sixtyOnePlus * 20)) * 3
							* vegetablesMet;
		dairyNeed = ((+twoToThree * 20) + (+fourToSix * 20) + (+sevenToNine * 20) + (+tenToThirteen * 24) +
							(+fourteenToSeventeen * 24) + (+eighteenToSixty * 24) + (+sixtyOnePlus * 24)) * 3
							* dairyMet;
		proteinNeed = ((+twoToThree * 4) + (+fourToSix * 5) + (+sevenToNine * 5) + (+tenToThirteen * 5.5) +
							(+fourteenToSeventeen * 6.5) + (+eighteenToSixty * 5.5) + (+sixtyOnePlus * 6)) * 3
							* proteinMet;

		calculateBeans();
		calculateDairy();
		calculateCannedFruit();
		calculateFreshFruit();
		calculatePastaRice();
		calculateCereal();
		calculateBread();
		calculateFreshVegetables();
		calculateCombinations(familySize);
		calculateMisc(familySize);
		calculatePersonals(familySize);
		calculateCannedVegetables();
		calculateMiscProtein();
	}
}

function calculateBeans() {
	var beans = isVegetarian ? (vegetablesNeed / (15 * 6)) + (proteinNeed / (15 * 4)) : (vegetablesNeed / (15 * 6));
	var value = beans < 1 ? 1 : Math.round(beans);
	value = (BeansLimit && BeansLimit < value) ? BeansLimit : value;
	document.querySelector("#BeansValue").value = value;
}

function calculateCannedVegetables() {
	var CannedVegetables = vegetablesNeed / (15 * 3);
	var value = CannedVegetables < 1 ? 1 : Math.round(CannedVegetables);
	value = (CannedVegetablesLimit && CannedVegetablesLimit < value) ? CannedVegetablesLimit : value;
	document.querySelector("#CannedVegetablesValue").value = value;
}

function calculateDairy() {
	var dairy = dairyNeed / 32;
	var value = dairy < 1 ? 1 : Math.round(dairy);
	value = (DairyLimit && DairyLimit < value) ? DairyLimit : value;
	document.querySelector("#DairyValue").value = value;
}

function calculateCannedFruit() {
	var cannedFruit = (fruitNeed * .25) / 15;
	var value = cannedFruit < 1 ? 1 : Math.round(cannedFruit);
	value = (CannedFruitLimit && CannedFruitLimit < value) ? CannedFruitLimit : value;
	document.querySelector("#CannedFruitValue").value = value;
}

function calculateFreshFruit() {
	var freshFruit = (fruitNeed * .75) / 16;
	var value = freshFruit < 1 ? 1 : Math.round(freshFruit);
	value = (FreshFruitLimit && FreshFruitLimit < value) ? FreshFruitLimit : value;
	document.querySelector("#FreshFruitValue").value = value;
}

function calculatePastaRice() {
	var pastaRice = (grainsNeed * .5) / 11.14;
	var value = pastaRice < 1 ? 1 : Math.round(pastaRice);
	value = (PastaRiceLimit && PastaRiceLimit < value) ? PastaRiceLimit : value;
	document.querySelector("#PastaRiceValue").value = value;
}

function calculateCereal() {
	var cereal = (grainsNeed / 6) / 15.8;
	var value = cereal < 1 ? 1 : Math.round(cereal);
	value = (CerealLimit && CerealLimit < value) ? CerealLimit : value;
	document.querySelector("#CerealValue").value = value;
}

function calculateBread() {
	var bread = (grainsNeed / 3) /  15;
	var value = bread < 1 ? 1 : Math.round(bread);
	value = (BreadLimit && BreadLimit < value) ? BreadLimit : value;
	document.querySelector("#BreadValue").value = value;
}

function calculateFreshVegetables() {
	var freshVegetables = (vegetablesNeed / 2) / 16;
	var value = freshVegetables < 1 ? 1 : Math.round(freshVegetables);
	value = (FreshVegetablesLimit && FreshVegetablesLimit < value) ? FreshVegetablesLimit : value;
	document.querySelector("#FreshVegetablesValue").value = value;
}

function calculateMiscProtein() {
	var miscProteinValue = isVegetarian ? ((proteinNeed * 3 / 4) / 13.3) : ((proteinNeed / 2) / 13.3);
	var value = miscProteinValue < 1 ? 1 : Math.round(miscProteinValue);
	value = (MiscProteinLimit && MiscProteinLimit < value) ? MiscProteinLimit : value;
	document.querySelector("#MiscProteinValue").value = value;
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

function updateSettings(){
	grainsMet = document.querySelector("#GrainsMetValue").value;
	fruitMet = document.querySelector("#FruitMetValue").value;
	vegetablesMet = document.querySelector("#VegetablesMetValue").value;
	dairyMet = document.querySelector("#DairyMetValue").value;
	proteinMet = document.querySelector("#ProteinMetValue").value;

	BeansLimit = document.querySelector("#BeansLimit").value;
	CannedVegetablesLimit = document.querySelector("#CannedVegetablesLimit").value;
	DairyLimit = document.querySelector("#DairyLimit").value;
	MiscProteinLimit = document.querySelector("#MiscProteinLimit").value;
	CannedFruitLimit = document.querySelector("#CannedFruitLimit").value;
	FreshFruitLimit = document.querySelector("#FreshFruitLimit").value;
	PastaRiceLimit = document.querySelector("#PastaRiceLimit").value;
	CerealLimit = document.querySelector("#CerealLimit").value;
	BreadLimit = document.querySelector("#BreadLimit").value;
	FreshVegetablesLimit = document.querySelector("#FreshVegetablesLimit").value;
}

$(document).ready(function(){
	$("#settings").hide();
	$("#passwordAlert").hide();

	$("#settingsNav").click(function() {
		$("#password").focus();
		$("html,body").animate({scrollTop:$("#enterPassword").offset().top}, 500);
	});

	$("#submitPassword").click(function() {
		var entry = document.querySelector("#password").value;
		$("#password").val("");
		if(entry === password) {
			$("#settings").show();
			$("html,body").animate({scrollTop:$("#settings").offset().top}, 500);
		} else {
			$("#passwordAlert").show();
		}
	});

	$("#hideBtn").click(function() {
		$("#settings").hide();
	});

	$("#clearBtn").click(function() {
		document.getElementById("form1").reset();
		document.getElementById("form2").reset();
		document.getElementById("form3").reset();
		document.querySelector("#familySizeLabel").innerHTML = 0;
	});

});