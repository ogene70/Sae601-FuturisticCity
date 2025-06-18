const defaultImg="https://img.freepik.com/photos-gratuite/smiley-coup-moyen-homme-posant_23-2148920100.jpg?ga=GA1.1.1421828729.1743521337&semt=ais_hybrid&w=740";
export default function ProjectsCard({src,srcs,title,description}) {
    return(
        <div class="card btn col-3 m-5"  data-bs-toggle="modal" data-bs-target="#ProjectsModal" style={{}}>
  <img src={src??defaultImg}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title??"Card Title"}</h5>
    <p class="card-text">{description??"Some quick example text to build on the card title and make up the bulk of the card's content."}</p>
    <a  class="btn btn-primary">Go somewhere</a>

    <div class="modal fade" id="ProjectsModal" tabindex="-1" aria-labelledby="WarningModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {description}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div>

    )
}