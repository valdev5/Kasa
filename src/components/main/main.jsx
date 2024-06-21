import React from 'react';
import "./main.css"

function Main(props) {
  const { children } = props;
  return (
    <div className="main"> {children} </div>
  );
}

export default Main;