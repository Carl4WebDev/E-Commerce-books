
function getSessionData() {
    const cbid = JSON.parse(sessionStorage.getItem("cbid"))
    const token = JSON.parse(sessionStorage.getItem("token"))

    return {token: token, id: cbid}
}

export async function getUser() {

    
    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${getSessionData().token}`}
        
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${getSessionData().id}`, requestOptions);
    if(!response.ok) {
        throw {message: response.statusText, status:response.status} //eslint-disable-line
    }
    const data = await response.json();
    return data
}


export async function getUserOrders() {

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${getSessionData().id}`, {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${getSessionData().token}`}
    });

    if(!response.ok) {
        throw {message: response.statusText, status:response.status} //eslint-disable-line
    }
    const data = await response.json();
    return data
}


export async function createOrder( cartList, total, user) {

    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${getSessionData().token}` },
        body: JSON.stringify(order)
    });
    if(!response.ok) {
        throw {message: response.statusText, status:response.status} //eslint-disable-line
    }
    const data = await response.json();

    return data;
}