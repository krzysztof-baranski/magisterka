import React from 'react';
import Spinner from '../UI/Spinner';

const enterAddress = (props) => {

    let addressForm = (

        <form>
            <label>Country:
                <input type="text" name="country" placeholder="Enter country name" onChange={(e) => props.onChange(e, 'country')} />
            </label>
            <label>ZIP Code:
                <input type="number" disabled={!props.address.country} name="zipCode" placeholder="Enter ZIP code" onChange={(e) => props.onChange(e, 'zipCode')} />
            </label>
            <label>City:
                <input type="text" disabled={!props.address.zipCode} name="city" placeholder="Enter city name" onChange={(e) => props.onChange(e, 'city')} />
            </label>
            <label>Street:
                <input type="text" disabled={!props.address.city} name="street" placeholder="Enter street" onChange={(e) => props.onChange(e, 'street')} />
            </label>
            <label>Number:
                <input type="text" disabled={!props.address.street} name="number" placeholder="Enter house number" onChange={(e) => props.onChange(e, 'number')} />
            </label>
            <span className="span-enter-address">
                <button className="button-enter-address" 
                    onClick={(e) => props.onCancel(e)}>Cancel
                </button>
                <button className="button-enter-address" 
                    disabled={!(props.address.country || props.address.zipCode)} 
                    onClick={(e) => props.onSubmit(e)}>Confirm
                </button>
            </span>
        </form>
    );

    if (props.loading) {
        addressForm = <Spinner />;
    }

    return (
        <div className="enter-address">{addressForm}</div>
    );
}

export default enterAddress;