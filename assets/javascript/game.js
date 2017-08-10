
		    
		      	
		      	var randomCompNumber = 0;
		      	var userTotal = 0;
		      	var randomCrysRed = 0;
		      	var randomCrysBlue = 0;
		      	var randomCrysYellow = 0;
		      	var randomCrysGreen = 0;
		      	var numOfWins = 0;
		      	var numOfLosses = 0;

			    function newGame() {
			     	randomCompNumber = 0;
			      	randomCrysNum1 = 0;
			      	randomCrysNum2 = 0;
			      	randomCrysNum3 = 0;
			      	randomCrysNum4 = 0;

			        randomCompNumber = Math.floor(Math.random() * 102) + 19;
			        $("#comp-text").html(randomCompNumber);
			        randomCrysRed = Math.floor(Math.random() * 12) + 1;
			        randomCrysBlue = Math.floor(Math.random() * 12) + 1;
			        randomCrysYellow = Math.floor(Math.random() * 12) + 1;
			        randomCrysGreen = Math.floor(Math.random() * 12) + 1;
				}

				$("#crystalRed").click(function() {
					userTotal = (userTotal + randomCrysRed);
					$("#user-text").html(userTotal);
					chkWin();
				});

				$("#crystalBlue").click(function() {
 					userTotal = (userTotal + randomCrysBlue);
 					$("#user-text").html(userTotal);
 					chkWin();
				});

				$("#crystalYellow").click(function() {
 					userTotal = (userTotal + randomCrysYellow);
 					$("#user-text").html(userTotal);
 					chkWin();
				});

				$("#crystalGreen").click(function() {
 					userTotal = (userTotal + randomCrysGreen);
 					$("#user-text").html(userTotal);
 					chkWin();
				});

				function chkWin() {
					var user = parseInt($("#user-text").html());
					var comp = parseInt($("#comp-text").html());
					if (user === comp) {   
						numOfWins++;
						$("#wins-text").html(numOfWins);
						userTotal = 0;
						$("#user-text").html(userTotal);
						newGame();
					} 
					if (user > comp) {
						numOfLosses++;
						$("#losses-text").html(numOfLosses);
						userTotal = 0;
						$("#user-text").html(userTotal);
						newGame();
					}
				}
				newGame();
	      	