export async function getProductList(searchTerm) {
    
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${ searchTerm ? searchTerm : "" }`);
    const data = await response.json();
    if(!response.ok) {
        throw {message: response.statusText, status:response.status} //eslint-disable-line
    }

    return data
}

export async function getProductDetail(id) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
    const data = await response.json()
    if(!response.ok) {
        throw {message: response.statusText, status:response.status} //eslint-disable-line
    }
    return data
}
export async function getFeaturedProduct() {
    const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    const data = await response.json()
    if(!response.ok) {
        throw {message: response.statusText, status:response.status} //eslint-disable-line
    }
    return data
}