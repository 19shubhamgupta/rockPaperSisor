let choice = document.querySelectorAll(".choice");
let user = document.querySelectorAll("  .you");
let comp = document.querySelectorAll(".comp");
let msg = document.querySelectorAll(" .msg ");



let userScore = 0;
let compScore = 0;
choice.forEach((val) => {
    val.addEventListener("click", () => {
        const userChoice = val.innerText;
        console.log("userChoice =", userChoice);
        let options = ["Rock", "Paper", "Sisor"];
        let i = Math.floor(Math.random() * 3);
        let compChoice = options[i];
        console.log("compChoice =", compChoice)
        if (userChoice === compChoice)
        msg[0].innerText =`${userChoice} cancels ${compChoice}`
        else if (compChoice==="Rock"){
            if( userChoice==="Paper")
            {
                userScore++;
                msg[0].innerText =`${userChoice} beats ${compChoice}`

            }
            else{
                compScore++;
                msg[0].innerText =`${compChoice} beats ${userChoice}`
            }
        }
        else if (compChoice==="Paper"){
            if( userChoice==="Sisor")
            {
                userScore++;
                msg[0].innerText =`${userChoice} beats ${compChoice}`
            }
            else{
                compScore++;
                msg[0].innerText =`${compChoice} beats ${userChoice}`
            }
        }
        else if (compChoice==="Sisor"){
            if( userChoice==="Rock")
            {
                userScore++;
                msg[0].innerText =`${userChoice} beats ${compChoice}`
            }
            else{
                compScore++;
                msg[0].innerText =`${compChoice} beats ${userChoice}`;
            }
        }
        
        user[0].innerText = `${userScore}\nYou`
        comp[0].innerText = `${compScore}\nComputer`
        

});
});

//  const compChoice = ()=>{
//     let options=["Rock","Paper","Sisor"];
//    let i = Math.floor(Math.random()*3);
//    return options[i];
// }

//  playGame= (compChoice)=>{
//     if(userChoice===compChoice)
//     console.log('tie');
// else(
//     console.log("bla")
// )

// console.log(compChoice);
//  }
//  playGame();