export interface ITask {
    id: Number;
    taskTitle: string;
    isCompleted: boolean
}

export const dummyTaskList: ITask[] = [
    {
        id: new Date().getMilliseconds(),
        taskTitle: 'Dummy Task',
        isCompleted: false
    }
]

export enum PageEnum {
    list,
    add,
    edit,
    todopage,
    registerpage
}