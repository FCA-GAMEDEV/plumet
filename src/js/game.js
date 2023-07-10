
var Game = function(level)
{
	this.player = new Player(390,50,20,50);
	//this.ball = new Ball(375,450,20,20);
	
	this.rectManager = new RectManager(level,14);
	
	sceneManager.keyLeft = false;
	sceneManager.keyRight = false;
	
	this.update = function()
	{
		if (this.rectManager.num_rect >= this.rectManager.NUM_MAX)
		{
			sceneManager.changeScene(0);
		}

		this.player.update();
		//this.ball.update();		
		
		//this.player.ia(this.ball);
		
		this.rectManager.update();
		
		collisionManager.player_vs_screen(this.player);
		//collisionManager.ball_vs_screen(this.ball);
		//collisionManager.ball_vs_player(this.ball, this.player);
		//collisionManager.ball_vs_rects(this.ball, this.rectManager.rects);
		collisionManager.rects_vs_screen(this.rectManager.rects);
		collisionManager.player_vs_rects(this.player, this.rectManager.rects);
	}
	
	this.draw = function()
	{
		//graphics.clear();
		
		graphics.drawRect(0,0,graphics.canvas.width,graphics.canvas.height,"black");
		
		graphics.drawText("LEVEL 0" + level , 175, 300, "100px Arial", "white");	
		
		this.player.draw();
		//this.ball.draw();	

		this.rectManager.draw();
	}
}