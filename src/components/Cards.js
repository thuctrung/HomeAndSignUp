import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-5.jpg'
              text='A small river named Duden flows by their place and supplies'
              label='Luxury'
              path='/sign-up'
            />
            <CardItem
              src='images/img-2.jpg'
              text='A small river named Duden flows by their place and supplies'
              label='Luxury'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='A small river named Duden flows by their place and supplies'
              label='Luxury'
              path='/sign-up'
            />
            <CardItem
              src='images/img-4.jpg'
              text='A small river named Duden flows by their place and supplies'
              label='Luxury'
              path='/sign-up'
            />
            <CardItem
              src='images/img-6.jpg'
              text='A small river named Duden flows by their place and supplies'
              label='Luxury'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
