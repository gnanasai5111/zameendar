import React, { useState } from "react";

const ReadMore = ({ text , maxLength }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="read-more">
      {isReadMore
        ? text
        : text.length <= maxLength
        ? text
        : text.slice(0, maxLength) + "..."}
      {text.length > maxLength && (
        <span onClick={toggleReadMore} className="read-more-link">
          {isReadMore ? " Read Less" : " Read More"}
        </span>
      )}
    </div>
  );
};

export default ReadMore;
