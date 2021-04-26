import React from "react";
import { StarSpan } from '../styledComponents/span'
import { StarCountDiv } from '../styledComponents/div'

const StarCount = ({count}) => {
  return (
    <StarSpan className="badge badge-light badge-pill">
      <StarCountDiv>
        <i className="fa fa-star m1-2" aria-hidden="true" />&nbsp;
        {count}
      </StarCountDiv>
    </StarSpan>
  );
};

export default StarCount;