import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import measuringspoons from './images/measuringspoons.jpg';
import CalculationTable from "./components/CalculationTable";
import UtensilCard from './components/UtensilCard';




class App extends Component {

  state = {
    inputMeasurement:0,
    cupMeasurement:0,
    tbspMeasurement:0,
    tspMeasurement:0
    
  };

  setUtensilMeasurment = event => {
    this.setState({
      inputMeasurement: event.target.value
    })
  }
  
    cupMeasurementDisplay = event => {

    }
  


  render(){
    return (
      <div className="App">
        <Container fluid="md">
            <Jumbotron fluid>
              <Container>
                <Media>
                  <img
                    width={100}
                    height={100}
                    className="mr-3"
                    src={measuringspoons}
                    alt="measuring spoons"
                  />
                  <Media.Body>
                    <h5>Kitchen Measurement Converter</h5>
                    <p>
                      Enter an amount for one of the measurements and see the converted measuremtns for all of the others.
                    </p>
                  </Media.Body>
                </Media>
              </Container>
            </Jumbotron>
            <Row className="justify-content-md-center">
                <UtensilCard
                  inputMeasurment={this.state.inputMeasurement}
                  setUtensilMeasurment={this.setUtensilMeasurment}
                  cupMeasurement={this.state.cupMeasurement} 
                  tbspMeasurement={this.state.tbspMeasurement} 
                  tspMeasurement={this.state.tspMeasurement}
                   />
            </Row>
            <CalculationTable
              inputMeasurment={this.state.inputMeasurement}
              cupMeasurement={this.state.cupMeasurement} 
              tbspMeasurement={this.state.tbspMeasurement} 
              tspMeasurement={this.state.tspMeasurement}
            />
        </Container>
      </div>

    );
  }
}

export default App;
