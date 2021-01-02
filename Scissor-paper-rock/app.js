let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result>p");
const rock_div=document.getElementById("rock");
const scissors=document.getElementById("scissors");
const paper=document.getElementById("paper");

function getComputerChoice()
    {
        const choices=['r','p','s'];
        const randomNumber=Math.floor(Math.random()*3);
        return choices[randomNumber];
    }
    function convertToWord(text)
    {
        if(text==="r") return "Rock";
        if(text==="s") return "Scissors";
        return "Paper";
    }
    function win(user,computer){
        userScore++;
        userScore_span.innerHTML=userScore;
        computerScore_span.innerHTML=computerScore;
        result_div.innerHTML=convertToWord(user)+" beats "+convertToWord(computer)+". YOU WIN!!!!.";
        
        document.getElementById(convertToWord(user).toLowerCase()).classList.add("green-glow");

        setTimeout(function(){ document.getElementById(convertToWord(user).toLowerCase()).classList.remove("green-glow");},500)
        
    }
    function lose(user,computer){
         computerScore++;
        userScore_span.innerHTML=userScore;
        computerScore_span.innerHTML=computerScore;
        result_div.innerHTML=convertToWord(computer)+" beats "+convertToWord(user)+". YOU LOSE!!!!.";
    }
    function draw(user,computer){
         
        userScore_span.innerHTML=userScore;
        computerScore_span.innerHTML=computerScore;
        result_div.innerHTML="DRAW";
    }
    
    function game(userChoice){
        const computerChoice=getComputerChoice();
        
       switch(userChoice+computerChoice)
       {
           case "rs":
           case "pr":
           case "sp":
                console.log("user wins");
                win(userChoice,computerChoice);
                break;
            case "rp":
            case "ps":
            case "sr":
                console.log("USER LOSES");
                lose(userChoice,computerChoice);
                break;
            case "rr":
            case "pp":
            case "ss":
                console.log("its draw");
                draw(userChoice,computerChoice);
                break;
       }


    }

    function main(){
        rock_div.addEventListener('click',function(){
            game("r");
        })
        paper.addEventListener('click',function(){
            game("p");
        })
        scissors.addEventListener('click',function(){
            game("s");
        })
    }

    main();
