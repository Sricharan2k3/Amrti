import axios from "axios";

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
import api, { API_BASE_URL } from "../../config/api";


export const findAllReport = () => async (dispatch) => {
  try {
    dispatch({ type: FIND_ALL_REPORT_REQUEST });


    // const { data } = await axios.get(`${API_BASE_URL}/api/allReports`);


    const data = [
      {
        "_id": "65dc86fe5de0f8151e70bd98",
        "batchNo": "Seasme101",
        "detail1": "Sesame Oil",
        "detail2": "https://drive.google.com/file/d/1TpO1_v_cUlXkpFWxMhM9Htvc1qXoPupW/view?usp=drive_link",
        "detail3": "25",
        "detail4": "",
        "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAATYSURBVO3BQY4bSRAEwfAC//9l3znmqYBGJ2clIczwR6qWnFQtOqladFK16KRq0UnVopOqRSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYs+eQnIb1IzAXlDzQTkCTVPALlRMwH5TWreOKladFK16KRq0SfL1GwC8oSaJ4DcqLkB8oSaCcgTajYB2XRSteikatFJ1aJPvgzIE2qeUHMDZFJzo+YNNU+oeQPIE2q+6aRq0UnVopOqRZ/85YBMaiY1bwC5UTMBmdTcAJnU/M1OqhadVC06qVr0yV9OzRtqnlAzAbkBcqPmX3JSteikatFJ1aJPvkzNbwIyqXkCyKRmAvKEmgnIBGRS84SaP8lJ1aKTqkUnVYs+WQbkNwGZ1ExAJjUTkEnNBGRSMwGZ1ExAJjUTkCeA/MlOqhadVC06qVqEP/IXA3KjZgIyqXkCyCY1/5KTqkUnVYtOqhZ98hKQSc0E5EbNBOQJNROQCcikZgJyo+YNNW8AmdTcAJnUTEBu1LxxUrXopGrRSdWiT15S801qnlBzA2RSMwGZgNyomYBMQL4JyKTmRs0EZNNJ1aKTqkUnVYs++cOomYC8oWZSMwG5UXMDZFIzAZnUTEDeUHMD5EbNppOqRSdVi06qFuGPLALyhJongNyomYBMan4TkBs1bwC5UXMDZFLzxknVopOqRSdVi/BHXgAyqZmATGomIE+omYBMam6ATGpugNyoeQPIpOYNIDdqvumkatFJ1aKTqkWfLAMyqblR801AJjUTkEnNE0DeUHMDZFJzo+YGyI2aN06qFp1ULTqpWvTJLwMyqbkBMqm5ATKpeQLIpOYGyI2aCcgEZFLzBpD/00nVopOqRSdVi06qFn3yZWomIJOaGyCTmgnIpOYGyKTmDTU3QCY1N0AmNTdA/iQnVYtOqhadVC365CU1E5BJzQ2QGzU3at4AMqm5UTMBmdRMap5QcwNkUnMD5DedVC06qVp0UrUIf+QFIJOaCciNmhsgb6i5AfKGmm8CMqm5AXKj5ptOqhadVC06qVqEP/JFQN5QswnIpGYCcqPmBshvUnMDZFLzTSdVi06qFp1ULfpkGZAbNROQGyCb1ExA/mZA/iQnVYtOqhadVC3CH/mLAXlDzRNAJjU3QJ5Q8wSQTWreOKladFK16KRq0ScvAflNam7UTEBugExqJiCTmgnIjZoJyBNAJjVPqJmATGo2nVQtOqladFK16JNlajYBeQLIpOYJIE+ouQEyqZmA3Kh5Qs3/6aRq0UnVopOqRZ98GZAn1Dyh5gbIE2pugExqJiCTmieAbAIyqZmATGreOKladFK16KRq0Sd/OSA3aiYgk5o3gNwAuVEzAZnU3AB5AsikZtNJ1aKTqkUnVYs++ceomYBMaiYgT6i5ATKpuQEyqbkBMqm5UXMDZFLzxknVopOqRSdViz75MjXfpGYCcgNkUvMEkBs1m4DcALlRMwGZ1Gw6qVp0UrXopGrRJ8uA/CYgN2omIJvU3ACZ1NwAmdTcAJnU/J9OqhadVC06qVqEP1K15KRq0UnVopOqRSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVr0H4xmQDINZnmhAAAAAElFTkSuQmCC",
        "createdAt": "2024-02-26T12:41:34.017Z",
        "__v": 0
      },

      {
        "_id": "65dc8caf5de0f8151e70bf2a",
        "batchNo": "Morigna101",
        "detail1": "Morigna",
        "detail2": "https://drive.google.com/file/d/1jgdFQWdurlhx6URjlSZvTxCz-PDCp1ru/preview",
        "detail3": "25",
        "detail4": "",
        "qrCode": "data:image/png;base64,VBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAATvSURBVO3BQQ7kyBEEwfAC//9l1xzzogIIZs9qhTDDP1K15KRq0UnVopOqRSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVr05CMgf5OaL4BMam6ATGq+ADKpuQHyN6n54qRq0UnVopOqRU+WqdkE5AbIpGYCMqm5ATKpeQPIL6nZBGTTSdWik6pFJ1WLnvwYkDfUvKHmCyCTmhsgk5pJzQTkBsik5g0gb6j5pZOqRSdVi06qFj35PwNkUjMBmdRMQCY1k5r6706qFp1ULTqpWvTkXw7IDZAbIF8AmdRMaiYgk5r/JydVi06qFp1ULXryY2p+Sc0E5EbNBGRSMwG5UfMFkEnNG2r+l5xULTqpWnRStejJMiB/E5BJzQRkk5oJyKRmAjKpmYC8AeR/2UnVopOqRSdVi558pOafpGYCcgPkDTUTkEnNBGSTmn+Tk6pFJ1WLTqoW4R/5AMikZgIyqZmATGomIJOaN4BMajYB2aTmDSCTmhsgk5pNJ1WLTqoWnVQtwj/yAZBJzRtAbtRMQG7U3AB5Q80EZFLzBZAv1ExAJjU3QCY1X5xULTqpWnRStejJMiA3aiY1N0DeAHKj5g0gk5obIJOaL9RMQCYgk5oJyN90UrXopGrRSdUi/CM/BORGzQRkUjMB2aRmAvI3qZmAbFIzAZnUbDqpWnRSteikatGTZUBu1LwB5EbNG0Bu1ExAJjUTkEnNL6m5AfIGkEnNFydVi06qFp1ULXryY2pugNyo+QLIpGYCMqn5AsiNmgnILwGZ1ExANp1ULTqpWnRStejJMjU3QCY1E5AJyKTmBsik5g0gk5pfUnMD5AbIpOYGyCdVC06qVp0UrXoyUdA3lDzhpoJyKRmUnMD5EbNDZBJzQTkBsiNmjfUTEAmNTdqNp1ULTqpWnRStejJMjWbgNwAuVGzSc0bam6ATEBugExqJjVvAJnUfHFSteikatFJ1aInH6nZpOYNIJOaCcikZgIyAZnUTEAmNX+TmjeATGomIJtOqhadVC06qVr05CMgk5oJyKRmAvKFmhs1E5BJzQ2QSc0EZFKzSc0bQCY1E5BfOqladFK16KRq0ZOP1ExANqmZgExAJjU3aiYgbwCZ1ExAbtRMam6A3Kj5Qs2mk6pFJ1WLTqoWPfkIyKTmBsiNmgnIjZobIDdqboBMat5QcwPkCyCTmhs1v3RSteikatFJ1aInH6l5Q80bam6AfAFkUnMDZFKzSc0bQG6AvKHmi5OqRSdVi06qFj35CMjfpGZSswnIpOYNNROQL4BMam6ATGomIL90UrXopGrRSdWiJ8vUbAKyCciNmhsgX6iZgNyoeUPNjZoJyKaTqkUnVYtOqhY9+TEgb6h5A8ikZgJyo+YNNROQGzVvAPklIJOaTSdVi06qFp1ULXryL6dmAvIFkEnNF0AmNTdq3gAyAZnUTGp+6aRq0UnVopOqRU/+5YDcqLkBMqmZgExqJjUTkBsgk5o3gLwBZFIzAZnUfHFSteikatFJ1aInP6bml9RMQCYgk5ovgGwCMqmZgExqvgAyqdl0UrXopGrRSdWiJ8uA/E1AbtT8k9TcAJmA3ACZ1HwBZFLzxUnVopOqRSdVi/CPVC05qVp0UrXopGrRSdWik6pFJ1WLTqoWnVQtOqladFK16KRq0UnVopOqRSdVi06qFv0HxxZJTbZxC8IAAAAASUVORK5CYII=",
        "createdAt": "2024-02-26T13:05:51.772Z",
        "__v": 0
      }
    ];
    console.log(data)


    dispatch({
      type: FIND_ALL_REPORT_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
    dispatch({
      type: FIND_ALL_REPORT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



// export const createProduct = (product) => async (dispatch) => {
//   try {
//     dispatch({ type: CREATE_PRODUCT_REQUEST });

//     const { data } = await api.post(
//       `${API_BASE_URL}/api/admin/products/`,
//       product.data
//     );

//     dispatch({
//       type: CREATE_PRODUCT_SUCCESS,
//       payload: data,
//     });

//     console.log("created product ", data);
//   } catch (error) {
//     dispatch({
//       type: CREATE_PRODUCT_FAILURE,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
export const createReport = (report) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_REPORT_REQUEST });

    const { data } = await api.post(`${API_BASE_URL}/api/reports`, report);

    // dispatch({
    //   type: CREATE_REPORT_SUCCESS,
    //   payload: data,
    // });
    // console.log("reached1", data);
    return data;
  } catch (error) {
    dispatch({
      type: CREATE_REPORT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const findReportById = (reqData) => async (dispatch) => {
  try {
    dispatch({ type: FIND_REPORT_BY_ID_REQUEST });

    const { data } = await api.get(`/api/reports/${reqData.reportId}`);

    dispatch({
      type: FIND_REPORT_BY_ID_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
    dispatch({
      type: FIND_REPORT_BY_ID_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

