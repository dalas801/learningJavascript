/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var diceDom,score,current,activenumber,playing;
init();

function init(){
	document.querySelector('.dice').style.display='none';
score=[0,0];
current =0;
activenumber=0;
playing=true;
document.getElementById("current-0").textContent=0;
document.getElementById("current-1").textContent=0;
document.getElementById("score-0").textContent=0;
document.getElementById("score-1").textContent=0;
diceDom=document.querySelector('.dice');
document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.btn-hold').style.pointerEvents='auto';
	document.querySelector('.btn-roll').style.pointerEvents='auto';
	document.querySelector('.btn-roll').style.color='black';
	document.querySelector('.btn-hold').style.color='black';
}
function next(){
	activenumber!==0?activenumber=0:activenumber=1;
	document.getElementById("current-0").textContent=0;
document.getElementById("current-1").textContent=0;
current =0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	
	diceDom.style.display='none';
}
document.querySelector('.btn-roll').addEventListener('click',function () {
	if(playing){
	
	
	diceDom.style.display='block';
	


	var diceRandom=Math.floor(Math.random()*6 +1);
diceDom.src="dice-"+diceRandom+".png";
	if(diceRandom!==1){
	current += diceRandom;
	// display
	document.getElementById("current-"+ activenumber).textContent=current;

}
else{
	next();
}
}

});
document.querySelector('.btn-hold').addEventListener('click',function(){
	if(playing){

	score[activenumber]+=current;
document.querySelector('#score-'+ activenumber).textContent=score[activenumber];
if(score[activenumber]>=20){
	playing=false;
	document.querySelector('.btn-hold').style.pointerEvents='none';
	document.querySelector('.btn-roll').style.pointerEvents='none';
	document.querySelector('.btn-roll').style.color='#c2c2c2';
	document.querySelector('.btn-hold').style.color='#c2c2c2';
	document.querySelector('.btn-hold').click(false);
document.querySelector('#score-'+ activenumber).textContent='WINER!';
	document.querySelector('.player-'+activenumber+'-panel').classList.add('winner');
	document.querySelector('.player-'+activenumber+'-panel').classList.remove('active');
}
else{
	next();
}

}
});
document.querySelector('.btn-new').addEventListener('click',init);

