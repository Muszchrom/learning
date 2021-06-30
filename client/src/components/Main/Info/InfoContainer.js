import React from 'react';
import InfoComponent from './InfoComponent';
// class-black-background margin-top6em
const InfoContainer = (props) => {
  let infos = props.data.map((info, index) => {
    return <InfoComponent
      key={index}
      title={info.header}
      content={info.content} />
  });
  return (
    <div>
      {infos}
    </div>
  );
}

export default InfoContainer;
