const trees = [
{name:"Björk", image:"images/bjork.jpg"},
{name:"Lind", image:"images/lind.jpg"},
{name:"Rönn", image:"images/rönn.jpg"},
{name:"Lönn", image:"images/lönn.jpg"},
{name:"Alm", image:"images/alm.jpg"},
{name:"Ek", image:"images/ek.jpg"},
{name:"Gran", image:"images/gran.jpg"},
{name:"Tall", image:"images/tall.jpg"}
];

let score = 0;
let current;

const image = document.getElementById("quizImage");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const scoreDiv = document.getElementById("score");

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function newQuestion() {

  current = trees[Math.floor(Math.random()*trees.length)];

  image.src = current.image;

  question.innerText = "Vilket träd är detta?";

  answers.innerHTML = "";

  let options = [current.name];

  while(options.length < 4){
    let choice =
      trees[Math.floor(Math.random()*trees.length)].name;

    if(!options.includes(choice)){
      options.push(choice);
    }
  }

  shuffle(options);

  options.forEach(option => {

    const btn = document.createElement("button");

    btn.innerText = option;

    btn.onclick = () => {

      if(option === current.name){

        score++;
        alert("✅ Rätt!");

      } else {

        alert("❌ Fel! Rätt svar är " + current.name);

      }

      scoreDiv.innerText = "Poäng: " + score;

      newQuestion();
    };

    answers.appendChild(btn);
  });
}

newQuestion();
