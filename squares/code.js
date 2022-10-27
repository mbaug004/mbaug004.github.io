var painter1 = document.getElementById("c1").getContext("2d");
function drawBackground(painter){
painter.fillStyle = "#000000";
painter.fillRect(0, 0, 400, 400);
}

drawBackground(painter1);

painter1.fillStyle ="#FF0000"; // red
for (var j = 0; j < 13; ++j) {
    // a row of squares
    for (var i = 0; i < 13; ++i) {
        painter1.fillRect(10 + i*30, 10+j*30, 20, 20);
        }
}
painter1.fillStyle ="#FF0000"; // red
for (var j = 0; j < 13; ++j) {
    // a row of squares
    for (var i = 0; i < 13; ++i) {
        painter1.fillRect(10 + i*30, 10+j*30, 20, 20);
        }
    }
        
