import React, { useEffect, useState } from 'react'

const ProductAttribute = (props) => {

    const [height, setHeight] = useState('');
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');

    const {
        productType, setAttributeValue
    } = props;

    const handleChangeValue = (e) => {
        const attributeName = e.target.name;
        const attributeValue = e.target.value;
        if (productType === 'Furniture') {
            if (attributeName === 'height') {
                setHeight(attributeValue);
            } else if (attributeName === 'length') {
                setLength(attributeValue);
            } else if (attributeName === 'width') {
                setWidth(attributeValue);
            }
        } else {
            setAttributeValue({ attributeValue, attributeName });
        }
    }

    useEffect(() => {
        if (productType === 'Furniture') {
            const data = { height, width, length };
            setAttributeValue({ attributeValue: data, attributeName: 'dimentions' });
        }
    }, [height, width, length]);

    const renderDVD = () => {
        return (<div className='attribute' id="DVD">
            <div>
                <label htmlFor='size'>Size{'(MB)'}</label>
                <input type='number' name="size" id='size' className='input-field' onChange={handleChangeValue} />
            </div>
            <p className='product-attribute-description'>Please provide the size of the CD in Mega Bytes.</p>
        </div>)
    }

    const renderBook = () => {
        return (<div className='attribute' id="Book">
            <div>
                <label htmlFor='weight'>Weight{'(KG)'}</label>
                <input type='number' name="weight" id='weight' className='input-field' onChange={handleChangeValue} />
            </div>
            <p className='product-attribute-description'>Please provide the weight of the book in Kilogram.</p>
        </div>)
    }

    const renderFurniture = () => {
        return (<>
            <div className='attribute' id="Furniture">
                <div>
                    <label htmlFor='height'>Height{'(CM)'}</label>
                    <input type='number' name="height" id='height' className='input-field' value={height} onChange={handleChangeValue} />
                </div>

                <div>
                    <label htmlFor='width'>Width{'(CM)'}</label>
                    <input type='number' name="width" id='width' className='input-field' value={width} onChange={handleChangeValue} />
                </div>

                <div>
                    <label htmlFor='length'>Length{'(CM)'}</label>
                    <input type='number' name="length" id='length' className='input-field' value={length} onChange={handleChangeValue} />
                </div>
                <p className='product-attribute-description'>Please provide dimentions in format HxWxL.</p>

            </div>
        </>
        )
    }

    switch (productType) {
        case 'Book': { return renderBook(); }
        case 'DVD': { return renderDVD(); }
        case 'Furniture': { return renderFurniture(); }
        default: { return <div>Select a product type</div> }
    }
}

export default ProductAttribute