import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class UtensilCard extends Component {

  state = {
    utensilButton: []
  }

  // 1 cup = 16tblsp && 48 Tsp

  // cupToTablespoon = () => 
  // cupToTeaspoon

  // tablespoonToTeaspoon
  // tablespoonToCup

  // teaspoonToCup
  // teaspoonToTablespoon

  handleChange = (event) => {
    this.setState({

    })
  }


  render(){

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
              <Form.Control
                as="input"
                onChange={this.handleChange}
                type="number"
                size="lg"
                id="measurementInput"
                placeholder="enter measurement"/>
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
}

export default UtensilCard