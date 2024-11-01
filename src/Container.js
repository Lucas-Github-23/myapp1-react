//import './Container.css'
import Menu from "./Menu"
import Footer from "./Footer";
import QuemSomos from "./QuemSomos";

function Container() {
    return (
        <div>
            <header>
                <h1>Cabeçalho</h1>
            </header>
            <nav>
                <Menu />
            </nav>
            <main>
                <QuemSomos />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>

    );
}
export default Container;