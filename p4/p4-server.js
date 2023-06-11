const fs = require("fs");
const fastify = require("fastify")();

const imp = require('./p4-data.js');
const data = imp.data;
const {getAnswers, getQuestionsAnswers, getQuestions, getQuestion, getQuestionAnswer} = require('./p4-module.js');

const hostname = '127.0.0.1';
const port = 8080;

/*
Route: /cit/question
Description: Return all questions
*/

fastify.get('/cit/question', (request, reply) => {
    const q = getQuestions()
    try {
        reply.send({
          'error': "",
          statusCode: 200,
          "questions": q
        });
      } catch (err) {
        reply.send({
          data: null,
          statusCode: 500,
          message: 'Internal Server Error',
          error: err.message
        });
      }
  });

/*
Route: /cit/answer
Description: Return all questions
*/

fastify.get('/cit/answer', (request, reply) => {
    const answers = getAnswers();
    try {
        reply.send({
          'error': "",
          statusCode: 200,
          "answers": answers
        });
      } catch (err) {
        reply.send({
          data: null,
          statusCode: 500,
          message: 'Internal Server Error',
          error: err.message
        });
      }
  });

  fastify.get('/cit/questionanswer', (request, reply) => {
    const qna = getQuestionsAnswers();
    try {
        reply.send({
          'error': "",
          statusCode: 200,
          "questions_answers": qna
        });
      } catch (err) {
        reply.send({
          data: null,
          statusCode: 500,
          message: 'Internal Server Error',
          error: err.message
        });
      }
  });

  fastify.get('/cit/question/:number', (request, reply) => {
    const {number} = (request.params);
    const query = getQuestion(number);
    try {
        reply.send({
          'error': "",
          statusCode: 200,
          "answers": query
        });
      } catch (err) {
        reply.send({
          data: null,
          statusCode: 500,
          message: 'Internal Server Error',
          error: err.message
        });
      }
  });

  fastify.get('/cit/questionanswer/:number', (request, reply) => {
    const {number} = (request.params);
    const query = getQuestionAnswer(number);
    try {
        reply.send({
          'error': "",
          statusCode: 200,
          "answers": query
        });
      } catch (err) {
        reply.send({
          data: null,
          statusCode: 500,
          message: 'Internal Server Error',
          error: err.message
        });
      }
  });


  fastify.get('/*', (request, reply) => {
    reply.send(
        {
            "error": "Route not found",
            statusCode: 404
        }
    )
  });


  fastify.listen({port: port, hostname: hostname}, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  });