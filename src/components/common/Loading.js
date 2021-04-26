import React, { useState, useEffect } from "react";
import { LoadingDiv } from '../styledComponents/div'

const Loading = ({search}) => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const s = setInterval(() => {
      setCounter(c => c + 1);
    }, 1000);

    return () => clearInterval(s);
  }, [counter]);

  return (
    <LoadingDiv>
      <i className="fa fa-spinner fa-spin fa-2x mr-4"/>
      <span>
        Searching <span className="badge badge-warning badge-pill">{counter} S</span> for {search}
      </span>
    </LoadingDiv>
  );
};

export default Loading;