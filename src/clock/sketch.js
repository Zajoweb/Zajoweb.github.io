const bgColor = getComputedStyle(document.querySelector(':root')).getPropertyValue('--bg');

function setup()
{
  createCanvas(400, 400)
  angleMode(DEGREES)
}

function draw()
{
  background(bgColor);
  
  drawClock()
}

function drawClock()
{
  push()
  translate(200, 200)
  rotate(-90)

  var h = hour()
  var min = minute()
  var s = second()

  noFill()
  strokeWeight(8)
  
  stroke(255, 0, 75)
  var secondAngle = map(s, 0, 60, 0, 360)
  arc(0, 0, 300, 300, 0, secondAngle)

  stroke(150, 100, 255)
  var minuteAngle = map(min, 0, 60, 0, 360)
  arc(0, 0, 280, 280, 0, minuteAngle)

  stroke(100, 255, 20)
  var hourAngle = map(h % 12, 0, 12, 0, 360)
  arc(0, 0, 260, 260, 0, hourAngle)

  push()
  rotate(secondAngle)
  stroke(255, 0, 75)
  line(0, 0, 100, 0)
  pop()

  push()
  rotate(minuteAngle)
  stroke(150, 100, 255)
  line(0, 0, 75, 0)
  pop()

  push()
  rotate(hourAngle)
  stroke(100, 255, 20)
  line(0, 0, 50, 0)
  pop()

  stroke(255)
  point(0, 0)
  pop()

  fill(255)
  noStroke()
  textAlign(CENTER)
  textStyle(BOLD)
  textSize(20)
  text(h + ':' + min + ':' + s, width / 2, 375)
}
