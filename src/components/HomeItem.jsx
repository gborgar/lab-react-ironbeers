function HomeItem({ imgBeers, title, description }) {
  return (
    <div className="card w-50 mb-3">
      <img src={imgBeers} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>  
  );
}

export default HomeItem;