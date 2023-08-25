import Dashboard from '../assets/dashboard.png'
import Modules from '../assets/modules.png'
import Milestones from '../assets/milestones.png'
import Database from '../assets/database.png'
import Feedback from '../assets/feedback.png'
import { Link } from 'react-router-dom'

const Home = () => {

    return(

        <div className="Home">

            <div class="main">
                <div class="content">
                    <h1 class="content__title">
                        Employee Onboarding and Training System
                    </h1>
                    <p class="content__welcome">
                        Welcome aboard, Jay!
                    </p>
                    <p class="content__text">
                        This online onboarding will help you start your journey with ABC Tech Inc. Take a deep breath and relax... because we are about to take you to a joyful ride as you learn more about our company, make new connections, and feel the excitement as we welcome you in our team!
                    </p>
                    <div class="content__iconContainer">
                        <div class="icon__dashboard iconItem"><Link to="/dashboard" class="iconImg"><img src={Dashboard} alt="" id="icon__dashboard" class="icon__unit"/></Link></div>
                        <div class="icon__modules iconItem"><Link to="/modules" class="iconImg"><img src={Modules} alt="" id="icon__modules" class="icon__unit"/></Link></div>
                        <div class="icon__milestones iconItem"><Link to="/milestones" class="iconImg"><img src={Milestones} alt="" id="icon__milestones" class="icon__unit"/></Link></div>
                        <div class="icon__database iconItem"><Link to="/database" class="iconImg"><img src={Database} alt="" id="icon__database" class="icon__unit"/></Link></div>
                        <div class="icon__feedback iconItem"><Link to="/feedback" class="iconImg"><img src={Feedback} alt="" id="icon__feedback" class="icon__unit"/></Link></div>
                    </div>
                    {/* <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card> */}
                </div>
            </div>

        </div>

    )

}

export default Home