const userInput = []
var i = 1;

//SCORES
var score1 = 0,
    score2 = 0,
    score3 = 0,
    score4 = 0,
    score5 = 0;

const questions = {
    "question1": {
        question: "<h3>What's your SpO2 level?</h3>",
        options: `<select>
        <option value="A"> 80-85 </option>
        <option value="B"> 85-90 </option>
        <option value="C"> 90-95 </option>
        <option value="D"> 95-100 </option>
        </select>`
    },
    "question2": {
        question: "<h3> What's your Pulse Rate? </h3>",
        options: `<select>
        <option value="A"> 50-70 </option>
        <option value="B"> 70-90 </option>
        <option value="C"> 90-110 </option>
        <option value="D"> >=110 </option>
        </select>`
    },
    "question3": {
        question: "<h3>Common Symptoms</h3>",
        options: `
        <input type="checkbox" id="option1" name="option1" value="A">
        Chest Pain / Fever 
        <input type="checkbox" id="option2" name="option2" value="B">
        Cough / Weight Loss
        <input type="checkbox" id="option3" name="option3" value="C">
        Loss of Smell / Diarrhea`
    }
}

function startQuiz() {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("question").innerHTML = questions["question" + i].question;
    document.getElementById("options").innerHTML = questions["question" + i].options;
    document.getElementById("next").style.visibility = "visible";
}

function nextQuestion() {
    i++;
    userInput.push(document.getElementById("options").firstElementChild.value);
    document.getElementById("question").innerHTML = questions["question" + i].question;
    document.getElementById("options").innerHTML = questions["question" + i].options;
    if (i == 3) {
        document.getElementById("submit").style.visibility = "visible";
        document.getElementById("next").style.visibility = "hidden";
    }
}

function processInput() {
    const options3 = [];
    const collection = document.getElementById("options").children;
    for (var i = 0; i < collection.length; i++) {
        if (collection[i].checked) options3.push(1);
        else options3.push(0);
    }
    userInput.push(options3);
    
    switch (userInput[0]) {
        case 'A': {
            score1 += 20;
            break;
        }
        case 'B': {
            score2 += 20;
            break;
        }
        case 'C': {
            score3 += 20;
            break;
        }
        case 'D': {
            score4 += 20;
            break;
        }
    }
    switch (userInput[1]) {
        case 'A': {
            score1 += 20;
            break;
        }
        case 'B': {
            score2 += 20;
            break;
        }
        case 'C': {
            score3 += 20;
            break;
        }
        case 'D': {
            score4 += 20;
            break;
        }
    }

    if (userInput[2][0] == 1) {
        score1 += 10;
    }
    if (userInput[2][1] == 1) {
        score2 += 10;
    }
    if (userInput[2][2] == 1) {
        score3 += 10;
    }


    document.getElementById("question").innerHTML = `${score1},${score2},${score3},${score4},${score5}`
    document.getElementById("options").style.visibility = "hidden";
    document.getElementById("submit").style.visibility = "hidden";
    document.getElementById("question").innerHTML = `You have ${score1}% chances of COPD <br> 
    ${score2}% chances of Asthma <br>
    ${score3}% chance of Tuberculosis <br>
    ${score4}% chance of Covid-19 <br>
    ${score5}% chance of Pneumonia <br>
    <br> PLEASE TAKE CARE!`
    userInput.length = 0
}