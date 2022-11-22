export interface ITask {
    id: string;
    taskTitle: string;
    // completed: false
}

export const dummyTaskList: ITask[] = [
    {
        id: new Date().toJSON().toString(),
        taskTitle: 'Dummy Task',
        // completed: false
    }
]