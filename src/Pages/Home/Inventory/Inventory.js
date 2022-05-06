import React from 'react';
import './Inventory.css'



const Inventory = ({ inventory }) => {
    const { _id, img, name, price, supplier, quantity, description } = inventory;

    const sliceDescription = description.slice(0, 200);

    return (
        <div className='inventory'>
            <img className='mx-auto d-block img-fluid' src={img} alt="" />
            <h4 className='inventory-text mt-4'>{name}</h4>
            <h5 className='inventory-text'>Per Carton: ${price}</h5>
            <h6 className='inventory-text'>Quantity Availble: {quantity} Carton</h6>
            <p className='inventory-text'>{sliceDescription}</p>
            <h6 className='inventory-text'>Supplier: <span className='text-primary'>{supplier}</span></h6>


            <div>
                <button className='inventory-button'>ADD ENTENTOY</button>
            </div>


        </div>
    );
};

export default Inventory;