import React from 'react';
import { stats } from '../data';
import parse from 'html-react-parser';

function States() {
  return (
    <>
      {stats.map(({ no, title, id }) => (
        <div className="stats__box" key={id}>
          <h3 className="stats__no">{no}</h3>
          <p className="stats__title">{parse(title)}</p>
        </div>
      ))}
    </>
  );
}

export default States;
