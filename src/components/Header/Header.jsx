import React from 'react'
import './Header.scss'

import Card from '../Card/Card'
import Title from '../Title/Title'
const Header = () => {
  return (
    <>
    <Title>Транспорт</Title>
    <div className="wrap">
       <Card name="Велосипед" img="/card-1.jpeg" />
       <Card name="Самокат" img="https://rant.ru/upload/resize/79351/79351_815x1086x70_c.webp"  />
       <Card name="Мотоцикл" img="https://images.prom.ua/2957515470_w600_h600_2957515470.jpg" />
       <Card />
    </div>

    <Title>Одежда</Title>
    <div className="wrap">
       <Card name="Велосипед" img="/card-1.jpeg" />
       <Card name="Самокат" img="https://rant.ru/upload/resize/79351/79351_815x1086x70_c.webp"  />
       <Card name="Мотоцикл" img="https://images.prom.ua/2957515470_w600_h600_2957515470.jpg" />
       <Card />
    </div>
    </>
  )
}

export default Header