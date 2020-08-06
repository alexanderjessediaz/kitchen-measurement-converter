import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
// import CalculationTable from './CalculationTable';

class UtensilCard extends Component {

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
                as={ButtonGroup}
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
                variant="primary"
                title="cup"
                >
                  <Dropdown.Item 
                    eventKey={this.displayCupMeasurement}
                    id="Cup"
                    onSelect={this.displayCupMeasurement}
                    active
                  >
                  Cup</Dropdown.Item>


                  <Dropdown.Item eventKey="Tbsp">Tablespoon</Dropdown.Item>
                  <Dropdown.Item eventKey="Tsp">Teaspoon</Dropdown.Item>
                </DropdownButton>
              ))}
            </div>
          </>
              <Form.Control
                as="input"
                type="number"
                size="lg"
                placeholder="enter measurement"
                ref={(ref) => {this.input = ref}}
                />

            </Form.Row>
          </Form.Group>
        </Card.Body>
      </Card>
      
       
      
    )
  }
}


export default UtensilCard