

var scores,roundScore,activePlayer,isgameactive;
init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(isgameactive){
        var dice=Math.floor(Math.random()*6)+1;
        var diceDOM=document.querySelector('.dice');
        diceDOM.style.display='block';
        diceDOM.src='dice-'+dice+'.png';
        
        if(dice!==1){
            roundScore+=dice;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }else{
            next();
        }
    }
    
})

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(isgameactive){
        scores[activePlayer]+=roundScore;
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
        
        if(scores[activePlayer]>=100){
            isgameactive=false;
            document.querySelector('#name-'+activePlayer).textContent='Winner!!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        }else{
            next();
        }
    }
    
    
});

document.querySelector('.btn-new').addEventListener('click',init);

function next(){
    activePlayer == 0 ? activePlayer =1 : activePlayer = 0;
        document.querySelector('#current-0').textContent=0;
        document.querySelector('#current-1').textContent=0;
        roundScore=0;
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display='none';

}

function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    isgameactive=true;
    document.querySelector('.dice').style.display='none';
    document.querySelector('#score-0').textContent=0;
    document.querySelector('#score-1').textContent=0;
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('#name-0').textContent='PLAYER 1';
    document.querySelector('#name-1').textContent='PLAYER 2';
}


document.querySelector('.btn-close').addEventListener('click',function(){
    document.querySelector('.wrapper1').style.display='none';
})