import React, { useState } from "react";
import "./amenities.less";
import { getIconByTitle } from "../addProperty/constants";
import { Col, Row } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

function Amenities({ data }) {
  const [expand, setExpand] = useState(false);

  const amenities = !expand ? data?.slice(0, 12) : data;
  return (
    <div className="amenities-card">
      <div className="header">
        <h4>Amenities</h4>
      </div>
      <div className="content">
        <Row className="list">
          {amenities.map((i) => {
            return (
              <Col className="item" xs={12} sm={12} md={8} lg={6} xl={6}>
                {getIconByTitle(i)}
                {i}
              </Col>
            );
          })}
        </Row>
        {amenities?.length > 11 && (
          <div className="expand" onClick={() => setExpand(!expand)}>
            {" "}
            {!expand ? (
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

export default Amenities;
