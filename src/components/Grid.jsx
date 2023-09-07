import React from "react";
import Card from "../commons/Card";

const Grid = ({items}) => {
  return (
    <div className="contenedor-grid">
      <h1 className="titles">Todos nuestros Productos <span className="badge bg-secondary">New</span></h1>
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
          return <Card item={item} />;
        })}
      </div>
    </div>
  );
};

export default Grid;
