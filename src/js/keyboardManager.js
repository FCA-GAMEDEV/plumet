
var KeyboardManager = function()
{
	this.keydown = function(e)
	{
		switch (e.keyCode)
		{
			case 37:
				if (sceneManager.currentScene == "game")
				{
					sceneManager.keyLeft = true;
				}
				break;		
				
			case 39:
				if (sceneManager.currentScene == "game")
				{
					sceneManager.keyRight = true;
				}
				break;					
		}
	}
	
	this.keyup = function(e)
	{
		switch (e.keyCode)
		{
			case 13:
				switch (sceneManager.currentScene)
				{
					case "opening":
						sceneManager.changeScene(0);
						break;
				}
				break;
				
			case 27:
				switch (sceneManager.currentScene)
				{
					case "congrats":
					case "gameover":
						sceneManager.changeScene(0);
						break;
				}
				break;			
				
			case 37:
				if (sceneManager.currentScene == "game")
				{
					sceneManager.keyLeft = false;
				}
				break;					
				
			case 39:
				if (sceneManager.currentScene == "game")
				{
					sceneManager.keyRight = false;
				}
				break;						
		}		
	}
}

var keyboard = new KeyboardManager();

document.addEventListener('keydown', keyboard.keydown, true);	
document.addEventListener('keyup', keyboard.keyup, true);
	