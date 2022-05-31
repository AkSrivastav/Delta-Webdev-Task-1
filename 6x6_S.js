let computer=[],human=[],level=0;
tiles=['r1c1', 'r1c2', 'r1c3', 'r1c4','r1c5','r1c6','r2c1','r2c2','r2c3','r2c4','r2c5','r2c6','r3c1','r3c2','r3c3','r3c4','r3c5','r3c6','r4c1','r4c2','r4c3','r4c4','r4c5','r4c6','r5c1','r5c2','r5c3','r5c4','r5c5','r5c6','r6c1','r6c2','r6c3','r6c4','r6c5','r6c6'];
temp=new Array(36).fill(0);
seqflag=new Array(36).fill(0);
const start=document.querySelector('.js-start');
start.addEventListener('click',startGame);
const info=document.querySelector('.js-info');
const heading=document.querySelector('.js-heading');
const tileBox=document.querySelector('.js-box');
const display=document.querySelector('.display');
const highscore=document.querySelector('.highscores');
function startGame(){
  

 Name=prompt("Please Enter your name");
 number=Math.floor(Math.random()*100000000000);;
 Guest="Guest_User_"+String(number);
 
  console.log(Guest);
  
 
 console.log("Your name is",Name);
 guest=false;
letter=false;
if (Name=="null" || Name==null) Name=Guest;
else if(Name.length==0)
Name=Guest;
else{ 
 for(i=0;i<Name.length;i++)
if(Name[i]>=65 && Name[i]<=90||Name[i]>=97 && Name[i]<=122||Name[i]>=48 && Name[i]<=57)
{letter=true; continue;}
else if(Name[i]=="\n")guest=true; 
len_name=Name.length;
 

 if(guest)Name=Guest;
  
} 
 
rem="";
uiu="";
if(Object.keys(localStorage).includes(Name) && Name!="Guest_User")
{rem="Again"; uiu=" Try to Play better this time!";}
comma=",";
comma1="";
if(rem=="")
comma1="!";

display.textContent="Welcome "+rem+comma+Name+comma1+uiu;  
console.log("Game started");
start.classList.add('hidden');
info.classList.remove('hidden');
info.textContent="Computer's Turn";
nextRound();
}

function nextRound(){
if(level==36){
var names=Object.keys(localStorage);
 local=level*10
  localStorage.setItem(Name,local);
console.log("Win!");
temp=new Array(36).fill(0);}
level+=1;
tileBox.classList.add('unclickable');
info.textContent="Computer's Turn";
heading.textContent = `Level ${level} of 36\nCURR_SCORE:${level*10 - 10}`;
const next = [...computer];
next.push(nextStep());
computer=[...next];
playRound(next);
setTimeout(()=>{humanTurn(level);},
level * 1000+500);
}

function nextStep(){
console.log("Returning random\nLevel ",level,"Starting...");
while(true){
 ran_index=Math.floor(Math.random()*tiles.length);
if(seqflag[ran_index]==0){seqflag[ran_index]=1;break;}}
console.log(tiles[ran_index]);
return tiles[ran_index];
}

function playRound(next){
  next.forEach((t, index) => {
    setTimeout(() => {
      activateTile(t);
    }, (index+1)*600);
  });
}

function activateTile(t){
  console.log("Tiles Glowing");
const tile = document.querySelector(`[data-tile='${t}']`);
tile.classList.add('activated');
setTimeout(()=>{tile.classList.remove('activated');},300);
}

function humanTurn(level) {
temp = new Array(36).fill(0);
console.log("Your turn");
tileBox.classList.remove('unclickable');
info.textContent=`Your turn`;
}

tileBox.addEventListener('click',event =>{
 const {tile}=event.target.dataset;
console.log("i am",tile);
  if (tile) handleClick(tile);
});

function handleClick(tile){
  console.log("inside handleclick");
  human.push(tile);
  curr_index=human.length-1;
 if(human[curr_index]!==computer[curr_index]){   var names=Object.keys(localStorage);
  local=level*10-10;
  if(names.includes(Name))
{ var value=localStorage.getItem(Name);
  if(local>value)
  localStorage.setItem(Name,local);
  
  ans=Math.max(local,value);

  
  }
 else{
 localStorage.setItem(Name,local);}
    
resetGame(`Better luck Next Time! Game over, you pressed the wrong tile/repeated tile,Your Score is ${10*level-10} `); 
  //info.textContent="Click to Play Again";
ans=Math.max(level*10,localStorage.getItem(Name));
//if(ans==local) 
//display.textContent="Congrats U improved Yourself!Hope u enjoyed the Game!";
//else
if(ans==350)
display.textContent="You really have very Shard Mind GG!,Try once but this time with timer";
else
display.textContent="Game Over!Hope u enjoyed the Game!";
heading.textContent = `${Name}'s High score:${ans} and This time score:${local}`;
    console.log('You has pressed incorrect tile/ repeated tile henceGame over!');
    return;}
  if (human.length==computer.length) {
  
//info.textContent="Click to Play Again";
   
    if (human.length==36) {
      resetGame('nothing');
      return;}human=[];
    setTimeout(() => {nextRound();},1000);return;}
    info.textContent=`Your turn`;
}

function resetGame(text){
//alert(text);
seqflag=new Array(36).fill(0);
computer=[];human=[];
level=0;
start.classList.remove('hidden'); 
info.classList.add('hidden');
tileBox.classList.add('unclickable');}
