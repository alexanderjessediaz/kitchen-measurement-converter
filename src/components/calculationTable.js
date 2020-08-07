import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'

const CalculationTable = props => {

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