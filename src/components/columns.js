import MOCK_DATA from './MOCK_DATA.json';
const FOOTER_DATA = MOCK_DATA.data.summa;



export const COLUMNS = [
  {
    Header: 'Name',
    Footer: 'Total',
    accessor: 'customername'
  }, 
  {
    Header: 'ID',
    accessor: 'customerphone'
  },
  {
    Header: 'Tier',
    accessor: 'customertier'
  },
  {
    Header: 'LTV',
    accessor: 'totalamount'
  },
  {
    Header: 'Total Trans',
    accessor: 'totaltransaction'
  },
  {
    Header: 'Total Point',
    accessor: 'totalreward'
  },
  {
    Header: 'Remaining Point',
    accessor: 'remainingpoint'
  }
]