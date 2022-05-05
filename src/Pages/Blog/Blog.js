import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
           <CardGroup>
  <Card className='d-flex'>
    <Card.Body>
      <Card.Title className='fs-2 bg-dark'>Difference Between Javascript And Node JS</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
   
  </Card>
  
</CardGroup>
        </div>
    );
};

export default Blog;