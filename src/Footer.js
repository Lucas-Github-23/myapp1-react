import './Footer.css'

function Footer(){
    return(
        <footer>
            <div className='footer-content'>
                <p>&copy; 2024 Empresa X. Todos os direitos reservados.</p>
                <ul>
                    <li><a href='#'>Política de Privacidade</a></li>
                    <li><a href='#'>Termos de Uso</a></li>
                    <li><a href='#'>FAQ</a></li>
                </ul>
            </div>

        </footer>
    );
}

export default Footer;