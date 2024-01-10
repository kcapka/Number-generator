
/* 
let userMax = document.getElementById("comments").value
let userN = document.getElementById("winners").value
*/


let answer = document.querySelector(".answer");
let reset = document.querySelector(".reset");
let submit = document.getElementById("submit");
let form = document.querySelector(".form");




function returnAnswer() {
    
    let answerArray = [];
    let userComments = document.getElementById("comments").value;
    
    let userN = document.getElementById("winners").value;

    for (var i = 0; i < userN; i++) {
        let randomNumber = Math.floor(Math.random() * userComments + 1);
        answerArray.push(randomNumber);
    };

    if (userComments != "" && userN != "" && userN > 1) {
        let arrayJoin = answerArray.join(", ");
        document.getElementById("answer").innerHTML = "Your winners are numbers "+ arrayJoin + "!";
    } else if (userComments != "" && userN != "" && userN <= 1) {
        let arrayJoin = answerArray.join(", ");
        document.getElementById("answer").innerHTML = "Your winner is number "+ arrayJoin + "!";
    } else {
        alert("You must answer both prompts!");
    };
    
};

function resetAnswer() {
    document.getElementById("answer").innerHTML = "";
};

submit.addEventListener("click", () => {
    reset.classList.add("active");
    form.classList.add("active");
})

reset.addEventListener("click", () => {
    reset.classList.remove("active");
    form.classList.remove("active");
})











/* for (var i = 0; i < userN; i++) {
    answerArray.push(numberOne());
};  */
