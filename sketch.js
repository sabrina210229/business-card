// Print dimensions - good to keep ratios as variables throughout!
var cardH = 400;
var cardW = Math.round(cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);

// dimensions for bleed area
var bleedXmin = 0;
var bleedXmax = cardW + (bleedPadW*2);
var bleedYmin = 0;
var bleedYmax = cardH + (bleedPadH*2);

// dims for centered card area
var cardXmin = 0 + bleedPadW;
var cardXmax = cardW;
var cardYmin = 0 + bleedPadH;
var cardYmax = cardH;

// dims for centered padding area
var padXmin = cardXmin + bleedPadW;
var padXmax = cardXmax - bleedPadW*2;
var padYmin = cardYmin + bleedPadH;
var padYmax = cardYmax - bleedPadH*2;


function setup() {
  createCanvas(720, 400);

 }

function draw() {
  background(127);
  noStroke();
  for (var i = 0; i < height; i += 25) {
    fill(62, 183, 232  );
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 9, height);

}



  // careful! see textSize is used by p5.js library, so don't name it as a var
  var fontSizeA = Math.round(cardH/9);
  fill(255, 241, 75  );
  textSize(fontSizeA);
  text("                        Banana Co.", padXmin+bleedPadW, padYmax*0.3);
  var fontSizeNorm = Math.round(cardH/16); // maintain aspect ratio with text too
  fill(253, 254, 254  );
  textSize(fontSizeNorm);
  text("                                           Sabrina Liao", padXmin+bleedPadW, padYmax*0.50);
  fill(253, 254, 254  ); // note color values - try to improve with cymk-style colors
  text("                                           CEO of Banana Co.", padXmin+bleedPadW, (padYmax*0.50)+fontSizeA);
  fill(253, 254, 254); // note 4th value is alpha (transparency)
  text("                                           P: 0912-345-678", padXmin+bleedPadW, (padYmax*0.50)+(fontSizeA*2));
  fill(253, 254, 254);
  text("                                           E: sabrina@banana.com", padXmin+bleedPadW, (padYmax*0.50)+(fontSizeA*3));
  fill(253, 254, 254);
  text("                                           W: sabrina.liao.com", padXmin+bleedPadW, (padYmax*0.50)+(fontSizeA*4));



}