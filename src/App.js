import { Component } from 'react';
import './App.css';
import CustomerSearch from './CustomerSearch/CustomerSearchWidget.js';

const PREPAID = 'Prepaid'
const POSTPAID = 'Postpaid'

class App extends Component {
  originalCustomersList = 
  [
    {customerName: 'Ahmed',
    customerMSISDN: '010',
    lineType: PREPAID},

    {customerName: 'Mohamed',
    customerMSISDN: '010',
    lineType: PREPAID},

    {customerName: 'Sameh',
    customerMSISDN: '012',
    lineType: POSTPAID}

    ];
  

  /**Render method */
  render = () => {
  return (
    <div>
      <h1>Customer Search:</h1>

      {/** Add Customer Search widget*/}
      <CustomerSearch customersList={this.originalCustomersList}/> 

    </div>
    );
  }
}

export default App;
