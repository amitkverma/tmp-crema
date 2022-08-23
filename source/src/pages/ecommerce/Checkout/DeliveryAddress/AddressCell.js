import React from 'react';
import PropTypes from 'prop-types';
import {Button, Radio} from 'antd';
import {EditOutlined} from '@ant-design/icons';

const AddressCell = ({address, selectedAddress, setSelectAddress}) => {
  const isActive = selectedAddress.id === address.id;
  return (
    <div
      onClick={() => setSelectAddress(address)}
      className='delivery-address-cell item-hover'>
      <div className='delivery-address-row'>
        <Radio className='delivery-radio' checked={isActive}>
          {address.name}
        </Radio>
        <p className='mb-0'>{address.mobile}</p>
        {isActive ? (
          <Button className='delivery-edit-btn' size='small'>
            <EditOutlined />
          </Button>
        ) : null}
      </div>
      <div className='delivery-address-item'>
        {address.addressLine}, {address.city}, {address.pin}
      </div>
      {isActive ? (
        <div className='delivery-address-item'>
          <Button type='primary'>Deliver Here</Button>
        </div>
      ) : null}
    </div>
  );
};

export default AddressCell;

AddressCell.defaultProps = {};

AddressCell.propTypes = {
  address: PropTypes.object.isRequired,
  selectedAddress: PropTypes.object.isRequired,
  setSelectAddress: PropTypes.func.isRequired,
};
