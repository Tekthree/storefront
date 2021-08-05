const initialState = [
  {displayName: 'Dogs', normalizedName: 'dogs', description: 'This is all the dogs'},
  {displayName: 'Cats', normalizedName: 'cats', description: 'Thi is all the cats'},
  
];

export default function categoriesReducer(state = initialState, action){
  switch(action.type){
    case 'ACTIVATE_CATEGORY':
      return {...state, activeCategory: action.payload};
      default:
        return state;
  }
}

export function activateCategory(categoryName){
  return{
    type: 'ACTIVATE_CATEGORY',
    payload: categoryName
  }
}