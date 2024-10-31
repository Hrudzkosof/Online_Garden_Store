export const addOrder = (new_order) => {
    fetch('http://localhost:3333/order/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(new_order)
    });
};