import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import { ButtonGroup, FormControl, Button, Card } from 'react-bootstrap';
import * as Icon from 'react-icons/bs'
import * as Icon2 from 'react-icons/hi2'
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Row, Col, Image } from 'react-bootstrap';



function Message() {
    return (
        <>
            

                <SplitButton
                    className= "dropdown-menu-right position-sticky-bottom"
                    drop="up-down-center"
                    variant="white"
                    align="start"
                    title={
                        <>
                            <Image src="https://www.tonica.la/__export/1595866796960/sites/debate/img/2020/07/27/el-ssj4-muestra-nuevo-arte-visual-goku-super-saiyan-4.jpg_423682103.jpg"  roundedCircle className='me-2' style={{ height: '30px'  }} />
                            Messaggistica
                            
                            <Button className="bg-white border-0 ms-auto"><Icon2.HiEllipsisHorizontal className="me-2 ms-auto text-black" /></Button>
                            
                            <Button className="bg-white border-0 ms-auto">
                                <HiOutlinePencilAlt className="me-2 text-black" />
                            </Button>
                            
                            

                        </>
                    }
                >

                    <Dropdown.Item eventKey="1" className='text-black'><FormControl type="text" placeholder="Cerca messaggi" className="mr-sm-2 bg-light" /></Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                        <Row className="align-items-center">
                            <Col xs={2}>
                                <Image src="path_to_image" roundedCircle />
                            </Col>
                            <Col xs={10}>
                                <p className='m-0'>Marco Rossetti</p>
                            </Col>
                        </Row>
                    </Dropdown.Item>

                    <Dropdown.Item eventKey="3">
                        <Row className="align-items-center">
                            <Col xs={2}>
                                <Image src="path_to_image" roundedCircle />
                            </Col>
                            <Col xs={10}>
                                <p className='m-0'>Goku</p>
                            </Col>
                        </Row>
                    </Dropdown.Item>

                    
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Space</Dropdown.Item>
                </SplitButton>


            

            <div>


            </div>
        </>
    );
}

export default Message;