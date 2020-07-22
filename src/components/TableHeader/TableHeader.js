import React from "react";
import './TableHeader.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function TableHeader(props) {
    // console.log(props);
    return (
        <Row >
            <Col xs={3}></Col>

            <Col xs={6} >
                <Row className="codybuttonsgroup">
                    <Col ><Button onClick={props.handleSortName}>Pokemon <i class="fas fa-sort"></i></Button></Col>
                    <Col >
                        {/* pass props here to auto fill this list */}
                        <DropdownButton id="dropdown-basic-button" title="Type">
                            {
                            props.dropDownMenuSeed.map(item =>
                            <Dropdown.Item onClick={props.handleFilterRegion} name={item.type1}>{item.type1}</Dropdown.Item>
                            )
                            }
                        </DropdownButton>
                    </Col>
                    <Col ><Button >Region</Button></Col>
                    <Col ><Button >Attack</Button></Col>
                </Row>
            </Col>

            <Col xs={3}></Col>
        </Row>
    )
}

export default TableHeader;