import Logo from '../assets/logo.png'
import Form from 'react-bootstrap/Form';

const Login = () => {

    return(

        <div className="Login">

            <div className='login__main'>
                <img src={Logo} alt="logo" class="logo"/>
                <p class="logoName">ABC Tech Inc.</p>
                <Form className='fields'>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Enter email" className='ui' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Password" className='ui' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupSubmit">
                        <Form.Control type="submit" placeholder="Password" className='ui' />
                    </Form.Group>
                </Form>
            </div>

        </div>

    )

}

export default Login