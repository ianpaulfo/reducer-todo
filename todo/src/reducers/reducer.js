export const initialToDoState = [ 
    {item: "Tweet at Zucc",
    completed: false,
     id: 1 },
     {item: "Zoom w/ President Trump",
    completed: false,
     id: 2 },
     {item: "Facebook message the Winklevii",
    completed: false,
     id: 3 },
     {item: "Google stuff with Steve Ballmer",
    completed: false,
     id: 4 }
];

export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.payload];
      case 'DELETE_TODO':
        return state.filter(todo => todo.id !== action.payload);
      case 'COMPLETE_TODO':
        return  state.map(todo => {
          if (action.payload.id === todo.id) {
            return {
              ...todo,
              completed: !action.payload.completed
            }          
          } else {        
            return todo
          }
        })
      case 'CLEAR_COMPLETE':
        return state.filter(todo => todo.completed !== true);
      default:
        return state;
    }
  };
