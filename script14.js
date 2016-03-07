/*
$(function(){
	// start up code goes here
	alert("this works!");
});

$('.importantText')
$('#myFirstParagraph')
$('p'). fadeOut();

jQuery('<div id ="badge"><img src ="badge.gif" alt="badge earned for achivement"</div>')


$.myCustomMethod = function (){alert('hi');};

$.listBox ={
	show: function(){},
	hide: function(){},
	position: function(){},
	initiate: function(){}
};
*/
$(function(){
//$("#title").text(" Yay !. I can get here through jQuey");	
//$("#first").html("<h2> Great quotes by Monty </h2>")
// append and prepend work inside the selection 
$("#first").prepend("<h2> Great quotes 2</h2>");
$("#first").append("<h3> .. For you to ponder </h3>");

$("#myAnchor").attr("href","http://youtube.com");

$("#title").addClass("standout");
});
