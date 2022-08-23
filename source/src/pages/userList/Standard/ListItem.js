import React from 'react';
import {Avatar, Button, Card} from 'antd';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {FaFacebookF} from 'react-icons/fa';
import {
  GlobalOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

const ListItem = (props) => {
  const {user} = props;
  return (
    <Card className='user-standard-card item-hover'>
      <div className='user-standard-card-inner'>
        <div className='user-standard-card-header'>
          <div className='user-standard-card-header-avatar'>
            <Avatar src={user.image} />
          </div>
          <h3 className='text-truncate'>{user.name}</h3>
          <span className='user-standard-chip'>{`@${user.charge}/Hour`}</span>
        </div>

        <div className='user-standard-content'>
          <div className='user-standard-content-header'>
            <div className='user-standard-content-header-contact'>
              <div className='user-standard-content-header-contact-item'>
                <MailOutlined />
                <span>{user.email}</span>
              </div>

              <div className='user-standard-content-header-contact-item'>
                <GlobalOutlined />
                <span>{user.website}</span>
              </div>

              <div className='user-standard-content-header-contact-item'>
                <PhoneOutlined />
                <span>{user.phone}</span>
              </div>
            </div>

            <div className='user-standard-content-header-social'>
              <span className='user-standard-content-header-social-item'>
                <FaFacebookF className='pointer' />
              </span>
              <span className='user-standard-content-header-social-item'>
                <LinkedinOutlined className='pointer' />
              </span>
              <span className='user-standard-content-header-social-item'>
                <InstagramOutlined className='pointer' />
              </span>
              <span className='user-standard-content-header-social-item'>
                <TwitterOutlined className='pointer' />
              </span>
            </div>
          </div>

          <p className='user-standard-para'>{user.information}</p>

          <div className='user-standard-footer'>
            <div className='user-standard-footer-chip-view'>
              {user.skills.map((skill, index) => {
                return (
                  <span
                    key={index}
                    // className={clsx('user-morden-footer-chip', {dark :  theme.palette.type === 'dark'})}
                    className='user-standard-footer-chip'>
                    {skill}
                  </span>
                );
              })}
            </div>

            <div className='user-standard-footer-action'>
              <Button type='primary' className='user-standard-footer-hire-btn'>
                <IntlMessages id='common.hire' />
              </Button>
              <Button className='user-standard-footer-remove-btn'>
                <IntlMessages id='mailApp.remove' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ListItem;

ListItem.propTypes = {
  user: PropTypes.object.isRequired,
};
