import React, { useEffect, useRef } from "react";
import "./properties.less";
import BuyerCard from "./BuyerCard";

function BuyerProperties({ data, type, id, onLoadMore }) {
  const listRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => {
      if (listRef.current) {
        observer.unobserve(listRef.current);
      }
    };
  }, [onLoadMore]);

  return (
    <div>
      {data?.map((item) => {
        return <BuyerCard item={item} type={type} id={id} />;
      })}
      <div ref={listRef}></div>
    </div>
  );
}

export default BuyerProperties;
