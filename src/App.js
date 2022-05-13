import React , {useState} from 'react';


const App = () => {
    const [temp,settemp]= useState(0)
    const [color , setcolor] = useState('cold')
    const increase = ()=>{
        if (temp ===30){return;}
        const newtemp = temp+1;
        if (newtemp > 0){
            setcolor("hot")}
        settemp(newtemp)
    }
    const Deincrease = ()=>{
        if (temp ===-30){return;}
        const newtemp = temp-1;
        if (newtemp <= 0){
            setcolor("cold")}
        settemp(newtemp)
    }


    return (
        <div className={"app-container"}>
            <div className={"temperature-display-container"}>
                <div className={`temperature-display ${color}`}>{temp} c</div>
            </div>
            <div className={"button-container"}>
                <button onClick={increase}>+</button>
                <button onClick={Deincrease}>-</button>
            </div>


        </div>
    );
};

export default App;