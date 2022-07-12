import { createReducer } from 'reduxsauce';
import { Types } from '@Actions/pagination';

const initialState = {
  currentPage: 1,
};

const getCurrentPage = (state, action) => ({ ...state, currentPage: action.payload });

const paginationReducer = createReducer(initialState, {
  [Types.GET_CURRENT_PAGE]: getCurrentPage,
});

export default paginationReducer;
