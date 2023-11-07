import logo from './logo.svg';
import './App.css';
import Nav1 from "./components/Nav1";
import Banner from "./components/Banner2";
import InicioText from "./components/InicioText";
import ServicosText from "./components/ServicosText";
import Categorias from "./components/Categorias";
import Agende from "./components/Agende";
import Historia from "./components/Historia";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Nav1></Nav1>
            <div className="container-fluid">
                <Banner></Banner>
                <InicioText></InicioText>
                <ServicosText></ServicosText>
                <Categorias></Categorias>
                <Agende></Agende>
                <Historia></Historia>
                <Footer></Footer>
            </div>
        </>
    );
}

export default App;
