import React from "react";

const Component = (props) => {
    return (
        <div className="component-wrapper" id={props.id}>
            <div className="component-content">
                <div className="component-title-area">
                    <h2 className="component-title">{props.title}</h2>
                    <p>{props.paragraph}</p>
                </div>
                <div className="component-body-area">{props.componentBody}</div>
            </div>
        </div>
    )
};

export default Component;