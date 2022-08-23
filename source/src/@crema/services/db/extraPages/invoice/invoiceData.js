const invoiceData = {
  company: {
    name: 'Crema admin',
    address1: 'A-22, Garvit Complex',
    address2: 'Pune(MH), India',
    phone: '(+91)-1234567890',
  },
  client: {
    name: 'Mr. John Doe',
    phone: '(+91)-1234567890',
    email: 'john123doe@xyz.com',
  },
  invoice: {
    id: '$323892938',
    date: '05/10/2021',
    dueDate: '05/10/2020',
  },
  products: [
    {
      id: 1,
      item: {
        itemTitle: 'Logo Design',
        desc: 'Lorem Ipsum is simply dummy text of the printing',
      },
      type: 'FIXED PRICE',
      quantity: '02',
      price: 300,
    },
    {
      id: 2,
      item: {
        itemTitle: 'Stationary Design',
        desc: 'Lorem Ipsum is simply dummy text of the printing',
      },
      type: '$20/HOUR',
      quantity: '5 Hours',
      price: 100,
    },
    {
      id: 3,
      item: {
        itemTitle: 'Logo Design',
        desc: 'Lorem Ipsum is simply dummy text of the printing',
      },
      type: 'FIXED PRICE',
      quantity: '02',
      price: 300,
    },
    {
      id: 4,
      item: {
        itemTitle: 'Subtotal',
        desc: '',
      },
      type: '',
      quantity: '',
      price: 1000,
    },
    {
      id: 5,
      item: {
        itemTitle: 'Rebate',
        desc: '',
      },
      desc: '',
      type: '',
      quantity: '',
      price: 200,
    },
    {
      id: 6,
      item: {
        itemTitle: 'Grand Total',
        desc: '',
      },
      type: '',
      quantity: '',
      price: 800,
    },
  ],
};
export default invoiceData;
