import React from "react";
import { connect } from "react-redux";

import { ProgressBar } from "components/ProgressBar/ProgressBar";
import checkIcon from "assets/images/baseline-check_circle-24px.svg";

const FileListComponent = props => {
  const { uploading, successfullUploaded, uploadProgressArray, files } = props;

  const renderProgress = file => {
    const uploadProgress = uploadProgressArray[file.name];
    if (uploading || successfullUploaded) {
      return (
        <div className="ProgressWrapper">
          <ProgressBar
            progress={uploadProgress ? uploadProgress.percentage : 0}
          />
          <img
            className="CheckIcon"
            alt="done"
            src={checkIcon}
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "finished" ? 0.5 : 0
            }}
          />
        </div>
      );
    }
  };

  return (
    <div>
      {files.map(file => {
        return (
          <div key={file.name} className="Row">
            <span className="Filename">{file.name}</span>
            {renderProgress(file)}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  const {
    files,
    uploading,
    successfullUploaded,
    uploadProgressArray
  } = state.upload;
  return {
    files,
    uploading,
    successfullUploaded,
    uploadProgressArray
  };
};

export const FileList = connect(mapStateToProps)(FileListComponent);
