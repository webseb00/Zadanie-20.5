import React from 'react';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <img className="country-logo img-fluid" src={props.country.imageUrl} alt="country flag" />
    </div>
);

export default CountryFlag;