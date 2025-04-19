import { useState } from "react";
import "./App.css";


function App() {

  const[ count, setCount] = useState(0);
   function decreaseHandler(){
     setCount(count-1);
   }
      function increaseHandler(){
        setCount(count+1);
      }
 
      function resetHandler(){
        setCount(0);
      }

  return (
    <div className=" w-[100vw] h-[100vh] flex justify-center items-center bg bg-fuchsia-300 flex-col gap-10"> 
      
      <div className=" text-slate-700 from-neutral-900 text-2xl font-bold ">Counter</div> 
      <div className=" font-bold gap-12 text-5xl">  {count}   </div>
       
        <div >

       <div  className=" bg-purple-500 flex justify-center gap-x-20 py- 5 rounded-sm text-[15px] text-black"> 
         

         <button onClick={ decreaseHandler } className=" border-spacing-2 text-center w-15 border-teal-600 text-4xl"> -Decrese </button> 
  
    
           <button onClick={resetHandler} className=" border-teal-600 text px-5 py-2 rounded-sm  text-4xl" > Reset</button>
      
          <button onClick={ increaseHandler} className=" border-spacing-2 text-center w-15 border-teal-600 text-4xl"> +Increase </button> 
          </div>
       
     </div>




    </div>

  
          



  );
}

export default App;
