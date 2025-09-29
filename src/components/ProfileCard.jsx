import React from 'react';


export default function ProfileCard({ profile, onBook }) {
const { name, role, location, price, img } = profile;


return (
<div className="card mx-1" style={{ maxWidth: '100%' }}>
{/* <img src={img} className="card-img-top" alt={name} style={{ height: '260px', objectFit: 'cover' }} /> */}
<div className="card-body text-center">
<h5 className="card-title">{name}</h5>
<p className="card-text">{role} • {location}</p>
<div className="mb-2 fw-bold text-danger">${price}/hour</div>
<div className="d-flex justify-content-around">
<button className="btn btn-success" title="Call"><i className="fas fa-phone"/></button>
<button className="btn btn-primary" title="Audio"><i className="fas fa-phone-alt"/></button>
<button className="btn btn-warning text-white" onClick={() => onBook(profile)}>Book Now</button>
</div>
</div>
</div>
);
}