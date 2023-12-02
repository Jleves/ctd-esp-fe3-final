export const reducer = (state, action ) =>{

    switch(action.type){
      case 'GET_ODONT':
            return {...state, info: action.payload}
      case 'ADD_FAV':
            return {...state, favs:[...state.favs, action.payload]}
      
     case 'SET_THEME':
        return {...state, theme:action.payload}


            

    }
    
}
