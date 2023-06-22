import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Product = (props) => {

    const { selectedProducts, checkProduct, data } = props;
    const {
        attributeName,
        attributeValue,
        dimentions,
        id,
        name,
        price,
        sizeMB,
        sku,
        weightKG
    } = data;

    const handleAttribute = () => {
        switch (attributeName) {
            case 'Book': {
                return `${weightKG} KG`;
            } case 'DVD': {
                return `${sizeMB} MB`;
            } case 'Furniture': {
                return `${dimentions} CM`;
            } default: {
                return null;
            }
        }
    }

    return (
        <div className='product-wrapp'>
            <div className='delete-checkbox-wrapp'>
                <label
                    htmlFor={`check${id}`}
                    className={selectedProducts.includes(id) ? 'delete-checkbox checked' : 'delete-checkbox'}
                >
                    {selectedProducts.includes(id) ? <FaCheck /> : null}
                </label>
                <input type='checkbox' id={`check${id}`} className='checkBox' onChange={() => checkProduct(id)} />
            </div>
            <h5 className='product-sku'>{sku}</h5>
            <h5 className='product-name'>{name}</h5>
            <h5 className='product-price'>{parseInt(price, 10).toFixed(2)}$</h5>
            <p className='product-attribute'>{attributeValue}: <span>{handleAttribute()}</span></p>

        </div>
    )
}

export default Product