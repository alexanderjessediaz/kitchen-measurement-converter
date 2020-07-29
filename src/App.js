import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import cup from './images/cup.jpg';
import tablespoon from './images/tablespoon.jpg';
import teaspoon from './images/teaspoon.jpg'


function App() {
  return (
    <div className="App">
      <Container fluid="md">
        <CardDeck>
          <Col xs="auto">
            <Card>
              <Card.Img variant="top" src={cup}/>
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
              <Card.Img variant="top" src={tablespoon}/>
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
              <Card.Img variant="top" src={teaspoon}/>
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
      </Container>
    </div>
  );
}

export default App;
