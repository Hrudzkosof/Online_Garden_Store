import { domain } from "../domain"

export const addDiscount = (new_discount) => {
    fetch(`${domain}/sale/send`,
        {
        method: 'POST',
        headers: {
            'content-type': 'application/json' 
        },
        body: JSON.stringify(new_discount)
         })
    .then(res => res.json())
    .then(json => console.log(json))
}