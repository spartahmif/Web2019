import * as actionTypes from "store/actions/actionTypes";

const initialState = {
  files: [],
  uploading: false,
  uploadProgressArray: {},
  successfullUploaded: false
};

export const filesAdditionReducer = (prevState, action) => {
  return { ...prevState, files: [...prevState.files, ...action.files] };
};

export const uploadingJustStartedReducer = prevState => {
  return { ...prevState, uploading: true };
};

export const fileProgressReportReducer = (prevState, action) => {
  let newProgressArray = { ...prevState.uploadProgressArray };
  newProgressArray[action.fileName] = {
    state: action.state,
    percentage: action.percentage
  };
  const item = { ...prevState, uploadProgressArray: newProgressArray };
  console.log(prevState);
  return item;
};

export const uploadFinished = prevState => {
  return {
    ...prevState,
    successfullUploaded: true,
    uploading: false
  };
};

export const clearUploadedFiles = prevState => {
  return { ...prevState, successfullUploaded: false, files: [] };
};

export const uploadReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILE_ADDITION:
      return filesAdditionReducer(prevState, action);
    case actionTypes.START_UPLOADING:
      return uploadingJustStartedReducer(prevState);
    case actionTypes.FILE_PROGRESS_REPORT:
      return fileProgressReportReducer(prevState, action);
    case actionTypes.FINISH_UPLOADING:
      return uploadFinished(prevState);
    case actionTypes.CLEAR_UPLOADED_FILES:
      return clearUploadedFiles(prevState);
    default:
      return prevState;
  }
};
