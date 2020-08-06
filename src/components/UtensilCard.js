// 1 cup = 16tblsp && 48 Tsp

// cupToTablespoon = () => 
// cupToTeaspoon

// tablespoonToTeaspoon
// tablespoonToCup

// teaspoonToCup
// teaspoonToTablespoon
import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class UtensilCard extends Component {

  state = {
    measurement:0,
    utensilBtn: [
      {
        cup:"cup",
        isCupSelected: false
      },{
        tbsp: "tbsp",
        isTbspSelected: false
      },{
        tsp: "tsp", 
        isTspSelected: false
      }
    ]
  };



  
  setUtilToCup = () => {
    console.log("test")
    this.setState({
      isCupSelected: true,

    })
  }

  setUtilToTbsp = () => {
    this.setState({
      isTbspSelected:true
    })
  }

  setUtilToTsp = () => {
    this.setState({
      isTspSelected:true
    })
  }
  
  setMeasurment = event => {
    this.setState({
      measurement: event.target.value
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
                  as={ButtonGroup}
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  variant="primary"
                  title="Select a utensil"
                  // onSelect={this.setUtilToCup ? this.state.utensilBtn.cup : 'select Utensil' } 
                  // onChange={() => this.setState({})}
                >
                  <Dropdown.Item eventKey="Cup"
                   id="Cup"
                   onSelect={this.setUtilToCup}
                   >Cup</Dropdown.Item>
                  <Dropdown.Item eventKey="Tbl">Tablespoon</Dropdown.Item>
                  <Dropdown.Item eventKey="Tsp">Teaspoon</Dropdown.Item>
                </DropdownButton>
              ))}
            </div>
          </>
              <Form.Control
                as="input"
                type="number"
                size="lg"
                id="measurementInput"
                placeholder="enter measurement"
                onChange={this.setMeasurment}
                value={this.state.measurement}
                />
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