import * as actionTypes from "./actionTypes";

// Various action creators for uploading process

export const filesAddition = files => {
  return {
    type: actionTypes.FILE_ADDITION,
    files: files
  };
};

export const uploadFiles = files => {
  return async dispatch => {
    dispatch(startUploading());

    const promises = [];
    files.forEach(file => {
      promises.push(sendEachFile(file, dispatch));
    });
    try {
      await Promise.all(promises);

      dispatch(uploadingFinished());
    } catch (e) {
      // Not Production ready! Do some error handling here instead...
      dispatch(uploadingFinished());
    }
  };
};

const sendEachFile = (file, dispatch) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.upload.addEventListener("progress", event => {
      if (event.lengthComputable) {
        const progress = (event.loaded / event.total) * 100;
        dispatch(uploadingProgress("progress", file.name, progress));
      }
    });

    req.upload.addEventListener("load", () => {
      dispatch(uploadingProgress("finished", file.name, 100));
      resolve(req.response);
    });

    req.upload.addEventListener("error", () => {
      dispatch(uploadingProgress("error", file.name, 0));
      reject(req.response);
    });

    const formData = new FormData();
    formData.append("file", file, file.name);

    req.open("POST", "http://localhost:8000/upload");
    req.send(formData);
  });
};

export const startUploading = () => {
  return {
    type: actionTypes.START_UPLOADING
  };
};

export const uploadingFinished = () => {
  return {
    type: actionTypes.FINISH_UPLOADING
  };
};
export const uploadingProgress = (reportType, fileName, progress) => {
  return {
    type: actionTypes.FILE_PROGRESS_REPORT,
    state: reportType,
    fileName: fileName,
    percentage: progress
  };
};

export const clearUploadedFiles = () => {
  return { type: actionTypes.CLEAR_UPLOADED_FILES };
};
