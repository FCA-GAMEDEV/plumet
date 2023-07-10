
var RectManager = function(level)//row,column)
{	
	this.count = 0;

	this.color = ["RED","YELLOW","BLUE","LIME"];

	this.rects = new Array();
	
	this.num_rect = 0;
	this.NUM_MAX = 20 * level;

/*
	for (var i = 0; i < row; i++)
	{
		for(var j = 0; j < column; j++)
		{	
			this.rects.push(new Rect(40+(j*51),50+(i*41),50,40,this.color[i%4]));
		}
	}
*/
	
	this.update = function()
	{
		if (this.count++ % 50 == 0)
		{
			this.rects.push(new Rect(
							Math.floor(Math.random()*(graphics.canvas.width-150)),
							graphics.canvas.height + 20,
							150,
							20,
							this.color[Math.floor(Math.random()*4)]));
			this.num_rect++;
		}
	
		for (var i = 0; i < this.rects.length; i++)
		{
			this.rects[i].update();		
		}
	}

	this.draw = function()
	{
		for (var i = 0; i < this.rects.length; i++)
		{
			this.rects[i].draw();
		}
	}	
}