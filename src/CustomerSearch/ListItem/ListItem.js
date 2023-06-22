import React from "react";
import '../Style/CustomerSearchStyles.css'

const listItem = (props) => {

    return (
        <div className="CardStyle">
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="CustomerName">
                      {props.itemName}
                  </div>
                </td>

                <td rowSpan="3">
                  <img className="CustomerDetailsArrow"/>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="CustomerData">
                      {props.itemMSISDN}
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="CustomerData">
                      {props.itemLineType}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
    );

}

export default listItem;
