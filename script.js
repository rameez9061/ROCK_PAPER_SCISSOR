// ---------------------------Accessing the moves of the game----------------------------------------

let computer = document.querySelectorAll(".comp");
computer = Array.from(computer);
let user = document.querySelectorAll(".circle");
user = Array.from(user);

// ------------------------Accessing the score board-------------------------------------------\

let compscore = document.getElementById("compscore");
let userscore = document.getElementById("userscore");


// ---------------------The computer score will be increased--------------------------------

let compscore_increase = () => {
  let coscore = 0;
  coscore++;

  compscore.innerHTML = coscore;

  console.log("increase has been done ");
};

// ------------------------The user score will be increased-----------------------------------------

let userscore_increase = () => {
  let usscore = 0;
  usscore++;
  userscore.innerHTML = usscore;
};

// ---------------------------------Children of the user moves ---------------------------------------------
let rock = user[0];
let paper = user[1];
let scissor = user[2];

// ----------------------------Generating a move for computer by Randomly----------------------------------------


let generate = Math.floor(Math.random() * 3);
console.log(generate);
let comp = computer[generate];

// -------------------------------making a draw function-------------------------------------------------------------

let draw =()=>{

      let ban = "Draw";
      compscore.style.fontSize = "2vw";
      compscore.innerHTML = ban;
      userscore.style.fontSize = "2vw";
      userscore.innerHTML = ban;
}

rock.addEventListener("click", () => {
  rock.style.transform = "translateX(5vw)";
  console.log("clicked");
  comp.style.transform = "translateX(5vw)";
  console.log(generate);
  if (generate === 1) {
    compscore_increase();
    console.log("paper");
    console.log(generate);
  }
  else if(generate === 0){

       draw();
  }
  else{

     userscore_increase()
  }
});

paper.addEventListener("click", () => {
  paper.style.transform = "translateX(5vw)";
  console.log("clicked");
  comp.style.transform = "translateX(5vw)";
  if (generate === 2) {
    compscore_increase();
    console.log("paper");
    console.log(generate);
  }
  else if(generate === 1){

       draw();
  }
  else{

     userscore_increase()
  }
});

scissor.addEventListener("click", () => {
  scissor.style.transform = "translateX(5vw)";
  console.log("clicked");
  comp.style.transform = "translateX(5vw)";
  if (generate === 0) {
    compscore_increase();
    console.log("paper");
    console.log(generate);
  }
  else if(generate === 2){

       draw();
  }
  else{

     userscore_increase()
  }
});


let refresh = document.getElementById("refresh");

refresh.addEventListener("click",()=>{

      location.reload()
})
