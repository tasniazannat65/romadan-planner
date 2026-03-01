export const loadState = ()=> {
    try {
        
        const serializedState = localStorage.getItem('romadanState');
        if(!serializedState){
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

export const saveState = (state)=> {
   const serializedState = JSON.stringify(state);
   localStorage.setItem('romadanState', serializedState);


}