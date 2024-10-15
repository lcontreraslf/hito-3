import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza';
import { pizzas } from "../assets/pizzas"
import { Button, Card, Col, Container, Row } from 'react-bootstrap';



function Home() {

    const mapPizzas = pizzas.map((pizza) => {
        return (
            <Col key={pizza.id} >
                <CardPizza pizza={pizza} />
            </Col>
        )
    })
    console.log(mapPizzas);
    return (
        <div>
            <Header />

            <Container>
                <Row className='g-4' xs={1} md={2} lg={4}>
                    {mapPizzas}
                </Row>
            </Container>
        </div>

    )
}

export default Home