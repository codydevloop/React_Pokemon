import React from "react";
import './TableData.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const TableData = props => {
    // console.log(props);
    return (
        <>
            {
                props.pokemonList.map(item =>
                    <Row>
                        <Col xs={3}></Col>
                        <Col xs={6}>
                            <Row className="tabledata">
                                <Col><p key={item.id}>{item.name}</p></Col>
                                <Col><p key={item.id}>{item.type1}</p></Col>
                                <Col><p key={item.id}>{item.region}</p></Col>
                                <Col><p key={item.id}>{item.fastAttack}</p></Col>
                            </Row>
                        </Col>
                        <Col xs={3}></Col>
                    </Row>
                )
            }
        </>
    )

}

export default TableData;