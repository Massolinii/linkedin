import React from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { FiThumbsUp } from 'react-icons/fi';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsArrowLeftRight } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';

const PostCard = ({ post }) => {
    return (
        <div className="newsCard mb-3 rounded-3 bg-white border">
            <div className='p-4'>
                <div className="initialNews d-flex justify-content-between" >
                    <div className='d-flex align-items-center '>
                        <div>
                            <div> <img /*src={news[i]?.user?.image}*/ alt="" style={{ aspectRatio: '1 / 1', borderRadius: "50%" }}/></div>
                        </div>
                        <div className='descriptionText mx-2'>
                           <h6 className="m-0">{post.username.toUpperCase()}</h6>
                            <div className=" mt-2 mb-3">{post.text}</div>
                            <div className="text-muted">{new Date(post.createdAt).toLocaleString()}</div>
                        </div>
                    </div> 
        
                    <div className='d-flex controlIcon'>
                        <div className='mx-3'><AiOutlinePlus className='mx-1' />Segui</div>
                        <div><BsThreeDots className='threeIcon' /></div>
                    </div>
                </div>
        
            </div>
            <div className="imgNews">
                {/*<div><img src={news[i]?.image} alt="" /></div>*/}
            </div>
        
            <div className="commentIcons d-flex justify-content-between px-4 py-2">
                <div className='d-flex flex-column align-items-center commentIcon p-1'>
                    <div><FiThumbsUp /></div>
                    <div>Consiglia</div>
                </div>
                <div className='d-flex flex-column align-items-center commentIcon p-1'>
                    <div><AiOutlineMessage /></div>
                    <div>Commenta</div>
                </div>
                <div className='d-flex flex-column align-items-center commentIcon p-1'>
                    <div><BsArrowLeftRight /></div>
                    <div>Diffondi il post</div>
                </div>
                <div className='d-flex flex-column align-items-center commentIcon p-1'>
                    <div><FaTelegramPlane /></div>
                    <div>Invia</div>
                </div>
            </div>
        </div>
        );
};

export default PostCard;


