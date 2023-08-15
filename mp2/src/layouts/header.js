import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';


const Header = () => {
    return(
        <header>
            <nav>
                <div className="header__container">
                    
                <Navbar className="bg-body-tertiary" style={{'background-color': 'red'}}>
                    <Container>
                        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end" style={{'background-color': 'red'}}>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                </div>
                
            </nav>
        </header>
    )
}
export default Header;