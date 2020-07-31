import React from 'react';

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function UtensilCard(props){
    return (        
      <Card>
        <Card.Body>
        <Form.Group>
          <Form.Row>
            <Form.Label column="lg" md={5}>
              Name
            </Form.Label>
              <Form.Control size="lg" id="cup" placeholder="enter measurement" />
            </Form.Row>
          </Form.Group>
          <Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Title>
        </Card.Body>
      </Card>
    )
}

export default UtensilCard