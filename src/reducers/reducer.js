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
        default: return state;
    }
}