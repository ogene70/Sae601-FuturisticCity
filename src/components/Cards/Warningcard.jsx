export default function WarningCard({src,icon,type,message,infos}){
    return(
    <div class="btn card col-3 m-5" style={{maxidth:"540px;"}}  data-bs-toggle="modal" data-bs-target="#WarnModal">
  <div class="row g-0">
    <div class="col-md-4 bg-dark">
        {/* leaflet card here */}
      <img src={src} class="img-fluid rounded-start " alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <span className="row">{icon}<h5 class="card-title">{type+" : "+message}</h5></span>
        
        <p class="card-text">{infos}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>

<div class="modal fade" id="WarnModal" tabindex="-1" aria-labelledby="WarningModalLabel" aria-hidden="true" >
  <div class="modal-dialog" style={{maxWidth:"70vw"}}>
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{type+" : "+message}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"> 
        {infos}
        <div className="container-fluid d-flex flex-column align-items-start"> <h4>titre section</h4><div className="col-12 bg-primary" style={{height:"30vh"}}> CARTE EMPLACEMENT</div> </div>
        <div className="container-fluid d-flex flex-column align-items-start"> <h4>titre section</h4><div className="col-12 bg-primary" style={{height:"30vh"}}></div> </div>
        <div className="container-fluid d-flex flex-column align-items-start"> <h4>titre section</h4><div className="col-12 bg-primary" style={{height:"30vh"}}></div> </div>
        <div className="container-fluid d-flex flex-column align-items-start"> <h4>titre section</h4><div className="col-12 bg-primary" style={{height:"30vh"}}></div> </div>
      </div>
    
    </div>
  </div>
</div>
</div>
)
         
    
}