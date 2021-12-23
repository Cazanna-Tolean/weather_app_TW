const initState=12;
export default function wInfoReducer(preState=initState,action){
    
    const {type,data}=action;
    switch(type){
        case 'refresh':
            console.log(preState,data);
            return data;
        default:
            return preState;       
    }        
}