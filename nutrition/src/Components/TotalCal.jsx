import React from 'react';

const TotalCal = (props) => {
  const { count, name, totalCal } = props;

  return (
    <div className="flex2">
      <h3>{`${count} ${name} = ${totalCal} calories`}</h3>
    </div>
  );
};

export default TotalCal;
