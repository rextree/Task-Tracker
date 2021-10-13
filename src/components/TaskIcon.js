import {FaTimes} from "react-icons/fa";
import { IconContext } from "react-icons";

const TaskIcon = ({clickDelete ,task:{id}}) => {
    return (
        <IconContext.Provider value={{ className: 'text-red-700 cursor-pointer h-10' }}>
            <span>
                <FaTimes onClick ={()=>clickDelete(id) }/>
            </span>
        </IconContext.Provider>
    )
}

export default TaskIcon
