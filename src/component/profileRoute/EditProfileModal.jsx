import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsPencil } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  editProfileImage,
  editProfileInfo,
} from "../../redux/action/UserAction";
const EditProfileModal = () => {
  let userID = useSelector((state) => state.user.myProfile._id);
  let info = useSelector((state) => state.user.myProfile);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(new FormData());
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    dispatch(editProfileInfo(toUpdate));
    if (formData.get("profile")) {
      dispatch(editProfileImage(formData, userID));
    }

    handleClose();
  };

  const [toUpdate, setToUpdate] = useState({
    name: "",
    surname: "",
    title: "",
    bio: "",
    area: "",
  });
  useEffect(() => {
    setToUpdate({
      name: info.name,
      surname: info.surname,
      title: info.title,
      bio: info.bio,
      area: info.area,
    });
  }, [show]);

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        <BsPencil />
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Choose a pic.</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                console.log(file);
                formData.append("profile", file);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Modifica nome</Form.Label>
            <Form.Control
              type="text"
              value={toUpdate.name}
              onChange={(e) =>
                setToUpdate({ ...toUpdate, name: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Modifica cognome</Form.Label>
            <Form.Control
              type="text"
              value={toUpdate.surname}
              onChange={(e) =>
                setToUpdate({ ...toUpdate, surname: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Modifica impego</Form.Label>
            <Form.Control
              type="text"
              value={toUpdate.title}
              onChange={(e) =>
                setToUpdate({ ...toUpdate, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Modifica bio</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              value={toUpdate.bio}
              onChange={(e) =>
                setToUpdate({ ...toUpdate, bio: e.target.value })
              }
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProfileModal;
