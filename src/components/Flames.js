// import React, { useState } from "react";

// const FlamesApp = () => {

//     let [val, setVal] = useState("");
//     let [val2, setVal2] = useState("");
//     let [val3, setVal3] = useState("");


//     function calculateFuture() {

//         if (val.trim() === "" || val2.trim() === "") {
//             setVal3("Please Enter valid input");
//             return
//         }

//         let s1 = val.toLowerCase();
//         let s2 = val2.toLowerCase();

//         let arr1 = s1.split("");
//         let arr2 = s2.split("");
//         let newArr = [];
//         let arr2Copy =[...arr2];
//         for (let i = 0; i < arr1.length; i++) {
//             let found = false;

//             for (let j = 0; j < arr2Copy.length; j++) {
//                 if (arr1[i] === arr2Copy[j]) {
//                     arr2Copy.splice(j, 1);
//                     found = true;
//                     break;
//                 }
//             }

//             if (!found) {
//                 newArr.push(arr1[i]);
//             }
//         }


//         newArr = newArr.concat(arr2Copy);



//         let length = newArr.length;

//         let mod = length % 6;

//         if (mod === 1) {
//             setVal3("Friends");
//         }
//         else if (mod === 2) {
//             setVal3("Love");
//         }
//         else if (mod === 3) {
//             setVal3("Affection");
//         }
//         else if (mod === 4) {
//             setVal3("Marriage");
//         }
//         else if (mod === 5) {
//             setVal3("Enemy");
//         }
//         else if (mod === 0) {
//             setVal3("Siblings");
//         }

//     }

//     function clearData() {
//         setVal("");
//         setVal2("");
//         setVal3("");
//     }

//     return (

//         <div>
//             <input type="text"
//                 data-testid="input1"
//                 name="name1"
//                 onChange={((e) => {
//                     setVal(e.target.value);
//                 })}
//                 value={val}></input>

//             <input type="text"
//                 data-testid="input2"
//                 name="name2"
//                 onChange={((e) => {
//                     setVal2(e.target.value);
//                 })}
//                 value={val2}></input>


//             <button data-testid="calculate_relationship" name="calculate_relationship" onClick={calculateFuture}>Calculate Relationship Future</button>
//             <button data-testid="clear" name="clear" onClick={clearData}>Clear</button>
//             <h3 data-testid="answer" value={val3}>{val3}</h3>
//         </div>
//     )
// }


// export default FlamesApp;

import React, { useState } from "react";

function FlamesApp() {
  let [str1, setStr1] = useState("");
  let [str2, setStr2] = useState("");
  let [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!str1 || !str2) {
      setValue("Please Enter valid input");
    } else {
        let arr1 = str1.split("");
        let arr2 = str2.split("");

    //   let arr1 = str1.toLowerCase().replace(/\s/g, "").split("");
    //   let arr2 = str2.toLowerCase().replace(/\s/g, "").split("");

      for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
          if (arr1[i] == arr2[j]) {
            arr1.splice(i, 1);
            arr2.splice(j, 1);
            i--;
            break;
          }
        }
      }
      let score = (arr1.length + arr2.length) % 6;

      switch (score) {
        case 1:
          setValue("Friends");
          break;
        case 2:
          setValue("Love");
          break;
        case 3:
          setValue("Affection");
          break;
        case 4:
          setValue("Marriage");
          break;
        case 5:
          setValue("Enemy");
          break;
        case 0:
          setValue("Siblings");
      }
    }

    // console.log(arr1, arr2, score);
    // console.log(str1.toLocaleLowerCase().split(""),str2.toLowerCase())
  }

  function handleClear() {
    setStr1("");
    setStr2("");
    setValue("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          data-testid="input1"
          name="name1"
          onChange={(e) => setStr1(e.target.value)}
          value={str1}
        ></input>
        <input
          type="text"
          data-testid="input2"
          name="name2"
          onChange={(e) => setStr2(e.target.value)}
          value={str2}
        ></input>
        <button
          type="submit"
          data-testid="calculate_relationship"
          name="calculate_relationship"
        >
          Calculate Relationship Future
        </button>
        <button
          type="button"
          data-testid="clear"
          name="clear"
          onClick={handleClear}
        >
          Clear
        </button>
      </form>
      <h3 data-testid="answer">{value}</h3>
    </div>
  );
}

export default FlamesApp;