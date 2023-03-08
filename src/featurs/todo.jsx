import React, { useState } from "react";

const Todo = () => {
  const [activity, setActivity] = useState("");
  console.log(useState(0));
  const [listData, setlistData] = useState([]);
  function addActivity() {
    if (activity.length >=1) {
      setlistData((listData) => {
        const updatedList = [...listData, activity];
        console.log(updatedList);
        setActivity("");
        return updatedList;
      });
    }
  }
  function removeActivity(i){
    const updatedlistData = listData.filter((elem,id)=>{
      console.log(id , "filer id");
      console.log(i , "comming id");
 return i!= id;
    })
    setlistData(updatedlistData)
  }
  const[count,updatedCount]=useState(0);
 function incrementByFive(){
  if(count <15){

    return updatedCount(count+1); 
  }
 }
 function decrementByFive(){
  if(count>0){

    return updatedCount(count-1);
  }
 }

  return (
    <div className="mainDiv">
      <div className="header">
        <h1>MY TODO LIST</h1>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button className="addBtn" onClick={addActivity}>
          Add
        </button>
        <p className="listHeading">Here is your activity list :</p>
        <div className="row text-center">

            {
                listData && listData.map((item , i)=>{
                    return(

                        <div className="col-12 d-flex align-items-center">
                            <div  key={i} className="col-4 listData mx-2 my-2 ">{item} </div>  
                          <div>
                          <button className=" btn btn-danger" onClick={()=>removeActivity(i)}>remove</button>
                          </div>
                        </div>
                    )
                })
            }

          </div>
      </div>

      <div>
        <p>{count}</p>
        <div onClick={()=>incrementByFive()}>+</div>
        <div onClick={()=>decrementByFive()}>-</div>
      </div>
    </div>
  );
};

export default Todo;
