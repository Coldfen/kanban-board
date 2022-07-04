import {Draggable} from "react-beautiful-dnd";
import {Card} from "@material-ui/core";
import Task from "./Task";
import {observer} from "mobx-react-lite";

function getItemStyle(draggableStyle) {
    return {
        padding: 0,
        marginBottom: 5,
        ...draggableStyle
    }
}

function Column({section}) {

    return (
        <div>
            {section?.tasks?.map((task, index) => {
                return (
                    <Draggable draggableId={task.id} key={task.id} index={index}>
                        {(provided) => (
                            <Card
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(provided.draggableProps.style)}
                                >
                                <Task task={task} />
                            </Card>
                        )}
                    </Draggable>
                )
            })}
        </div>
    )
}

export default observer(Column)