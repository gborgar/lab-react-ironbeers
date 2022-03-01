function Beer({ beerId, name, imageUrl, attenuationLevel, tagline, firstBrewed, contributedBy, description }) {
  return (
    <>
       <div className="text-center p-5" key={beerId}>
          <img className="w-30 mb-5" src={imageUrl} 
            alt={beerId} 
            width="100"
          />
          <div className="d-flex">
            <h3 className="col-6 align-self-start">{name}</h3>
            <h3 style={{ color: "gray" }} className="col-6 align-self-end">{attenuationLevel}</h3>
          </div>
          <div className="d-flex">
            <span style={{ color: "gray", fontSize: 14, fontWeight: 'bold' }} className="col-6 align-self-start">{tagline}</span>
            <span style={{ color: "black", fontSize: 14, fontWeight: 'bold' }} className="col-6 align-self-end">{firstBrewed}</span>
          </div>
          <div className="d-flex p-4">
            <p className="col-12">{description}</p>
          </div>
          <div className="d-flex p-4">
            <small style={{ color: "gray", fontWeight: 'bold' }} className="col-6 align-self-start">{contributedBy}</small>
          </div>
        </div>
    </>
  );
}
export default Beer;