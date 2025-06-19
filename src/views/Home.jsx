
import { useLocation, useNavigate } from "react-router-dom";
import UserController from "../controllers/UserController";
import WarningCard from "../components/Cards/Warningcard";
import ProjectsCard from "../components/Cards/ProjectsCard";
import Nav from "../components/Sections/Nav";
import LeafMap from "../components/Maps/LeafletMap";
import Hero from "../components/Sections/Hero";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = location.state;
  const img = "https://img.freepik.com/photos-gratuite/vue-3d-carte_23-2150472727.jpg";

  const logout = () => new UserController(navigate).deconnexion(userData?.user_id);



  return (
    <>
      <Nav deconnexion={logout} />
        <Hero/>
      <h1>Vous êtes connecté {userData?.user_id ?? "USER"}</h1>
         <button className="btn p-3 m-3 col-1 pblue text-white ">+ AjouteSignalement </button>
        <LeafMap/>
      <div className="container-fluid flex-column">
        <h3>Ca se passe en ce moment</h3>
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
