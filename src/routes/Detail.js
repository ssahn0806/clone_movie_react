import React, { useEffect } from "react";

const Detail = (props) => {
  const { location, history } = props;
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  }, []);
  console.log(props, "detail props");
  return <span>{location.state?.title}</span>;
};

export default Detail;
