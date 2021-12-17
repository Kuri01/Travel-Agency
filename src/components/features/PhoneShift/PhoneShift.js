import React from 'react';

const PhoneShift = ({ rightPerson }) => {
  const { name, description } = rightPerson;

  return (
    <div className='phoneNumber'>
      {name !== '' ? (
        <div>
          {name} - {description}
        </div>
      ) : (
        <div>{description}</div>
      )}
    </div>
  );
};

export default PhoneShift;
