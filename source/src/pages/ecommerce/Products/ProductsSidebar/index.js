import React, {useEffect, useState} from 'react';
import ProductsCategory from './ProductsCategory';
import PriceSelector from './PriceSelector';
import AppList from '../../../../@crema/core/AppList';
import CheckedCell from './CheckedCell';
import {
  BrandData,
  DiscountList,
  IdealFor,
  ProductColors,
} from '../../../../@crema/services/db/ecommerce/ecommerceData';
import RatingCell from './RatingCell';
import {useDispatch, useSelector} from 'react-redux';
import {setFilters} from '../../../../redux/actions/Ecommerce';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';
import AppGrid from '../../../../@crema/core/AppGrid';
import ColorCell from './ColorCell';
import './index.style.less';

const ProductSidebar = () => {
  const dispatch = useDispatch();
  const {filterData} = useSelector(({ecommerce}) => ecommerce);
  const [selectedBrand, setSelectedBrand] = useState(filterData.brand);
  const [selectedFor, setSelectedFor] = useState(filterData.ideaFor);
  const [selectedDiscount, setSelectedDiscount] = useState(filterData.discount);
  const [selectedColor, setSelectedColor] = useState(filterData.color);
  const [customerRating, setCustomerRating] = useState(filterData.rating);

  useEffect(() => {
    dispatch(
      setFilters({
        title: filterData.title,
        brand: selectedBrand,
        ideaFor: selectedFor,
        discount: selectedDiscount,
        color: selectedColor,
        rating: customerRating,
      }),
    );
  }, [
    dispatch,
    filterData.title,
    selectedBrand,
    selectedFor,
    selectedDiscount,
    selectedColor,
    customerRating,
  ]);

  const onSelectBrand = (brandId) => {
    if (selectedBrand.some((brand) => brand === brandId)) {
      setSelectedBrand(selectedBrand.filter((brand) => brand !== brandId));
    } else {
      setSelectedBrand(selectedBrand.concat(brandId));
    }
  };

  const onSelectFor = (id) => {
    if (selectedFor.some((item) => item === id)) {
      setSelectedFor(selectedFor.filter((item) => item !== id));
    } else {
      setSelectedFor(selectedFor.concat(id));
    }
  };

  const onSelectDiscount = (id) => {
    if (selectedDiscount.some((item) => item === id)) {
      setSelectedDiscount(selectedDiscount.filter((item) => item !== id));
    } else {
      setSelectedDiscount(selectedDiscount.concat(id));
    }
  };

  const onSelectColor = (id) => {
    if (selectedColor.some((item) => item === id)) {
      setSelectedColor(selectedColor.filter((item) => item !== id));
    } else {
      setSelectedColor(selectedColor.concat(id));
    }
  };

  const onSelectRating = (id) => {
    if (customerRating.some((item) => item === id)) {
      setCustomerRating(customerRating.filter((item) => item !== id));
    } else {
      setCustomerRating(customerRating.concat(id));
    }
  };

  return (
    <AppScrollbar>
      <div className='product-sidebar'>
        <h3 className='product-sidebar-title'>Filter By</h3>

        <div className='product-sidebar-item'>
          <h5 className='product-sidebar-item-title'>Categories</h5>
          <ProductsCategory />
        </div>
        <div className='product-sidebar-item'>
          <h5 className='product-sidebar-item-title'>Price</h5>
          <PriceSelector />
        </div>
        <div className='product-sidebar-item'>
          <h5 className='product-sidebar-item-title'>Brand</h5>
          <AppList
            data={BrandData}
            renderItem={(data) => (
              <CheckedCell
                key={data.id}
                data={data}
                onChange={onSelectBrand}
                selected={selectedBrand}
              />
            )}
          />
        </div>
        <div className='product-sidebar-item'>
          <h5 className='product-sidebar-item-title'>Ideal For</h5>
          <AppList
            data={IdealFor}
            renderItem={(data) => (
              <CheckedCell
                key={data.id}
                data={data}
                onChange={onSelectFor}
                selected={selectedFor}
              />
            )}
          />
        </div>

        <div className='product-sidebar-item'>
          <h5 className='product-sidebar-item-title'>Discount</h5>
          <AppList
            data={DiscountList}
            renderItem={(data) => (
              <CheckedCell
                key={data.id}
                data={data}
                onChange={onSelectDiscount}
                selected={selectedDiscount}
              />
            )}
          />
        </div>

        <div className='product-sidebar-item'>
          <h5 className='product-sidebar-item-title'>Color</h5>
          <AppGrid
            data={Object.values(ProductColors)}
            responsive={{
              xs: 5,
              sm: 5,
              md: 5,
              lg: 5,
              xl: 5,
              xxl: 5,
            }}
            itemPadding={1}
            renderItem={(data, index) => (
              <ColorCell
                key={'color-' + index}
                data={data}
                selected={selectedColor}
                onChange={onSelectColor}
              />
            )}
          />
        </div>

        <div className='product-sidebar-item'>
          <h5 className='product-sidebar-item-title'>Customer Ratings</h5>
          <AppList
            data={[5, 4, 3, 2, 1]}
            renderItem={(data) => (
              <RatingCell
                key={data}
                data={data}
                onChange={onSelectRating}
                selected={customerRating}
              />
            )}
          />
        </div>
      </div>
    </AppScrollbar>
  );
};

export default ProductSidebar;
