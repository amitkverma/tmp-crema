import React, {useEffect} from 'react';
import AppsHeader from '../../../../@crema/core/AppsContainer/AppsHeader';
import ProductHeader from '../ProductHeader';
import {useDispatch, useSelector} from 'react-redux';
import {VIEW_TYPE} from '../../../../redux/reducers/Ecommerce';
import ProductGrid from './ProductGrid';
import {onGetEcommerceData, setFilters} from '../../../../redux/actions';
import ProductList from './ProductList';
import AppsContent from '../../../../@crema/core/AppsContainer/AppsContent';
import './index.style.less';

const ProductListing = () => {
  const {viewType} = useSelector(({ecommerce}) => ecommerce);
  const dispatch = useDispatch();

  const {ecommerceList, filterData} = useSelector(({ecommerce}) => ecommerce);
  const {loading} = useSelector(({common}) => common);

  const searchProduct = (title) => {
    dispatch(setFilters({...filterData, title}));
  };
  useEffect(() => {
    dispatch(onGetEcommerceData(filterData));
  }, [dispatch, filterData]);

  return (
    <div className='product-list-view'>
      <AppsHeader>
        <ProductHeader viewType={viewType} onChange={searchProduct} />
      </AppsHeader>

      <AppsContent>
        <div className='product-list-main-content'>
          {viewType === VIEW_TYPE.GRID ? (
            <ProductGrid ecommerceList={ecommerceList} loading={loading} />
          ) : (
            <ProductList ecommerceList={ecommerceList} loading={loading} />
          )}
        </div>
      </AppsContent>
    </div>
  );
};

export default ProductListing;
