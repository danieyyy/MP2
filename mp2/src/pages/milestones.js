import Task1 from '../assets/task1.png'
import Task2 from '../assets/task2.png'
import Task3 from '../assets/task3.png'
import Task4 from '../assets/task4.png'
import Task5 from '../assets/task5.png'
import Task6 from '../assets/task6.png'
import Task7 from '../assets/task7.png'
import Task8 from '../assets/task8.png'
import Task9 from '../assets/task9.png'
import Task10 from '../assets/task10.png'

const Milestones = () => {

    return(

       <div className="Milestone">
        
            <div className="main">
                <div className="content">

                <h1 class="titleHead">ABC Tech Inc. Task Tracking</h1>
                    <div class="taskTracking">
                        <div class="task_box"><img src={Task1} alt="task1" id="task1" class="imgIcon"/></div>
                        <div class="task_box"><img src={Task2} alt="task2" id="task2" class="imgIcon"/></div>
                        <div class="task_box"><img src={Task3} alt="task3" id="task3" class="imgIcon"/></div>
                        <div class="task_box"><img src={Task4} alt="task4" id="task4" class="imgIcon"/></div>
                        <div class="task_box"><img src={Task5} alt="task5" id="task5" class="imgIcon"/></div>
                    </div>
                    <div class="taskTracking">
                        <div class="task_box"><img src={Task6} alt="task6" id="task6" class="imgIcon"/></div>
                        <div class="task_box"><img src={Task7} alt="task7" id="task7" class="imgIcon"/></div>
                        <div class="task_box"><img src={Task8} alt="task8" id="task8" class="imgIcon"/></div>
                        <div class="task_box"><img src={Task9} alt="task9" id="task9" class="imgIcon"/></div>
                        <div class="task_box"><img src={Task10} alt="task10" id="task10" class="imgIcon"/></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Milestones

