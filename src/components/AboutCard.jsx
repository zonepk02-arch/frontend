export default function AboutCard({ name, description, image }) {
  return (
    <div className="card shadow-sm h-100 text-center border-0">
      {/* <img 
        src={image} 
        className="card-img-top" 
        alt={name} 
        style={{ objectFit: "cover", height: "220px" }}
      /> */}
      <div className="card-body">
        <h5 className="card-title text-danger fw-bold">{name}</h5>
        <p className="card-text text-muted">{description}</p>
      </div>
    </div>
  );
}
