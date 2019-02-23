import React from 'react';

//const Location = (props) => {
//    console.log(props);
//destructuring:
//    const { city } = props;
//  debugger;
//    return (
//        <div><h2>{city}</h2></div>
//    );
//};

const Location = ({city}) =>  (
    <div><h2>{city}</h2></div>
);


export default Location;