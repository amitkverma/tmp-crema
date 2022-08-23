const InvoiceColumns = [
  {
    title: 'Item & Description',
    dataIndex: 'item',
    key: 'item',
    render: (item) => (
      <>
        <h6>{item.itemTitle}</h6>
        {item.desc ? (
          <p className='invoice-truncate-view'>
            <span className='text-truncate'>{item.desc}</span>
          </p>
        ) : null}
      </>
    ),
  },
  {
    title: 'Assignment Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

export default InvoiceColumns;
