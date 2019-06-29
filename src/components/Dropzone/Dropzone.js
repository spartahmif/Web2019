import React, { Component } from "react";
import { connect } from "react-redux";

import "./Dropzone.scss";
import { filesAddition } from "store/actions/upload";
import uploadIcon from "../../assets/images/baseline-cloud_upload-24px.svg";

class DropzoneComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hightlight: false };
    this.fileInputRef = React.createRef();
  }

  openFileDialog = () => {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  };

  fileListToArray = list => {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  };

  onFilesAdded = evt => {
    if (this.props.disabled) return;

    const files = evt.target.files;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
  };

  onDragOver = evt => {
    evt.preventDefault();

    if (this.props.disabled) return;

    this.setState({ hightlight: true });
  };

  onDragLeave = () => {
    this.setState({ hightlight: false });
  };

  onDrop = event => {
    event.preventDefault();

    if (this.props.disabled) return;

    const files = event.dataTransfer.files;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
    this.setState({ hightlight: false });
  };

  render() {
    return (
      <div
        className={`Dropzone ${this.state.hightlight ? "Highlight" : ""}`}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onClick={this.openFileDialog}
        style={{ cursor: this.props.disabled ? "default" : "pointer" }}
      >
        <img alt="upload" className="Icon" src={uploadIcon} />
        <input
          ref={this.fileInputRef}
          className="FileInput"
          type="file"
          multiple
          onChange={this.onFilesAdded}
        />
        <span>Upload Files</span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilesAdded: files => {
      dispatch(filesAddition(files));
    }
  };
};

export const Dropzone = connect(
  null,
  mapDispatchToProps
)(DropzoneComponent);
