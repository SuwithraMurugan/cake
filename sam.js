var num1=300,num2=100,num3=200,num4=250,num5=350;
var total = num1+num2+num3+num4+num5;

document.getElementById("button1").onclick = displaychoco; 
function displaychoco() {
  num1=0
  document.getElementById("suwi1").innerHTML = "CHOCOLATE-----300";  
  var  box = document.getElementById("box")
  var layer = document.createElement('div')
  layer.id
  layer.style.backgroundColor = 'brown'

 layer.style.width = " 245px";
  layer.style.height = " 20px";
  layer.style.padding = "5px";
  layer.style.border = " 1px solid blue";
  layer.style.margin = "auto"
  box.prepend(layer)
}
document.getElementById("button2").onclick = displaystraw;

function displaystraw() {
  num2=0
  document.getElementById("suwi2").innerHTML = "STRAWBERRY......100";
  var  box = document.getElementById("box")
  var layer = document.createElement('div')
  layer.style.backgroundColor = 'pink'
  

 layer.style.width = " 200px";
  layer.style.height = " 20px";
  layer.style.padding = "5px";
  layer.style.border = " 1px solid blue";
  layer.style.margin = "auto"


  box.prepend(layer) 
}


document.getElementById("button3").onclick = displaybutter;

function displaybutter() {
  num3=0
  document.getElementById("suwi3").innerHTML = "BUTTER-----200";
  var  box = document.getElementById("box")
  var layer = document.createElement('div')
  layer.style.backgroundColor = 'beige'
 
 layer.style.width = " 160px";
  layer.style.height = " 20px";
  layer.style.padding = "5px";
  layer.style.border = " 1px solid blue";
  layer.style.margin = "auto"

  box.prepend(layer) 
}

document.getElementById("button4").onclick = displayvan;
function displayvan() {
  num4=0
    document.getElementById("suwi4").innerHTML = "VANNILA-----250";
    var box= document.getElementById("box")
  var layer = document.createElement('div')
  layer.style.backgroundColor = 'yellow'

 layer.style.width = " 120px";
  layer.style.height = " 20px";
  layer.style.padding = "5px";
  layer.style.border = " 1px solid blue";
  layer.style.right="60px"
  layer.style.margin = "auto"

  box.prepend(layer) 
}
  


  document.getElementById("button5").onclick = displayred;
function displayred() {
  num5=0
    document.getElementById("suwi5").innerHTML = "RED VELVET-----250";
    var  box = document.getElementById("box")
  var layer = document.createElement('div')
  layer.style.backgroundColor = 'red'

  layer.style.margin = "auto"
 layer.style.width = " 80px";
  layer.style.height = " 20px";
  layer.style.padding = "5px";
  layer.style.border = " 1px solid blue";

  box.prepend(layer) 
}

document.getElementById("button6").onclick = displayimg;
function displayimg() {
    document.getElementById("suwi6").innerHTML = "TOTAL AMOUNT" + (total - (num1+num2+num3+num4+num5));
    var img=new Image()
    img.src="https://images.vexels.com/media/users/3/194267/isolated/lists/231a81e767b5455c37cd7e1a2968a0d4-birthday-candles-set.png"
  var layer = document.createElement('div')

  layer.style.margin = "auto"
 layer.style.width = " 80px";
  layer.style.height = " 20px";
  layer.style.padding = "5px";
  layer.style.border = " 1px solid blue";
    img.style.width="100px";
    img.style.margin="auto";
    img.style.position="absolute";
    img.style.top="160px";
    img.style.left="623px"
    img.style.po
 
  box.prepend(img) 
}
