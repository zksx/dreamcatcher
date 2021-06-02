let angle = 0;
let circlePoints = 22;
let featherPoints = 5;
let angleDegrees = 0;
let bodyRadius = 400;
let angleRadians = (angleDegrees * Math.PI) / 180;
let degreeOffset = 360 / circlePoints;
let degreeOffsetFeathers = 360 / featherPoints;


function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	ellipseMode(CENTER);
	rectMode(CENTER);
}

function draw() {
		translate(windowWidth / 2, windowHeight / 2); // changes the orgin point to the center of the screen
		background(0);
		main();

}

function main(){
  scale(1, -1);									// reverses the global flip
	strokeWeight(4);							// giving the stroke a thicker line
	stroke(255);									// sets the stroke color from black to white
	noFill();
	ellipse(0, 0, 850, 850);			// making the outer dreamcatcher  frame
	ellipse(0, 0, 800, 800);			// making the inner dreamcatcher  frame

	plotCirclePoints();

	strokeWeight(25);							// making dark inner ring to block excess overlap from rings in the dreamcatcher
	stroke(000);
	ellipse(0, 0, 825, 825);
	angle = angle + 1;

	stroke('white');
	strokeWeight(4);
	
}

function plotCirclePoints(){

	strokeWeight(2);

	angleDegrees = 0;
	colorCounter = 0;


	for (i = 0; i < circlePoints; i++) {
	circlePointX = bodyRadius*Math.cos(angleRadians);	//using these two variables to find points on the dreamcatcher circumference
	circlePointY = bodyRadius*Math.sin(angleRadians);

	stroke('white');


	push();																						// used to give each ellipse it's own state of rotation and origin
	translate(circlePointX / 2,circlePointY / 2); 						// Sets each ellipse on the circle as it's own origin
	rotate(angleDegrees);
	noFill();
	ellipse(0, 0 , 450, 200);
	pop();

	angleDegrees += degreeOffset;
	angleRadians = (angleDegrees * Math.PI) / 180;

	}
}

function makeDreamCatcherFeathers(){

	for (i = 0; i < featherPoints; i++) {
	circlePointX = bodyRadius*Math.cos(angleRadians);	//using these two variables to find points on the dreamcatcher circumference
	circlePointY = bodyRadius*Math.sin(angleRadians);

	stroke('white');


	push();																						// used to give each ellipse it's own state of rotation and origin
	translate(circlePointX,circlePointY); 						// Sets each ellipse on the circle as it's own origin
	rotate(angleDegrees);
	noFill();
	ellipse(0, 0 , 100, 100);
	pop();

	angleDegrees += degreeOffsetFeathers;
	angleRadians = (angleDegrees * Math.PI) / 180;

	}
}
