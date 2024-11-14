import { domain } from "../domain";

export const addOrder = (new_order) => {
    fetch(`${domain}/order/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(new_order)
    });
};