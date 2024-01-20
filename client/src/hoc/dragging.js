import React, { useState } from "react";

function dragging(Component) {
  function Dragging(props) {
    const [dragging, setDragging] = useState(false);

    const forDragStart = ev => {
      const { data } = props;
      onDragStart(ev, data.id);
    };

    const onDragStart = (ev, id) => {
      setDragging(prevDragging => !prevDragging);
      ev.dataTransfer.setData("text/html", id);
    };

    return (
      <Component
        {...props}
        dragging={dragging}
        forDragStart={forDragStart}
        onDragStart={onDragStart}
      />
    );
  }

  Dragging.displayName = `Dragging(${Component.displayName || Component.name || "Card"})`;
  return Dragging;
}

export default dragging;
