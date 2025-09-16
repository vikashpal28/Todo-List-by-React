const todokey = "reacttodo";
export const getLocalStoarge = () =>{
    const stored = localStorage.getItem(todokey);
    if(!stored) return [];
    return JSON.parse(stored);
}

export const setLocalStoarge = (task) =>{
    return localStorage.setItem(todokey,JSON.stringify(task));
}