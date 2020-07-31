import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function UtensilCard(props){
    return (        
      <Card>
        <Card.Body>
        <Form.Group>
          <Form.Row>
            
          <>
            <div className="mb-2">
              {["left"].map((direction) => (
                <DropdownButton
                  as={Button}
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="primary"
                  title="Select Utensil"
                >
                  <Dropdown.Item eventKey="1">Cup</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Tablespoon</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Teaspoon</Dropdown.Item>
                </DropdownButton>
              ))}
            </div>
          </>

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