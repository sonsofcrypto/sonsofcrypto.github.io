import React from "react";

const Scroll = (props) => {
    return (
        <div style={{
            overflowY: 'auto',
            // borderTop: '1px solid gray',
            height: 'calc(100vh - 188px)'
        }}>
            {props.children}
        </div>
    )
}

export default Scroll;