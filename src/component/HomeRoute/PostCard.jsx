import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsBriefcaseFill, BsThreeDots } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../redux/action/PostAction";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormEditPost from "./FormEditPost";

function DeleteModal({ post }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleSubmit = () => {
    dispatch(deletePost(post._id));
    handleClose();
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" className="text-dark" onClick={handleShow}>
        Delete post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Sei sicuro di voler elimare questo post?</Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="secondary" onClick={handleSubmit}>
            Elimina
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Annulla
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const PostCard = ({ post }) => {
  const userID = useSelector((state) => state.user.myProfile._id);

  return (
    <div className="newsCard mb-3 rounded-3 bg-white border">
      <div className="p-4">
        <div className="initialNews d-flex justify-content-between">
          <div className="d-flex align-items-center ">
            <div className="descriptionText mx-2 d-flex">
              <div>
              <img src={post.user.image} alt="" className="profilePicWrap me-2"/>
              </div>
              <div>
              <h6 className="m-0">{post.username.toUpperCase()}</h6>
              <div className=" mt-2 mb-3">{post.text}</div>
              <div className="text-muted dataPost">
              {new Date(post.createdAt).toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex controlIcon">
            <div className="mx-3 text-primary puntatore">
              <AiOutlinePlus className="mx-1" />
              Segui
            </div>
            {post.user._id === userID ? (
              <div>
                <Dropdown id="dropdown-basic" variant="transparent">
                  <Dropdown.Toggle
                    id="dropdown-autoclose-true "
                    variant="link"
                    className="text-dark"
                  >
                    <BsThreeDots className="threeIcon" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <DeleteModal post={post} />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <FormEditPost post={post} />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {post.image ? (
        <div className="imgNews">
          <div className="text-center">
            <div className="border-top border-bottom">
              {" "}
              <img
                src={post.image || null}
                alt={post.image}
                className="me-2"
                style={{ height: "200px" }}
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="commentIcons d-flex justify-content-between px-4 py-2 border-top border-muted">
        <div className="d-flex flex-column align-items-center commentIcon p-1 puntatore">
          <div>
            <FiThumbsUp />
          </div>
          <div className="d-none d-md-block">Consiglia</div>
        </div>
        <div className="d-flex flex-column align-items-center commentIcon p-1 puntatore">
          <div>
            <AiOutlineMessage />
          </div>
          <div className="d-none d-md-block">Commenta</div>
        </div>
        <div className="d-flex flex-column align-items-center commentIcon p-1 puntatore">
          <div>
            <BsArrowLeftRight />
          </div>
          <div className="d-none d-md-block">Diffondi il post</div>
        </div>
        <div className="d-flex flex-column align-items-center commentIcon p-1 puntatore">
          <div>
            <FaTelegramPlane />
          </div>
          <div className="d-none d-md-block">Invia</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
