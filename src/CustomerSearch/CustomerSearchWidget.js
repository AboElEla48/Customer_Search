import React, {Component} from "react";
import './Style/CustomerSearchStyles.css'
import CustomerListItem from '../CustomerSearch/ListItem/ListItem.js'

const LOG_TAG = 'CustomerSearchWidget: '

class CustomerSearch extends Component{

    // Hold the customers list
    customersList = null;

    // Hold list into state
    state = {};
    

    constructor(props){
        super(props);
        
        //Get customers List
        this.customersList = props.customersList;
        this.logMSG('CustomerSearch Constructor', this.customersList);
    }

    /** Log messages to console */
    logMSG = (msg, obj) => {
        console.log(LOG_TAG + msg);
        if(obj != null) {
            console.log(obj);
        }
    }


    /**Render component */
    render =() => {

        this.logMSG('Render');

        this.setState(this.customersList);

        return (
            <div>
                <h2>MSISDN:</h2>
                
                
                {/** Add input field for user to enter
                * MSISDN
                */}
                <input
                    className="TextInput" 
                    type="number"
                    placeholder='Enter Customer MSISDN'/>

                <h2>Customers</h2>
                {
                    // Fill a list of customers items list from customers array
                    this.customersList.map(customer => {
                        return (
                            <CustomerListItem 
                                itemName= {customer.customerName}
                                itemMSISDN= {customer.customerMSISDN}
                                itemLineType= {customer.lineType}/>);
                    })
                }
            </div>
            );
        }

}

export default CustomerSearch;