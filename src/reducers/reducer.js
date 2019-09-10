export const intialState = {
   todoItems: [
       {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Learn about reducers 2',
        completed: false,
        id: 3892987590
        }
    ]
};

export function reducer (state, action) {
    switch (action.type) {
        case "ADD_TODO": 
            // console.log(action.payload)
            return { 
                ...state,
                todoItems: [...state.todoItems, {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                    }
                ]
             };
        case "TOGGLE_TODO":
            //console.log(action.payload)
            return {
               ...state, 
                todoItems: state.todoItems.map(item => {
                    if (item.id === action.payload && item.completed === true ){
                        console.log("if", item.completed)
                        return {
                            ...item,
                            completed: false
                        }
                      } else if (item.id === action.payload && item.completed === false ){
                        console.log("if else ", item.completed)
                        return {
                            ...item,
                            completed: true
                        } 
                      } else {
                        return item;
                    }
                })
            }
        default: return state;
    } 
}