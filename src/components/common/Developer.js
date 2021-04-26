import React from "react";
import { DevH5 } from '../styledComponents/hx'
import { DevDiv } from '../styledComponents/div'

const Developer = (props) => {

  return (
    <DevDiv>
      <hr />
      <a href="/#">
        <DevH5>{props.name}</DevH5>
      </a>
    </DevDiv>
  );
}

export default Developer;