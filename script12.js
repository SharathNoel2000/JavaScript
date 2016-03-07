var batwing = {
	status: "Ready",
	resuceBatman: function(){
		document.write("Locating his transponder ... intializing launch..");
	}
}
/*
if (batwing.status === "Ready"){
	
	batwing.resuceBatman();
}
*/
var utilities = {
	printAllMembers: function(target){
		for (i in target){
			document.write("</br>"+ target[i]);
		}
	}
}

//utilities.printAllMembers(batwing);
/*
var i_am_empty = { };
utilities.printAllMembers(i_am_empty);
*/

var planet ={
	id: 34,
	name: "Krypton planet",
	faction: {
		name:"SUperman",
		factionId: 2,
		notification: function (){
			document.write("Super man is from Krypton planet");
		}
	},
	cities: [
	{ locationId : 15, name : "rome"},
	{ locationId: 16 , name: "Pompey"},
	{ locationId: 17, name: "Capua"}
	]
	
};

//planet.faction.notification();
//document.write(planet.cities[2].name);
//document.write(planet.name);
//planet.name= "Volantis";
//document.write(planet.name);
/*
var z = planet;
document.write(z.name);
*/
/*
if (typeof planet.defense === "undefined"){
	planet.defense = "Encryption";
	
}
document.write(planet.defense);
*/

/*
for (i in planet){
	document.write("<br/>"+ i + "==>"+planet[i]);
	
}
*/

function car( model, make ,year){
	this.model = model;
	this. make= make;
	this.year = year;
	
}

var myCar = new car ("camry", "toyota", 2008);
var myOtherCar = new car ("camry", "toyota", 2001);

alert (myCar.year);
alert (myOtherCar.model);




