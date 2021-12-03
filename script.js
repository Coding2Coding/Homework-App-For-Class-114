//function preload() {}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(570, 320);
    camera = createCapture(VIDEO);
}

//function draw() {}

function takePicture() {
    save("picture.png");
}