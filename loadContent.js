export function loadQuestions() {
    fetch('questions.json')
        .then(response => response.json())
        .then(questions => {
            const questionsContainer = document.getElementById('questionnaireContainer');
            for (const key in questions) {
                if (questions.hasOwnProperty(key)) {
                    const question = questions[key];
                    const template = createQuestionTemplate(question);
                    questionsContainer.appendChild(template);
                }
            }
        })
    .catch(error => console.log(error));
}

function createQuestionTemplate(question) {  
    const template = document.createElement('div');
    template.classList.add('question');
    template.innerHTML = `
        
        <fieldset id = "${question.number}">
            <legend>${question.questionContent}</legend>
            <input type="radio" name="${question.number}" value="a"><label>${question.a}</label><br>
            <input type="radio" name="${question.number}" value="b"><label>${question.b}</label><br>
            <input type="radio" name="${question.number}" value="c"><label>${question.c}</label><br>
            <input type="radio" name="${question.number}" value="d"><label>${question.d}</label><br>
        </fieldset>
    `;

    return template;
}

