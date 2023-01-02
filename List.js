import React, { useState } from 'react'

function List() {
    const [activity , setActivity]= useState("");
    const[ListData , setListData]= useState([]);
    function AddActivity(){
        // setListData([...ListData, activity])
        // console.log(ListData)
        setListData((ListData) => {
            const updateList= [...ListData , activity]
            console.log(updateList)
            setActivity('');
            return updateList
        })
        
    }
    function removeActivity(i){
        const updatedListData = ListData.filter((elem , id)=>{
            return i!=id;
        })
        setListData(updatedListData);

    }
    function deleteAll(){
        setListData([])

    }
    function editActivity(i){
        const updatedListData = ListData.filter((elem , id)=>{
            return i!=id;
        })
        setListData([updatedListData])

    }
    
        
    
        return (
    <div className= 'container'>
        <div className='header'>List</div>
        <input type='text' placeholder='Add List' value={activity} onChange={(e) =>setActivity(e.target.value)}/>
        <button onClick={AddActivity}>ADD</button>
        <p className='list-heading'>START LISTING</p>
        {ListData!=[] && ListData.map((data, i)=> {
            return (
                <>
                <p key= {i}>
                    <div className='listData'>{data}</div>
                    <div className='btn-position'><button onClick={()=> removeActivity(i)}>DELETE</button></div>
                    <div className='btn-position'><button onClick={()=> editActivity(i)}>EDIT</button></div>
 
                </p>
                </>
            )
        })}
        {ListData.length>=1 &&  <button onClick={deleteAll}>DELETE  ALL</button>}

                </div>
            )
         
        

  
        }
    

  
    
export default List

   