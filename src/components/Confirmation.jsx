import React from 'react';


export default function Confirmation({ visible, message }) {
if (!visible) return null;
return (
<div className="alert alert-success mt-3" role="alert">
<h4 className="alert-heading">Booking Confirmed!</h4>
<p>{message}</p>
</div>
);
}