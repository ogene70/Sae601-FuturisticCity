export default function Hero(){

  const img ="/images/landing.webp";
    return(
              <div className="d-flex container-fluid row bg-primary p-0 mb-5 card bg-dark text-white align-items-center" id="hero">
        <img className="p-0 m-0 card-img"
          src={img}
          alt="heroimage"
          style={{ maxHeight: "60vh", aspectRatio: 3 / 2, objectFit: "cover" }}
        />
        <div className="d-flex flex-column card-img-overlay col-5 align-items-start justify-content-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text...</p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    )
}