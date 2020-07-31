import React, { Component } from 'react';
// import CardDeck from 'react-bootstrap/CardDeck';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
import Media from 'react-bootstrap/Media';
import Jumbotron from 'react-bootstrap/Jumbotron'
// import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col';
import measuringspoons from './images/measuringspoons.jpg';
import CalculationTable from "./components/CalculationTable";
import UtensilCard from './components/UtensilCard';




class App extends Component {

  state = {
    measurementUtensils: [
      {
        name: "Cup",
        measurement: 0
      },
      {
        name: "Tablespoon",
        measurement: 0
      },
      {
        name: "Teaspoon",
        measurement: 0
      },
    ]
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
                <UtensilCard measurementUtensils={this.state.measurementUtensils}/>
            </Row>
            <CalculationTable measurementUtensils={this.state.measurementUtensils}/>
        </Container>
      </div>

    );
  }
}

export default App;
