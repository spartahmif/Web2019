import React, { Component } from "react";
import { connect } from "react-redux";

import { FileList } from "views/Upload/FileList/FileList";
import { Dropzone } from "components/Dropzone/Dropzone";
import { uploadFiles, clearUploadedFiles } from "store/actions/upload";
import "./Upload.scss";

class UploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgressArray: {},
      successfullUploaded: false
    };
  }

  renderActions = () => {
    const { files, uploading, successfullUploaded } = this.props;
    if (successfullUploaded) {
      return (
        <button className="upload-button" onClick={this.props.clearFiles}>
          Clear
        </button>
      );
    } else {
      return (
        <button
          className="upload-button"
          disabled={files.length === 0 || uploading}
          onClick={() => this.props.uploadFiles(this.props.files)}
        >
          Upload
        </button>
      );
    }
  };

  render() {
    return (
      <div className="Upload">
        <span className="Title">Upload Files</span>
        <div className="Content">
          <Dropzone />
          <div className="Files">
            <FileList />
          </div>
        </div>
        <div className="Actions">{this.renderActions()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    files,
    uploading,
    uploadProgressArray,
    successfullUploaded
  } = state.upload;
  return {
    files,
    uploading,
    uploadProgressArray,
    successfullUploaded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadFiles: files => {
      dispatch(uploadFiles(files));
    },
    clearFiles: () => dispatch(clearUploadedFiles())
  };
};

export const Upload = connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadComponent);
