const posts = (state=[] ,action) =>{
    switch(action.type){
        case 'FETCH_POSTS_SUCCESS':
            return  action.payload ;
        case 'DELETE_POST':
            return state.filter((post)=> post.id !== action.id);
        case 'ADD_POST':
            return state.concat([action.data]);
        default:
            return state
    }
}

export default posts

