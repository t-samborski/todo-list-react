export const getExampleTasks = async () => {

    const response = await fetch("/todo-list-react/exampleTask.json");

    if (!response.ok) {
        new Error(response.statusText);
    }
    
    return await response.json();
};