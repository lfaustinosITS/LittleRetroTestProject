export function loadResponses() {
    fetch('responses.json')
        .then(response => response.json())
        .then(data => {
            const responsesContainer = document.getElementById('responses');
            responsesContainer.innerHTML = '';
            const result = data[0][rightAnswer()];
            const resultText = document.createElement('p');
            resultText.textContent = result;
            responsesContainer.appendChild(resultText);
        })
    .catch(error => console.log(error));
}

function answerTest(responses,array){
    for (let i=0;i<5;i++){
        if (responses[i].answer!==array[i]){return false;}
    }
    return true


}
function rightAnswer(){
    const answers=saveResponses();
    const samantha=["d","d","d","c","a"];
    if (answerTest(answers,samantha)){
        return 'sam';
    }
    else{ 
        return getMostRepeatedOption(countResponses(answers));
    }
}

function saveResponses() {
    const questions = document.getElementsByClassName('question');
    const responses = [];
    for (const question of questions) {
        const questionNumber = question.querySelector('fieldset').getAttribute('id');
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            const response = {
            question: questionNumber,
            answer: selectedOption.value
            };
            responses.push(response);

        }
    }
    return responses
}
function countResponses(responses) {
    const counts = {
        a: 0,
        b: 0,
        c: 0,
        d: 0
    };
    for (const response of responses) {
        const answer = response.answer;
        if (answer in counts) {
        counts[answer]++;
        }
    }
    return counts;
}
function getMostRepeatedOption(counts) {
    const options = Object.keys(counts);
    let maxCount = 0;
    let mostRepeatedOption = '';
    for (const option of options) {
        const count = counts[option];
        if (count > maxCount) {
            maxCount = count;
        } 
    }    
    for (const opt of options){
        const coun = counts[opt];    
        if (coun === maxCount) {
        mostRepeatedOption+=opt;
        }
    }
    return mostRepeatedOption;
}


