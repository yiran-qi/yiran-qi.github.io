var c = document.getElementById('c');
var ctx = c.getContext('2d');

var grd = ctx.createLinearGradient(0,0,0,480);
grd.addColorStop(0, '#D4C9FF');
grd.addColorStop(1, '#FFDDF0');

ctx.fillStyle = grd;
ctx.fillRect(0, 0, c.width, c.height);

c.addEventListener('click', rain);

function rain()
{
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, c.width, c.height);
}

var chinese = '床前明月光疑是地上霜举头望明月低头思故乡床前明月光疑是地上霜举头望明月低头思故乡';
chinese = chinese.split('');

var font_size = 20;
var columns = c.width/font_size;

var drops = [];
for(var x = 0; x < columns; x++)
	drops[x] = 1;

function draw()
{
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = '#6D6D6D';
  for (var i = 0; i < drops.length; i++)
  {
  	var text = chinese[Math.floor(Math.random()*chinese.length)];
  	ctx.fillText(text, i*font_size, drops[i]*font_size);
  	if(drops[i]*font_size > c.height && Math.random() > 0.975)
  			drops[i] = 0;
  	drops[i]++;
  }
}
  setInterval(draw, 33);