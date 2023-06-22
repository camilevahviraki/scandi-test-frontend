const ValidateFields = (props) => {

    let message = null;
    let status = false;

    const { name, sku, price, attributeName, attributeValue, sizeMB, weightKG, dimentions } = props;

    let dim = { height: '', width: '', length: '' }
    if (dimentions) {
        dim = dimentions;
    }
    const { length, width, height } = dim;

    if (name === '' || sku === '' || price === '' || attributeName === '' || attributeValue === '') {
        message = 'Please! Compete all fields.'
        status = false;
    } else if (attributeName !== 'Furniture' && sizeMB === null && weightKG === null) {
        message = 'Please! Input product attributes values';
        status = false;
    } else if (attributeName === 'Furniture' && (height.length === 0 || width.length === 0 || length.length === 0)) {
        message = 'Please!input all product dimentions fields to match the format HxWxL';
        status = false;
    } else {
        status = true;
        message = null;
    }

    return (
        { message, status }
    )

}

export default ValidateFields;