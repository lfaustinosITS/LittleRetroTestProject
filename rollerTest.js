import {loadQuestions} from "./loadContent.js";
import {loadResponses} from "./analyzeResponses.js";





//Initialize App
function initializeApp() {
    loadQuestions();
}
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', loadResponses);
initializeApp();
