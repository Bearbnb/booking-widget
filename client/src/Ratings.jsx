import React from 'react';
import styled from 'styled-components';

const Stars = styled.span`
  color: #008489 !important;
  font-size: 9px !important;
  height: 10px !important;
  margin-right: 1px !important;
  width: 9px !important;
`;

function Ratings(props) {
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
}

export default Ratings;
