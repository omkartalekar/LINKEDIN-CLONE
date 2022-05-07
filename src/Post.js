import { Avatar } from "@material-ui/core";
import React,{forwardRef} from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
        <div className="post_header">
          <Avatar src={photoUrl}>
          {name[0]}
          </Avatar>
          <div className="postInfo">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post_body">
          <p>{message}</p>
        </div>
        <div className="post_buttons">
          <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
          <InputOption Icon={ChatIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareIcon} title="Share" color="gray" />
          <InputOption Icon={SendIcon} title="Send" color="gray" />
        </div>
    </div>
  );
});

export default Post;
