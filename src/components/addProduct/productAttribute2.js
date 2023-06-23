import React, { Component } from 'react'

class ProductAttribute extends Component {
    constructor(props) {
        super(props);
        this.state = { height: '', length: '', width: '' };
    }

    handleChangeValue = (e) => {
        const attributeName = e.target.name;
        const attributeValue = e.target.value;
        if (this.props.productType === 'Furniture') {

            if (attributeName === 'height') {
                this.setState({ height: attributeValue });
            } else if (attributeName === 'length') {
                this.setState({ length: attributeValue });
            } else if (attributeName === 'width') {
                this.setState({ width: attributeValue });
            }
            
            this.props.setAttributeValue({ attributeValue: this.state, attributeName: 'dimentions' });
        } else {
            this.props.setAttributeValue({ attributeValue, attributeName });
        }
        console.log(this.state);
        console.log(attributeValue);
    }

    renderDVD = () => {
        return (<div className='attribute' id="DVD">
            <div>
                <label htmlFor='size'>Size{'(MB)'}</label>
                <input type='number' name="size" id='size' className='input-field' onChange={this.handleChangeValue} />
            </div>
            <p className='product-attribute-description'>Please provide the size of the CD in Mega Bytes.</p>
        </div>)
    }

    renderBook = () => {
        return (<div className='attribute' id="Book">
            <div>
                <label htmlFor='weight'>Weight{'(KG)'}</label>
                <input type='number' name="weight" id='weight' className='input-field' onChange={this.handleChangeValue} />
            </div>
            <p className='product-attribute-description'>Please provide the weight of the book in Kilogram.</p>
        </div>)
    }

    renderFurniture = () => {
        return (<>
            <div className='attribute' id="Furniture">
                <div>
                    <label htmlFor='height'>Height{'(CM)'}</label>
                    <input type='number' name="height" id='height' className='input-field' value={this.state.height} onChange={this.handleChangeValue} />
                </div>

                <div>
                    <label htmlFor='width'>Width{'(CM)'}</label>
                    <input type='number' name="width" id='width' className='input-field' value={this.state.width} onChange={this.handleChangeValue} />
                </div>

                <div>
                    <label htmlFor='length'>Length{'(CM)'}</label>
                    <input type='number' name="length" id='length' className='input-field' value={this.state.length} onChange={this.handleChangeValue} />
                </div>
                <p className='product-attribute-description'>Please provide dimentions in format HxWxL.</p>

            </div>
        </>
        )
    }

    render() {
        switch (this.props.productType) {
            case 'Book': { return this.renderBook(); }
            case 'DVD': { return this.renderDVD(); }
            case 'Furniture': { return this.renderFurniture(); }
            default: { return <div>Select a product type</div> }
        }
    }
}

export default ProductAttribute