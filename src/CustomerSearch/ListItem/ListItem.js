import React from "react";
import '../Style/CustomerSearchStyles.css'

const listItem = (props) => {

    return (
        <div className="CardStyle">
            
            <div className="CustomerName">
                {props.itemName}
            </div>
            <div className="CustomerData">
                {props.itemMSISDN}<br/>
                {props.itemLineType}

            </div>
            
        </div>
    );

}

export default listItem;