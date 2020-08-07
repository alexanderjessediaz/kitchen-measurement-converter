import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import "../utils/conversion-functions"
// import { cupToTbsp } from '../utils/conversion-functions';

const CalculationTable = props => {

    // console.log(cupToTbsp())
        return (
            <Container className="justify-content-center">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Utensil</th>
                        <th>Measurement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Cup</td>
                        <td></td>

                        
                        </tr>
                        <tr>
                        <td>Tablespoon</td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Teaspoon</td>
                        <td></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

)
    }

export default CalculationTable