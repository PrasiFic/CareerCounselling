import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>We are in Every field check them out!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/career.jpg'
              text='We are here to help you for you futur!'
              label='Career'
              path='/services'
            />
            <CardItem
              src='images/course.jpg'
              text='We are here to help you for you futur!'
              label='Course'
              path='/services'
            />
              <CardItem
                src='images/school.jpg'
                text='We are here to help you for your futur!'
                label='School'
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/jobs.jpg'
                text='We are here to help you for your futur!'
                label='Jobs'
                path='/products'
              />
            <CardItem
              src='images/business.jpg'
              text='We are here to help you for your futur!'
              label='Business'
              path='/sign-up'
            />
            <CardItem
              src='images/temp.jpg'
              text='We are here to help you for your futur!'
              label='Business'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
