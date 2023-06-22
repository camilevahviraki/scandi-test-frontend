import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addProduct, clearResponse } from '../../redux/addProductReducer';
import { TbLoader3 } from 'react-icons/tb';
import ProductAttribute from './productAttribute';
import ValidateFields from './validateFields';
import './addProduct.css';

const AddProduct = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addProductResponse = useSelector(state => state.addProductReducer);

    const [productType, setProductType] = useState('Book');
    const [attribute, setAttributeValue] = useState({ attributeValue: null, attributeName: null });
    const [message, setMessage] = useState(null);
    const [showLoader, setLoader] = useState(false);

    const handleProductType = (e) => {
        setProductType(e.target.value);
    }

    const handleAttributeValue = (data) => {
        setAttributeValue(data);
    }

    const submitProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const sku = e.target.sku.value;
        const price = e.target.price.value;
        const attributeName = productType;
        const attributeValue = attribute.attributeName;
        let sizeMB = null;
        let weightKG = null;
        let dimentions = { height: '', width: '', length: '' };

        if (attribute.attributeValue) {
            if (productType === 'Book' && attribute.attributeValue.length > 0) {
                weightKG = attribute.attributeValue;
            } else if (productType === 'DVD' && attribute.attributeValue > 0) {
                sizeMB = attribute.attributeValue;
            } else if (attribute.attributeValue && productType === 'Furniture') {
                dimentions = attribute.attributeValue;
            }
        }

        const product = { name, sku, price, attributeName, attributeValue, sizeMB, weightKG, dimentions };

        console.log(product);

        const checkFields = ValidateFields(product);
        if (checkFields.status) {
            const dimentions = product.dimentions;
            product.dimentions = `${dimentions.height}x${dimentions.width}x${dimentions.length}`;
            setMessage(checkFields.message);
            setLoader(true);
            dispatch(addProduct(product));
        } else {
            setMessage(checkFields.message);
        };

    }

    useEffect(() => {
        if (addProductResponse.message) {
            navigate("../");
            dispatch(clearResponse());
        }
    }, [addProductResponse])

    const cancelSubmit = () => {
        navigate("../");
    }

    return (
        <div className='products_page'>

            <form id="product_form" onSubmit={submitProduct}>

                <div className='header-wrapp' id='add-product-header'>
                    <h4>Product Add</h4>
                    <div className='buttons-wrapp'>
                        <button className='button-add' id="add-product-button" type='submit'>{showLoader ? <TbLoader3 className='loader' /> : 'Save'}</button>
                        <button
                            className='button-add'
                            id="#cancel-button"
                            onClick={cancelSubmit}
                        >Cancel</button>
                    </div>
                </div>

                <div className='input-wrapp'>
                    <label htmlFor='sku'>SKU</label>
                    <input type='text' id='sku' name='sku' className='input-field' />
                </div>
                <div className='input-wrapp'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' className='input-field' />
                </div>
                <div className='input-wrapp'>
                    <label htmlFor='price'>Price{' ($)'}</label>
                    <input type='number' id='price' name='price' className='input-field' />
                </div>

                <div className='input-wrapp'>
                    <label htmlFor='productType'>Product Type</label>
                    <select id="producType" name='productType' onChange={handleProductType}>
                        <option value="Book">Book</option>
                        <option value="DVD">DVD</option>
                        <option value="Furniture">Furniture</option>
                    </select>
                </div>

                <ProductAttribute
                    productType={productType}
                    setAttributeValue={handleAttributeValue}
                />

                <p className='error-message'>{message}</p>

            </form>
        </div>
    )
}

export default AddProduct;