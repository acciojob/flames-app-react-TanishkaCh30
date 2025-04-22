import React, { useState } from "react";



const FlamesApp = () => {

    let [val, setVal] = useState();
    let [val2, setVal2] = useState();
    let [val3,setVal3] = useState();


    function calculateFuture() {
        let s1 = val.toLowerCase();
       

        let s2 = val2.toLowerCase();
        
        let arr1 = s1.split("");
        let arr2 = s2.split("");
        let newArr = [];

        for (let i = 0; i < arr1.length; i++) {
            let found = false;

            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                   arr2.splice(j, 1);
                    found = true;
                    break;
                }
            }

            if (!found) {
                newArr.push(arr1[i]);
            }
        }

       
        newArr = newArr.concat(arr2);

        

        let length = newArr.length;

        let mod = length % 6;
        if(val=== "" || val2===""){
          setVal3("Please Enter valid input")
        }
        else if(mod===1){
         setVal3("Friends");
        }
        else if(mod===2){
            setVal3("Love");
        }
        else if(mod===3){
            setVal3("Affection");
        }
        else if(mod===4){
            setVal3("Marriage");
        }
        else if(mod===5){
            setVal3("Enemy");
        }
        else if(mod===0){
            setVal3("Sibilings");
        }
    }

    function clearData(){
        setVal(" ");
        setVal2(" ");
    }

    return (

        <div>
            <input type="text" data-testid="input1" name="name1" onChange={((e) => {
                setVal(e.target.value);
            })} value={val}></input>
            <input type="text" data-testid="input2" name="name2" onChange={((e) => {
                setVal2(e.target.value);
            })} value={val2}></input>
            <button data-testid="calculate_relationship" name="calculate_relationship" onClick={calculateFuture}>Calculate Relationship Future</button>
            <button data-testid="clear" name="clear" onClick={clearData}>Clear</button>
            <h3 data-testid="answer">{val3}</h3>
        </div>
    )
}


export default FlamesApp;