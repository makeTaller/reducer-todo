import React from "react";

{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}


const reducer =(state,action) =>{
    
    switch (action.type){
        case ADD_TODO:
            return {
                ...state.item,
                item: action.payload 
            }
    }
    

}
