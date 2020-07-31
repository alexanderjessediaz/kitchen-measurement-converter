import React from 'react';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function UtensilCards(props){
    return (
        <CardDeck >
              <Col xs="auto">
                <Card>
                  <Card.Body>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label column="lg" md={5}>
                       Cup
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
              </Col>
              <Col xs="auto">
                <Card>
                  <Card.Body>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label column="lg" md={5}>
                        Tablespoon
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
              </Col>
              <Col xs="auto">
                <Card>
                  <Card.Body>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label column="lg" md={5}>
                        Teaspoon
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
              </Col>
            </CardDeck>

    )
}

export default UtensilCards