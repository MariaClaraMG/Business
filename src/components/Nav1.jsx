import style from "./Nav1.module.css"

function Nav1() {
    return (
        <nav className="navbar navbar-expand-lg " style={{padding: "15px"}}>
            <div className="container">

                <a className={"navbar-brand " + style.navbarBrand} href="#Banner">
                    <img src="/img/logoproj.png" alt="Logo" width={"50"} height={"50"}
                         className="d-inline-block align-text-top"/>
                    <strong>Business</strong>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" style={{textAlign: "center"}} id="navbarNav">
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <a className="nav-link" href="#Banner">INÍCIO </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#Produtos">SERVIÇOS</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#Contato">FEEDBACK</a>
                        </li>

                        <li className="nav-item">
                            <a className="btn bnt-primary verde"
                               href="https://api.whatsapp.com/send/?phone=5518981342046&text=Quero%20comprar%20um%20lanche&type=phone_number&app_absent=0"
                               role="button">
                                    <strong>AGENDE</strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav1