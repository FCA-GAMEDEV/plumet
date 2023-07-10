
var Congrats = function()
{
	//this.count = 0;
	
	this.update = function()
	{
		//if (this.count++ > 250)
		//{
		//	sceneManager.changeScene(0);
		//}
	}
	
	this.draw = function()
	{
		graphics.clear();
		
		graphics.drawRect(0,0,graphics.canvas.width,graphics.canvas.height,"yellow");
	
		graphics.drawText("CONGRATULATIONS", 20, 300, "75px Arial", "black");		
	}
}