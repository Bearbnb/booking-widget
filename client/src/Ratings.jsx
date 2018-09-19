import React from 'react';
import Stars from '../../styles/Ratings';

const Ratings = (props) => {
  const renderStars = () => {
    const starsNum = [];
    const { averageRating } = props;

    for (let i = 0; i < averageRating; i++) {
      starsNum.push(<i className="fas fa-star" key={i}></i>);
    }
    return <span>{starsNum}</span>;
  };

  return (
    <Stars>
      {renderStars()}
    </Stars>
  );
};

export default Ratings;
