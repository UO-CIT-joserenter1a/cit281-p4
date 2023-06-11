const mod = require('./p4-data.js')
const data = mod.data;

function getQuestions()
{
    return ['Q1', 'Q2', 'Q3']
}

function getAnswers()
{
    return ['A1', 'A2', 'A3']
}

function getQuestionsAnswers()
{
    return data.map(obj => ({...obj}));
}

function getQuestion(number = "") {
  
    const index = parseInt(number) - 1;
    let error = "";
    if (isNaN(index))
    {
        error = `Question number must be an integer`
    }
    else if(index < 0)
    {
        error = `Question number must be >= 1`
    }
    else if (index >= data.length)
    {
        error =  `Question number must be less than the number of questions (3)`

    }
    else
    {
        error = "";
    }

  
    const question = error ? "" : data[index].question;
    const questionNumber = error ? "" : index + 1;
  
    return {errorMessage: error, question, number: questionNumber};
  }
  

function getAnswer(number = "")
{
    const questionNumber = parseInt(number);
    const obj = data[questionNumber - 1];
    const index = parseInt(number) - 1;
    let error = "";

    if (isNaN(index))
    {
        error = `Question number must be an integer`
    }
    else if(index < 0)
    {
        error = `Answer number must be >= 1`
    }
    else if (index >= data.length)
    {
        error =  `Answer number must be less than the number of questions (3)`

    }
    else
    {
        error = "";
    }

    if (obj) {
      return { errorMessage: error, answer: obj.answer, number: questionNumber };
    } else {
      return { errorMessage: error, answer: "", number: error ? "" : index + 1  };
    }
}

function getQuestionAnswer(number = "")
{
    const questionNumber = parseInt(number);
    const obj = data[questionNumber - 1];
    const index = parseInt(number) - 1;

    let error = "";

    if (isNaN(index))
    {
        error = `Question number must be an integer`
    }
    else if(index < 0)
    {
        error = `Question number must be >= 1`
    }
    else if (index >= data.length)
    {
        error =  `Question number must be less than the number of questions (3)`

    }
    else
    {
        error = "";
    }

    if (obj) {
      return {errorMessage: error, question: obj.question, number: questionNumber, answer: obj.answer};
    } else {
      return {errorMessage: error, question: "", number: error ? "" : index + 1, answer: ""};
    }
}

/*****************************
  Module function testing
******************************/
function testing(category, ...args) 
{
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = true;
  const testGetAs = true;
  const testGetQsAs = true;
  const testGetQ = true;
  const testGetA = true;
  const testGetQA = true;
  const testAdd = true;      // Extra credit
  const testUpdate = true;   // Extra credit
  const testDelete = true;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

  module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
  };