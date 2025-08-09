import React from "react";
import data from "./data";
const List = ({people}) => {
  return (
      <>
          {people.map((person) => {
              <h4 key={person.id}>{person.name}</h4>;
              
          })}
      
    </>
  );
};

export default List;
