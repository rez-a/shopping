import React from 'react';
import SectionWrrap from '../SectionWrrap';

const Description = ({ description }) => {
  return (
    <SectionWrrap>
      <p className="text-sm text-justify">{description}</p>
    </SectionWrrap>
  );
};

export default Description;
