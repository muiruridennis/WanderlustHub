import React, { useState } from "react";

function dropping(Component) {
    function Dropping(props) {
        const [dropping, setDropping] = useState(false);

        const forDragOver = ev => {
            onDragOver(ev);
        };

        const onDragOver = ev => {
            ev.preventDefault();
        };

        const forDrop = ev => {
            const { type } = props;
            onDrop(ev, type);
        };

        const onDragEnter = () => {
            setDropping(prevDropping => !prevDropping);
        };

        const onDrop = (ev, cat) => {
            props.dragAndDrop(ev, cat);
            setDropping(false);
        };

        const onDragLeave = () => {
            setDropping(prevDropping => !prevDropping);
        };

        return (
            <Component
                {...props}
                dropping={dropping}
                forDragOver={forDragOver}
                onDragOver={onDragOver}
                forDrop={forDrop}
                onDragEnter={onDragEnter}
                onDrop={onDrop}
                onDragLeave={onDragLeave}
            />
        );
    }

    Dropping.displayName = `Dropping(${Component.displayName || Component.name || "Cards"})`;
    return Dropping;
}

export default dropping;
