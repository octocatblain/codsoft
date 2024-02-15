import React, { useState } from 'react';
import "./Accordion.css"
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi"

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={index}>
        <div className={`title ${isActive}`} onClick={() => onItemClick(index)}>

          {item.title}
          {isActive ? <BiMinusCircle className="icon" /> : <BiPlusCircle className="icon" />}
        </div>
        <div className={`content ${isActive}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
