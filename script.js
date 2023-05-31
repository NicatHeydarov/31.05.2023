
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

var fontSize = 10,
    columns = canvas.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}
setInterval(draw, 33);

// ======================================


var endDate = new Date("February 8, 2024 24:00:00").getTime();
var timer = setInterval(function() {

    let now = new Date().getTime(); 
    let t = endDate - now;
    
    if (t >= 0) {

        let day = Math.floor(t / (1000 * 60 * 60 * 24));
        let hour = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secound = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("timer-day").innerHTML = day + 
        "<span class='label'> day</span>";

        document.getElementById("timer-hour").innerHTML= ("0" + hour).slice(-2) +
        "<span class='label'> hr</span>";

        document.getElementById("timer-minutes").innerHTML= ("0" + minutes).slice(-2) +
        "<span class='label'> ms</span>";

        document.getElementById("timer-secound").innerHTML= ("0" + secound).slice(-2) +
        "<span class='label'> sd</span>";
    }
    else { 
        document.getElementById("timer").innerHTML = "GAME OVERR!";
        
    }
    
    
}, 1000);