import React, { useEffect, useRef, useState } from "react";
import "./Content.css";

export default function Content(props: any) {
  const [isReadMoreVisible, setReadMoreVisible] = useState(false);

  const contentTextRef = useRef<HTMLDivElement>(null);
  const contentTextInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentTextRef.current) {
      const contentHeight = contentTextRef.current.offsetHeight;
      const contentInnerHeight = contentTextInnerRef.current?.offsetHeight;
      if (contentInnerHeight && contentHeight < contentInnerHeight) {
        setReadMoreVisible(true);
      }
    }
  }, []);

  return (
    <div className="card-content">
      <input type="checkbox" id={`read-more-${props.id}`} name="read-more" />
      <div className="content-text" ref={contentTextRef}>
        <div className="content-text-inner" ref={contentTextInnerRef}>
          {props.children}
        </div>
      </div>
      <div
        className="label-container"
        style={{ display: isReadMoreVisible ? "block" : "none" }}
      >
        <label htmlFor={`read-more-${props.id}`}>
          <span>Read More</span>
          <span>Read Less</span>
        </label>
      </div>
    </div>
  );
}
