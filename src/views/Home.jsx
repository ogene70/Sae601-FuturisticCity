
import { useLocation, useNavigate } from "react-router-dom";
import UserController from "../controllers/UserController";
import WarningCard from "../components/Cards/Warningcard";
import ProjectsCard from "../components/Cards/ProjectsCard";
import Nav from "../components/Sections/Nav";
import LeafMap from "../components/Maps/LeafletMap";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state;
  const img = "https://img.freepik.com/photos-gratuite/vue-3d-carte_23-2150472727.jpg";

  const logout = () => new UserController(navigate).deconnexion(userData?.user_id);



  return (
    <>
      <Nav deconnexion={logout} />

      <div className="d-flex container-fluid row bg-primary p-0 mb-5 card bg-dark text-white align-items-center" id="hero">
        <img className="p-0 m-0 card-img"
          src="https://img.freepik.com/photos-gratuite/scene-projet-environnement-3d_23-2148896006.jpg"
          alt="heroimage"
          style={{ maxHeight: "60vh", aspectRatio: 3 / 2, objectFit: "cover" }}
        />
        <div className="d-flex flex-column card-img-overlay col-5 align-items-start justify-content-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text...</p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>

      <h1>Vous êtes connecté {userData?.user_id ?? "USER"}</h1>
         <button className="btn pblue text-white ">+ Signalement </button>
        <LeafMap/>

      <div className="container-fluid flex-column">
        <h3>Alertes importantes</h3>
        <WarningCard src={img} type="Travaux" message={img} />
      </div>

      <div className="container-fluid flex-column">
        <h3>Projets citoyens à venir</h3>
        <ProjectsCard />
      </div>
    </>
  );
}

export default Home;
