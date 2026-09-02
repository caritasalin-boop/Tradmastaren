const trees = [

{
name:"Björk",
image:"images/bjork-tree.jpg"
},

{
name:"Lind",
image:"images/lind-tree.jpg"
},

{
name:"Rönn",
image:"images/ronn-tree.jpg"
},

{
name:"Lönn",
image:"images/lonn-leaf.jpg"
},

{
name:"Alm",
image:"images/alm-tree.jpg"
},

{
name:"Ek",
image:"images/ek-leaf.jpg"
},

{
name:"Gran",
image:"images/gran-needles.jpg"
},

{
name:"Tall",
image:"images/tall-needles.jpg"
}

];

let score = 0;
let current;

const image = document.getElementById("quizImage");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const scoreDiv = document.getElementById("score");

function shuffle(arr){
return arr.sort(() => Math.random()-0.5);
}

function generateQuestion(){

answers.innerHTML="";

current =
trees[Math.floor(Math.random()*trees.length)];

image.src = current.image;

question.innerText =
"Vilket träd är detta?";

let options=[current.name];

while(options.length<4){

let choice =
trees[Math.floor(Math.random()*trees.length)].name;

if(!options.includes(choice)){
options.push(choice);
}
}

shuffle(options);

options.forEach(option=>{

let btn=document.createElement("button");

btn.innerText=option;

btn.onclick=()=>checkAnswer(option);

answers.appendChild(btn);

});
}

function checkAnswer(answer){

if(answer===current.name){

score++;

scoreDiv.innerText =
"Poäng: " + score;

alert("✅ Rätt!");

}else{

alert(
"❌ Fel! Rätt svar: " + current.name
);

}

generateQuestion();
}

document
.getElementById("nextBtn")
.addEventListener(
"click",
generateQuestion
);

generateQuestion();

if("serviceWorker" in navigator){

navigator.serviceWorker.register("sw.js");

}
