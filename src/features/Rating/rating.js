import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementRating, decrementRating, resetRating } from '../Rating/ratingSlice';

const Rating = (props) => {
  const { index, ratings } = props;
  const id = index;
 
  const dispatch = useDispatch();
  const ratingsData = useSelector(state => state.ratings); // Get the ratings from the Redux store

  const handleIncrement = () => {
    if (ratingsData[id] === 1) {
      dispatch(resetRating({ id }));
    } else {
      dispatch(incrementRating({ id }));
    }
  };

  const handleDecrement = () => {
    if (ratingsData[id] === -1) {
      dispatch(resetRating({ id }));
    } else {
      dispatch(decrementRating({ id }));
    }
  };

  const handleReset = () => {
    dispatch(resetRating({ id }));
  };

  const score = ratingsData[id] || 0;

  const isPlusClicked = ratingsData[id] === 1;
  const isMinusClicked = ratingsData[id] === -1;

  return (
    <span>
      <span
        className={`minus ${isMinusClicked ? 'bordered' : ''}`}
        onClick={isMinusClicked ? handleReset : handleDecrement}
      >
        -
      </span>
      {score ? ratings + score : ratings}
      <span
        className={`plus ${isPlusClicked ? 'bordered' : ''}`}
        onClick={isPlusClicked ? handleReset : handleIncrement}
      >
        +
      </span>
    </span>
  );
};

export default Rating;
