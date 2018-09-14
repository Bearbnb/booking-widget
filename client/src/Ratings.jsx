import React from 'react';

function Ratings(props) {
  const renderStars = () => {
    const starsNum = [];
    const { averageRating } = props;

    for (let i = 0; i < averageRating; i++) {
      starsNum.push(<i className="fas fa-star" key={i}></i>);
    }
    return <div>{starsNum}</div>;
  };

  return (
    <div>
      {renderStars()}
    </div>
  );
}

export default Ratings;
