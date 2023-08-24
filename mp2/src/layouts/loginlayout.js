import Footer from './footer'
import Content from './content'
import { Outlet } from 'react-router-dom'


const LoginLayout = () =>{

    return(
        <div className="login-main">
        
            <Content>
            </Content><Outlet />
            
          <Footer></Footer>
          
        </div>
    )
}

export default LoginLayout