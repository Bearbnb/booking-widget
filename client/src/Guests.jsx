import React from 'react';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { adults, children, infants, adultAddClick, adultSubClick, childrenAddClick, childrenSubClick, infantAddClick, infantSubClick, guestButtonClick } = this.props;

    return (
      <div>
        <button onClick={guestButtonClick}>
          Select guests
        </button>
        <div className="guest-list">
          <div className="guest-list-entry">
            Adults
            <button onClick={adultAddClick}>+</button>{adults}<button onClick={adultSubClick}>-</button>
          </div>
          <div className="guest-list-entry">
            Children
            <button onClick={childrenAddClick}>+</button>{children}<button onClick={childrenSubClick}>-</button>
          </div>
          <div className="guest-list-entry">
            Infants <button onClick={infantAddClick}>+</button>{infants}<button onClick={infantSubClick}>-</button>
          </div>
          <p>
            2 guests maximum. Infants don’t count toward the number of guests.
          </p>
          <p onClick={guestButtonClick}>Close</p>
        </div>
      </div>
    );
  }
}

export default Guests;
