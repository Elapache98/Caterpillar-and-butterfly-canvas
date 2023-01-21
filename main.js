"use strict"

document.getElementById("action").addEventListener("click", processForm);

let xInput1, yInput1, xInput2, yInput2;

function processForm() {
    /* Get data from the form */
    xInput1 = Number(document.getElementById("xInput1").value);
    yInput1 = Number(document.getElementById("yInput1").value);
    xInput2 = Number(document.getElementById("xInput2").value);
    yInput2 = Number(document.getElementById("yInput2").value);
    drawing.selectAll('svg>*').remove(); // This line selects everything that has been drawn in the SVG and deletes it all
    drawImage();
}

/* set up the drawing canvas */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

/*
The function below is called when the user presses the "Draw!" button and is where you will put most of your drawing code. Please follow the instructions in the homework PDF for this step.
*/

function drawImage() {
    /***** DO NOT ADD OR EDIT ANYTHING ABOVE THIS LINE ******/



    let CaterPillarX = xInput1;
    let CaterPillarY = yInput1;
    let ButterFlyX = xInput2;
    let ButterFlyY = yInput2;

    // Step 6

    /*caterpillar cartoon*/

    /*bugs head component*/
    let BugHead = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 80)
        .attr("cy", CaterPillarY + 295)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a light green color*/
        .attr("fill", "#B1F5A7");

    /*bug body*/
    let BugBody1 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 130)
        .attr("cy", CaterPillarY + 310)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a dark green color*/
        .attr("fill", "#5DB87D");

    let BugBody2 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 160)
        .attr("cy", CaterPillarY + 280)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a light green color*/
        .attr("fill", "#B1F5A7");


    let BugBody3 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 200)
        .attr("cy", CaterPillarY + 310)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a dark green color*/

        .attr("fill", "#5DB87D");

    let BugBody4 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 235)
        .attr("cy", CaterPillarY + 300)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a light green color*/
        .attr("fill", "#B1F5A7");

    let BugBody5 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 263)
        .attr("cy", CaterPillarY + 270)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a dark green color*/
        .attr("fill", "#5DB87D");

    let BugBody6 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 295)
        .attr("cy", CaterPillarY + 290)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a light green color*/
        .attr("fill", "#B1F5A7");

    let BugBody7 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 325)
        .attr("cy", CaterPillarY + 315)
        .attr("rx", 30)
        .attr("ry", 30)
        /*the following hex code is for a dark green color*/
        .attr("fill", "#5DB87D");

    let BugBody8 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 355)
        .attr("cy", CaterPillarY + 295)
        .attr("rx", 20)
        .attr("ry", 20)
        /*the following hex code is for a light green color*/
        .attr("fill", "#B1F5A7");

    let BugBody9 = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 370)
        .attr("cy", CaterPillarY + 280)
        .attr("rx", 15)
        .attr("ry", 15)
        /*the following hex code is for a dark green color*/
        .attr("fill", "#5DB87D");



    /*bugs antennae*/
    let BugAntenna = drawing.append('line')
        .attr("x1", CaterPillarX + 55)
        .attr("y1", CaterPillarY + 250)
        .attr("x2", CaterPillarX + 65)
        .attr("y2", CaterPillarY + 268.5)
        .attr("stroke", "black")
        .attr('stroke-width', .75);

    let BugAntenna2 = drawing.append('line')
        .attr("x1", CaterPillarX + 55)
        .attr("y1", CaterPillarY + 250)
        .attr("x2", CaterPillarX + 30)
        .attr("y2", CaterPillarY + 250)
        .attr("stroke", "black")
        .attr('stroke-width', .75);

    let BugAntenna3 = drawing.append('line')
        .attr("x1", CaterPillarX + 80)
        .attr("y1", CaterPillarY + 270)
        .attr("x2", CaterPillarX + 70)
        .attr("y2", CaterPillarY + 250)
        .attr("stroke", "black")
        .attr('stroke-width', .75);

    let BugAntenna4 = drawing.append('line')
        .attr("x1", CaterPillarX + 70)
        .attr("y1", CaterPillarY + 250)
        .attr("x2", CaterPillarX + 50)
        .attr("y2", CaterPillarY + 245.5)
        .attr("stroke", "black")
        .attr('stroke-width', .75);


    /*mouth component*/

    let BugMouth = drawing.append('line')
        .attr("x1", CaterPillarX + 80)
        .attr("y1", CaterPillarY + 308)
        .attr("x2", CaterPillarX + 60)
        .attr("y2", CaterPillarY + 308)
        .attr("stroke", "black")
        .attr('stroke-width', 2);


    /*bugs eye component*/

    let BugEyLeft = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 50)
        .attr("cy", CaterPillarY + 285)
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("fill", "black");

    let BugEyeRight = drawing.append('ellipse')
        .attr("cx", CaterPillarX + 70)
        .attr("cy", CaterPillarY + 285)
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("fill", "black");

    /*butterfly cartoon*/

    /*bottom wing component*/
    let BottomWingLeft = drawing.append('polyline')
        .attr("points", closedPolygon(ButterFlyX + 200, ButterFlyY + 100, ButterFlyX + 200, ButterFlyY + 200, ButterFlyX + 150, ButterFlyY + 100))
        .attr("transform", "translate(170,20)")
        /*the following hexcode is the closest orange I could find to the original drawing*/
        .attr("fill", "#F88D53");

    let BottomWingRight = drawing.append('polyline')
        .attr("points", closedPolygon(ButterFlyX + 100, ButterFlyY + 200, ButterFlyX + 150, ButterFlyY + 100, ButterFlyX + 100, ButterFlyY + 100))
        .attr("transform", "translate(280,20)")
        /*the following hexcode is the closest color I could find to the original drawing*/
        .attr("fill", "#F88D53");

    /*top wing component*/
    let TopWingRight = drawing.append('polyline')
        .attr("points", closedPolygon(ButterFlyX + 350, ButterFlyY + 330, ButterFlyX + 320, ButterFlyY + 260, ButterFlyX + 265, ButterFlyY + 350))
        .attr("transform", "translate(110,-235)")
        .attr("fill", "yellow");

    let TopWingLeft = drawing.append('polyline')
        .attr("points", closedPolygon(ButterFlyX + 250, ButterFlyY + 330, ButterFlyX + 350, ButterFlyY + 350, ButterFlyX + 300, ButterFlyY + 270))
        .attr("transform", "translate(25,-235)")
        .attr("fill", "yellow");


    /*butterfly body component*/
    let ButterflyBody = drawing.append('rect')
        .attr("x", ButterFlyX + 370)
        .attr("y", ButterFlyY + 60)
        .attr("width", 10)
        .attr("height", 150)
        .attr("fill", "lightgreen");

    /*butterfly antennae*/
    let ButterflyAntennaLeft = drawing.append('line')
        .attr("x1", ButterFlyX + 350)
        .attr("y1", ButterFlyY + 25)
        .attr("x2", ButterFlyX + 365)
        .attr("y2", ButterFlyY + 50)
        .attr("stroke", "black")
        .attr('stroke-width', .75);

    let ButterflyAntennaRight = drawing.append('line')
        .attr("x1", ButterFlyX + 400)
        .attr("y1", ButterFlyY + 25)
        .attr("x2", ButterFlyX + 385)
        .attr("y2", ButterFlyY + 50)
        .attr("stroke", "black")
        .attr('stroke-width', .75);

    /*butterfly eyes*/
    let ButterflyEyeLeft = drawing.append('ellipse')
        .attr("cx", ButterFlyX + 365)
        .attr("cy", ButterFlyY + 60)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", "red");

    let ButterflyEyeRight = drawing.append('ellipse')
        .attr("cx", ButterFlyX + 385)
        .attr("cy", ButterFlyY + 60)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", "red");



    /***** DO NOT ADD OR EDIT ANYTHING BELOW THIS LINE ******/
}
