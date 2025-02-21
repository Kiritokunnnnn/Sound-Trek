import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input } from "reactstrap";

class CreatePlaylistModal extends Component {
  render() {
    const { isOpen, toggleModal, newPlaylistName, handlePlaylistNameChange, createPlaylist } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Create new playlist</ModalHeader>
        <ModalBody>
          <Input
            type="text"
            placeholder="Enter playlist name..."
            value={newPlaylistName}
            onChange={handlePlaylistNameChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={createPlaylist}>Create</Button>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default CreatePlaylistModal;
