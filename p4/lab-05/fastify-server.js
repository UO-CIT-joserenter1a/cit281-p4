const fs = require("fs");
const fastify = require("fastify")();

const hostname = '127.0.0.1';
const port = 8080;

const students = [
    {
      id: 1,
      last: "Renteria",
      first: "Jose",
    },
    {
      id: 2,
      last: "Macalinao",
      first: "Joseph",
    },
    {
      id: 3,
      last: "Hellman",
      first: "Carson",
    }
  ];


/*
 *  /cit/student: return all students and a 200 status code 
 *  from the students array to be defined in the next part of the lab
 */

fastify.get('/cit/student', (request, reply) => {


    reply
        .code(200)
        .header('Content-Type', 'application/json')
        .send(students)
  });

  /*
  /cit/student/:id: return a single student if the student exists based 
   on the id and a 200 status code from the students array to be defined
   in the next part of the lab, or Not Found and a 404 status code.
  */
   fastify.get('/cit/student/:id', (request, reply) => {


    const id = Number(request.params.id);
    const student = students.find(i => i.id === id);

    if(student)
    {
        reply
            .code(200)
            .send(student)
    }
    else 
    {
        reply 
            .code(404)
            .send({error: 'Not found'});
    }
  });

  // unmatched route handler
  fastify.get('/*', (request, reply) => {
    reply
    .code(500)
    .header('Content-Type', 'application/json')
    .send(`Unmatched Route`);
  });


  fastify.post('/cit/student', (request, reply) =>
  {
    const {last, first} = request.body;
    const id = students.length + 1;
    const student = {id, first, last}
    students.push(student);

    reply
        .code(200)
        .send(student)
  }
  
  )

  fastify.listen({port: port, hostname: hostname}, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  });