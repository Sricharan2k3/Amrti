import {
  CREATE_REPORT_REQUEST,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_FAILURE,
  FIND_REPORT_BY_ID_REQUEST,
  FIND_REPORT_BY_ID_SUCCESS,
  FIND_REPORT_BY_ID_FAILURE,
  FIND_ALL_REPORT_REQUEST,
  FIND_ALL_REPORT_SUCCESS,
  FIND_ALL_REPORT_FAILURE,
} from "./ActionType";

const initialState = {
  report: null,
  product: null,
  loading: false,
  error: null,
  deleteProduct: null,
};

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_ALL_REPORT_REQUEST:
      return { ...state, loading: true, error: null, report: [] };
    case FIND_ALL_REPORT_SUCCESS:
      return action;
    case FIND_ALL_REPORT_FAILURE:
      return { ...state, loading: false, report: [], error: action.payload };
    case CREATE_REPORT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_REPORT_SUCCESS:
      return action;
    case CREATE_REPORT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FIND_REPORT_BY_ID_REQUEST:
      return { ...state, loading: true, error: null };
    case FIND_REPORT_BY_ID_SUCCESS:
      return action;
    case FIND_REPORT_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reportReducer;
