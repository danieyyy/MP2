import DashboardImg from '../assets/dashboard.png'
import ModulesImg from '../assets/modules.png'
import MilestonesImg from '../assets/milestones.png'
import DatabaseImg from '../assets/database.png'
import FeedbackImg from '../assets/feedback.png'
import Dashboard from './dashboard'
import Modules from './modules'
import Milestones from './milestones'
import Database from './database'
import Feedback from './feedback'

const Home = () => {
    // const userCredentials = 

    return(

        <div className="Home">

            <div className="main">
                <div className="content">
                    <h1 className="content__title">
                        Employee Onboarding and Training System
                    </h1>
                    <p className="content__welcome">
                        Welcome aboard, Jay!
                    </p>
                    <p className="content__text">
                        This online onboarding will help you start your journey with ABC Tech Inc. Take a deep breath and relax... because we are about to take you to a joyful ride as you learn more about our company, make new connections, and feel the excitement as we welcome you in our team!
                    </p>
                    <div className="content__iconContainer">
                        <div className="icon__dashboard iconItem"><a href={Dashboard} className="iconImg"><img src={DashboardImg} alt="" id="icon__dashboard" className="icon__unit"/></a></div>
                        <div className="icon__modules iconItem"><a href={Modules} className="iconImg"><img src={ModulesImg} alt="" id="icon__modules" className="icon__unit"/></a></div>
                        <div className="icon__milestones iconItem"><a href={Milestones} className="iconImg"><img src={MilestonesImg} alt="" id="icon__milestones" className="icon__unit"/></a></div>
                        <div className="icon__database iconItem"><a href={Database} className="iconImg"><img src={DatabaseImg} alt="" id="icon__database" className="icon__unit"/></a></div>
                        <div className="icon__feedback iconItem"><a href={Feedback} className="iconImg"><img src={FeedbackImg} alt="" id="icon__feedback" className="icon__unit"/></a></div>
                    </div>
                </div>
            </div>

        </div>

    )

}

export default Home