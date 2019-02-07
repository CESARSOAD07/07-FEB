function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (mouseIsPressed) {
    if (mouseX > 180) {
      if (mouseX < 210) {
        if (mouseY > 180) {
          if (mouseY < 210) {
            background(0, 255, 0);
          }
        }

      }

    }

  }



  rect(180, 180, 30, 30);
}
