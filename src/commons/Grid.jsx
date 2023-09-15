import React from "react";
import Card from "./Card";

const Grid = ({ items, title }) => {
  return (
    <div className="contenedor-grid" style={{ margin: "0 8%" }}>
      <h1 className="titles">{title}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
          padding: "40px",
          border: "1px solid black",
          marginTop: "40px",
        }}
      >
        {items.map((item, i) => {
          return <Card item={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Grid;
