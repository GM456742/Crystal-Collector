var computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
var winCount = 0;
var loseCount = 0;
var bead1Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var bead2Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var bead3Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var bead4Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var userTotalScore = 0;


function shuffleCrystalValues(){
	bead1Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	bead2Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	bead3Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	bead4Choice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}


function gamePlay(){
	if(userTotalScore === computerChoice){
		winCount++;
		$('#win-counter').text(winCount);
		$('#win-or-lose').text('You win!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		shuffleCrystalValues();
	} else if(userTotalScore > computerChoice){
		loseCount++;
		$('#loss-counter').html(loseCount);
		$('#win-or-lose').text('You lose!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		shuffleCrystalValues();
	}
}



$('#random-number').text(computerChoice);



$('#bead1').on('click', function(){
	userTotalScore += bead1Choice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$('#bead2').on('click', function(){
	userTotalScore += bead2Choice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$('#bead3').on('click', function(){
	userTotalScore += bead3Choice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$('#bead4').on('click', function(){
	userTotalScore += bead4Choice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});















