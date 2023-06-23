import React, {Component} from "react";
import './Style/CustomerSearchStyles.css'
import CustomerListItem from '../CustomerSearch/ListItem/ListItem.js'

const LOG_TAG = 'CustomerSearchWidget: '

class CustomerSearch extends Component{

    // Hold the customers list
    customersList = null;

    // Hold the unchangeable list of customers
    originalCustomersList = null;

    // Hold list into state
    state = {};

    /** Component Constructor*/
    constructor(props){
        super(props);

        //Get customers List
        this.customersList = props.customersList;
        this.originalCustomersList = [...this.customersList];
        this.logMSG('CustomerSearch Constructor', this.customersList);

        //set state value directly as the component isn't rendered yet
        this.state = {...this.customersList};
    }

    /** Log messages to console */
    logMSG = (msg, obj) => {
        console.log(LOG_TAG + msg);
        if(obj != null) {
            console.log(obj);
        }
    }

    /** Handle change text in MSISDN field to filter data*/
    customerMSISDNChangeHandler = (event) => {
      this.logMSG('customerMSISDNChangeHandler');
      let msisdn = event.target.value;

      // search in original data
      this.customersList = [...this.originalCustomersList];

      //search for MSISDN in list of Customers
      if(this.customersList != null) {
        let newCustomersList = new Array();
        for(let i =0; i < this.customersList.length; i++) {
          let customer = this.customersList[i];
          if( customer.customerMSISDN.includes(msisdn) ) {
             newCustomersList.push(customer);
           }

        }

        // Update customers list
        this.customersList = [...newCustomersList];

        // chanle list state
        this.setState(this.customersList);
      }
    }

    /**Render component */
    render = () => {

        this.logMSG('Render');

        return (
            <div>
                <h2>MSISDN:</h2>


                {/** Add input field for user to enter
                * MSISDN
                */}
                <input
                    className="TextInput"
                    type="tel"
                    onChange= {this.customerMSISDNChangeHandler}
                    placeholder='Enter Customer MSISDN'/>

                <h2>Customers</h2>
                {
                    // Fill a list of customers items list from customers array
                    this.customersList.map(customer => {
                        return (
                            <CustomerListItem
                              key={customer.id}
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
