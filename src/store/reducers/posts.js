import { 
    GET_POSTS, 
    CREATE_POST, 
    UPDATE_POST,
    DELETE_POST,
} from '../../constants/actions';

const defaultState = [];
  
const initState = defaultState;

const posts = (state = initState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        case CREATE_POST:
            const newState = [...state, action.payload]
            return newState;
        case UPDATE_POST:
            const updatedState = state.reduce((acum, elem) => {
                if(elem._id === action.payload._id){
                     return [...acum, {...elem, ...action.payload}];
                }
                return [...acum, elem];
            }, []);
            return updatedState;
        case DELETE_POST:
            const filteredPosts = state.filter((elem) => elem._id !== action.payload);
            return filteredPosts;
        default:
            return state;
    }
};

export default posts;