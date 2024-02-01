import React, { useState } from 'react';
import TotalCal from './TotalCal';
import '../App.css';

const Foodbox = ({ food }) => {
  const [counter, setCounter] = useState(0);
  const [totalCal, setTotalCal] = useState(0);

  const handleChange = (e) => {
    setCounter(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTotalCal(food.cal * counter);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setCounter(0);
    setTotalCal(0);
  };

  return (
    <div className='flex'>
      <div className="box">
        <article className="media">
          <div className="left">
            <figure className="image">
              <img src={food.img} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.cal}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="more">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder='Enter a number here'
                  onChange={(e) => handleChange(e.target.value)}
                />
              </div>
              <div className="control">
                <button onClick={handleSubmit} className="info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <TotalCal name={food.name} totalCal={totalCal} count={counter} />
      <button className="reset" onClick={handleReset}>
        reset
      </button>
    </div>
  );
};

export default Foodbox;
