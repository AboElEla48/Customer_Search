import React from "react";
import '../Style/CustomerSearchStyles.css'

const listItem = (props) => {

    return (
        <div className="CardStyle">
        <table>
          <td>
            <tr>
              <div className="CustomerName">
                  {props.itemName}
              </div>
            </tr>

            <tr>
              <div className="CustomerData">
                  {props.itemMSISDN}<br/>
                  {props.itemLineType}

              </div>
            </tr>

          </td>

          <td>
            <img
              className="CustomerDetailsArrow"/>
          </td>
        </table> 


        </div>
    );

}

export default listItem;
