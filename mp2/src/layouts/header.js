import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';


const Header = () => {

    return(
        <header>
            <nav>
                <div className='header__navbar'>
                    
                <Navbar className="bg-body-tertiary header__navbar">
                    <Container className='header__navbar'>
                        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
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