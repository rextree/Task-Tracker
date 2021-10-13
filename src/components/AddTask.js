import Button from "./Button";
import { useState } from "react";

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [time, setTime] = useState('');
    const [reminder, setReminder] = useState(false);

    const addTheTask = (e) => {
        e.preventDefault();
        if(!text) {
            alert('Please input the task.');
            return
        }

        onAdd({text,time,reminder});
        setText('');
        setTime('');
        setReminder(false);
    }

    return (
        <form className="my-5" onSubmit={addTheTask}>
            <div className="my-3">
                <label htmlFor="input-task">Task Name</label>
                <input id="input-task" type="text" className="border-grey-200 border-2 block w-full rounded mt-2 pl-1" 
                value={text}
                onChange={e => setText(e.target.value)} />
            </div>
            <div className="my-3">
                <label htmlFor="input-time">Day & Time</label>
                <input id="input-time" type="text"  className="border-grey-200 border-2 block w-full rounded mt-2 pl-1"
                value={time}
                onChange={e => setTime(e.target.value)} />
            </div>
            <div className="my-3">
                <label htmlFor="input-time">Reminder</label>
                <input id="input-time" type="checkbox" className="ml-2"
                value={reminder} onChange = {e => setReminder(e.currentTarget.checked)} />
            </div>
            <Button text={'Add the Task'}/>
        </form>
    )
    
}

export default AddTask
