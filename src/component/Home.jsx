import { Carousel, Col, Container, Row } from "react-bootstrap"
import dishes from '../data/menu.json'
import {Component} from 'react'

class Home extends Component {
    state = {
        selectedDish: null
    }

    render (){
        return(
        <>
            <Container>
                <Row className="mt-3 justify-content-center">
                    <Col xs={12} md={10}>
                        <Carousel>
                            {
                                dishes.map(dish => (
                                    <Carousel.Item key={dish.id}>
                                    <img
                                        className="d-block w-100"
                                        src={dish.image}
                                        alt={dish.name}
                                        onClick={() => this.setState({
                                            selectedDish: dish
                                        })}
                                    />
                                    <Carousel.Caption>
                                        <h3>{dish.name}</h3>
                                        <p>{dish.description}</p>
                                    </Carousel.Caption>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <ul>
                        {
                            this.state.selectedDish?.comments.map(c =>(
                                <li key={c.id}>{c.comment}</li>
                            ))
                        }
                    </ul>
                </Row>
            </Container>
        </>
        )
    }
}

export default Home