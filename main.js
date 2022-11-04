
function PE(answers, content){
    for (let i = 0; i < content.length; i++) {
        let span = document.createElement('span');
        span.setAttribute('class', 'class name');
        span.setAttribute('id', 'id');
        span.innerText = answers[i];
        content[i].appendChild(span)
    }}
    
result = H5PIntegration['contents']
key = Object.keys(result);
result = JSON.parse(result[key[0]]['jsonContent'])

var textField = result.hasOwnProperty('textField');
var cards = result.hasOwnProperty('cards');
var questions = result.hasOwnProperty('questions');
var question = result.hasOwnProperty('question');
var choices = result.hasOwnProperty('choices');
var sentences = result.hasOwnProperty('sentences');
var paragraphs = result.hasOwnProperty('paragraphs');
var words = result.hasOwnProperty('words');

if(textField){
    var answers = result['textField'].match(/\*(.*?)\*/ig)
    var content = document.getElementsByClassName('h5p-question-introduction');
    content[0].innerText = answers
}
if(cards){
    var answers = result['cards']
    var arr = []
    for (let i = 0; i < answers.length; i++) {
        arr.push(answers[i]['answer']);
    }
    var content = document.getElementsByClassName('h5p-card h5p-animate');
    PE(arr, content)
}
if(questions){
    var answers = result['questions'][0].match(/\*(.*?)\*/ig)
    var content = document.getElementsByClassName('h5p-input-wrapper');
    PE(answers, content)
}
if(choices){
    var answers = result['choices']
    var arr = []
    for (let i = 0; i < answers.length; i++) {
        arr.push(answers[i]['answers'][0]);
    }
    var content = document.getElementsByClassName('h5p-sc-question');
    PE(arr, content)
}
if(sentences){
    var answers = result['sentences']
    var arr = []
    for (let i = 0; i < answers.length; i++) {
        arr.push(answers[i]['text']);
    }
    var content = document.getElementsByClassName('h5p-sentence-description');
    PE(arr, content)
}
if(question){
    var answers = result['question']['task']['dropZones']
    var arr = []
    for (let i = 0; i < answers.length; i++) {
        arr.push(answers[i]['label']);
    }
    var content = document.getElementsByClassName('h5p-dragquestion-introduction');
    PE(arr, content)
}
if(paragraphs){
    var answers = result['paragraphs']
    var content = document.getElementsByClassName('h5p-sort-paragraphs-task-description');
    content[0].innerText = answers
}
if(words){
    var answers = result['words']
    var arr = []
    for (let i = 0; i < answers.length; i++) {
        arr.push(answers[i]['answer']);
    }
    var content = document.getElementsByClassName('h5p-crossword-input-fields-group-wrapper');
    PE(arr, content)
}
