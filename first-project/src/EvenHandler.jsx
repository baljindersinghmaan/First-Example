import React, {useState} from "react"

function EventHandler(){
    const [name, setName] = useState("Guest");
    const [payment, setPayment] = useState();
    const [shipping, setShipping] = useState();

    function handleShipping(event){
        setShipping(event.target.value)
    }
    
    function handleNameChange(event){
        setName(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    return(<div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>
        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select Payment</option>
            <option value="Visa">Visa</option>
            <option value="Debit">Debit</option>

        </select>

        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Delevery" 
            onChange={handleShipping} checked={shipping === "Delevery"}/>
            Delevery
        </label>
        <label>
        <input type="radio" value="pick-up" 
            onChange={handleShipping} checked={shipping === "pick-up"}/>
            Pick-up
            </label>

            <p>Shipping: {shipping}</p>
        
        </div>);
}
export default EventHandler