import React, { useState } from "react";
import "./about.less";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

function About({ data }) {
  const [expand, setExpand] = useState(false);
  var text = data;
  return (
    <div className="about-card">
      <div className="header">
        <h4>About Property</h4>
      </div>
      <div className="content">
        <p>
          {text?.length > 400 && expand ? text.slice(0, 400) + "..." : text}
        </p>
        {text?.length > 400 && (
          <div className="expand" onClick={() => setExpand(!expand)}>
            {" "}
            {expand ? (
              <div>
                Show More <DownOutlined />
              </div>
            ) : (
              <div>
                Show Less <UpOutlined />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
