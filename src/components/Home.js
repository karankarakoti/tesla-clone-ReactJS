import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import data from '../carInfo.json'

function Home() {
    return (
        <Container>
            {
                data.map((item, index)=>(
                    <Section
                        key = {item.id}
                        id = {item.id}
                        title = {item.title}
                        description = {item.description}
                        image = {item.image}
                        range = {item.range}
                        time = {item.time}
                        topSpeed = {item.topSpeed}
                        peakPower = {item.peakPower}
                        leftBtnText = "Custom Order"
                        rightBtnText = "Existing Inventory"
                    />
                ))
            }
            <Section
                id = "5"
                title = "Lowest Cost Solar Panels in America"
                description = "Money back guarantee"
                image = "solar-panel.jpg"
                leftBtnText = "Order Now"
                rightBtnText = "Learn More"
            />
            <Section
                id = "5"
                title = "Solar for New Roofs"
                description = "Solar Roof Costs Less than a New Roof"
                image = "solar-roof.jpg"
                leftBtnText = "Order Now"
                rightBtnText = "Learn More"
            />
            <Section
                id = "5"
                title = "Accessories"
                description = ""
                image = "accessories.jpg"
                leftBtnText = "Order Now"
            />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;

`

export default Home