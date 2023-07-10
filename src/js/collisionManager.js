
var CollisionManager = function()
{
	this.ball_vs_screen = function(ball)
	{
		if (ball.go.x - ball.go.w < 0)
		{	
			ball.go.x = ball.go.w;
			ball.speedx *= -1;
			ball.speedRot *= -1;
		}
		else if (ball.go.x + ball.go.w > graphics.canvas.width)
		{	
			ball.go.x = graphics.canvas.width - ball.go.w;
			ball.speedx *= -1;
			ball.speedRot *= -1;
		}
			
		if (ball.go.y - ball.go.w < 0)
		{
			ball.go.y = ball.go.w;
			ball.speedy *= -1;
			ball.speedRot *= -1;
		}
		else if (ball.go.y - ball.go.w > graphics.canvas.height)
		{
			sceneManager.changeScene(1);
		}
	}
	
	this.player_vs_screen = function(player)
	{
		if (player.go.x < 0)
		{	
			player.go.x = 0;
		}
		else if (player.go.x + player.go.w > graphics.canvas.width)
		{	
			player.go.x = graphics.canvas.width - player.go.w;
		}
		
		if (player.go.y + player.go.h < 0 ||
			player.go.y > graphics.canvas.height)
		{
			sceneManager.changeScene(1);
		}		
	}	
	
	this.ball_vs_player = function(ball, player)
	{
		if (ball.go.y < player.go.y + player.go.h)
		{
			if (ball.go.x - ball.go.w < player.go.x + player.go.w &&
				ball.go.x + ball.go.w > player.go.x &&
				ball.go.y - ball.go.w < player.go.y + player.go.w &&
				ball.go.y + ball.go.w > player.go.y)
			{
				if (ball.go.x < player.go.x &&
					ball.speedx > 0)
				{
					ball.speedx *= -1;
				}			
				else if (ball.go.x > player.go.x + player.go.w &&
					ball.speedx < 0)
				{
					ball.speedx *= -1;
				}			
				
				ball.speedy *= -1;
				ball.speedRot *= -1;
			}		
		}
	}
	
	this.ball_vs_rects = function(ball, rects)
	{
		for (var i = 0; i < rects.length; i++)
		{
			if (ball.go.x - ball.go.w < rects[i].go.x + rects[i].go.w &&
				ball.go.x + ball.go.w > rects[i].go.x &&
				ball.go.y - ball.go.w < rects[i].go.y + rects[i].go.w &&
				ball.go.y + ball.go.w > rects[i].go.y)
			{
				ball.speedy *= -1;
				ball.speedRot *= -1;
				
				rects.splice(i,1);
				break;
			}
		}
	}	
	
	this.rects_vs_screen = function(rects)
	{
		for (var i = 0; i < rects.length; i++)
		{
			if (rects[i].go.y + rects[i].go.h < 0)
			{
				rects.splice(i,1);
				//console.log("morreu: " + i + " size: " +  rects.length)
			}
		}
	}
	
	this.player_vs_rects = function(player, rects)
	{
		var up = false; 
		
		for (var i = 0; i < rects.length; i++)
		{
			if (player.go.y + player.go.h < rects[i].go.y + rects[i].go.h)
			{
				if (player.go.x               < rects[i].go.x + rects[i].go.w &&
					player.go.x + player.go.w > rects[i].go.x                 &&
					player.go.y               < rects[i].go.y + rects[i].go.h &&
					player.go.y + player.go.h > rects[i].go.y)
				{
					player.go.y = rects[i].go.y - player.go.h;
					up = true;
					break;
				}
			}
		}
		
		if (up)
		{
			player.speedy = rects[0].speedy;
		}
		else
		{
			player.speedy = player.GRAVITY;
		}
	}	
}

var collisionManager = new CollisionManager();





