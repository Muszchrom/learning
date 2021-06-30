import React from 'react';

const InfoComponent = (props) => (
  <article className="class-black-background margin-top6em">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </article>
);

export default InfoComponent;
