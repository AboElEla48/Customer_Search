import { Component } from 'react';
import './App.css';
import CustomerSearch from './CustomerSearch/CustomerSearchWidget.js';

const PREPAID = 'Prepaid'
const POSTPAID = 'Postpaid'

class App extends Component {
  originalCustomersList =
  [
    {
      id: 'edf12',
      customerName: 'Ahmed',
      customerMSISDN: '01054115889',
      lineType: PREPAID
    },

    {
      id: 'sxd17',
      customerName: 'Mohamed',
      customerMSISDN: '01054117789',
      lineType: PREPAID
    },

    {
      id: 'wqe32',
      customerName: 'Sameh',
      customerMSISDN: '01254115549',
      lineType: POSTPAID
    },

    {
      id: 'lke52',
      customerName: 'Arafat',
      customerMSISDN: '01154173549',
      lineType: POSTPAID
    },

    {
      id: 'vfr28',
      customerName: 'Walid',
      customerMSISDN: '01534171249',
      lineType: POSTPAID
    },

    {
      id: 'mxt38',
      customerName: 'Soaad',
      customerMSISDN: '01518731244',
      lineType: POSTPAID
    }


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
