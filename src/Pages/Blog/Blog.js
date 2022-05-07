import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Blog = () => {
  return (
    <div>
      <PageTitle title="Blog"></PageTitle>
       <h2 className='text-center mt-2'>QN Section</h2>
      <CardGroup>
        <Card className='d-flex text-center bg-secondary mt-4'>
          <Card.Body>
            <Card.Title className='fs-6 bg-light text-center w-50 mx-auto'>Difference Between Javascript And Node JS</Card.Title>
            <Card.Text className='text-white d-flex justify-content-center'>
              <div>
                <h4>Javascript</h4>
                <p>Javascript is a programming language that is used for writing scripts on the website.
                  Javascript can only be run in the browsers.
                  It is basically used on the client-side.
                  Javascript is capable enough to add HTML and play with the DOM.
                </p>
              </div>
              <div>
                <h4>Node JS</h4>
                <p>NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJSIt is mostly used on the server-side.Nodejs does not have capability to add HTML tags.</p>
              </div>
            </Card.Text>
            <Card.Title className='fs-6 bg-light text-center  w-50 mx-auto'>When should you use Node JS and when should you use MongoDb?</Card.Title>
            <Card.Text className='text-white'>
              Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

              So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it. <br />
              <br />
              If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database.

            </Card.Text>
            <Card.Title className='fs-6 bg-light text-center  w-50 mx-auto'>Difference Between SQL and NO SQL database </Card.Title>
            <Card.Text className='text-white d-flex justify-content-center'>
              <div>
                <h4>SQL</h4>
                <p>These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Follows ACID property.</p>
              </div>
              <div>
                <h4>NoSQL</h4>
                <p>They have dynamic schema.These databases are best suited for hierarchical data storage.These databases are not so good for complex queriesFollows CAP(consistency, availability, partition tolerance).</p>
              </div>
            </Card.Text>
            <Card.Title className='fs-6 bg-light text-center  w-50 mx-auto'>What is the purpose of JWT and how does it work??</Card.Title>
            <Card.Text className='text-white'>
            JWT is a standard which helps the services(typically backend micro-services) to recognise a user and provide them the access to the resources which they are interested in. The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
            <br />
            JWTs are mainly used for authentication. After a user signs in to an application, the application then assigns JWT to that user. Subsequent requests by the user will include the assigned JWT. This token tells the server what routes, services, and resources the user is allowed to access.
            </Card.Text>
          </Card.Body>

        </Card>

      </CardGroup>
    </div>
  );
};

export default Blog;