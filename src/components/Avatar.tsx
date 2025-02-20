import {useDispatch, useSelector} from "react-redux";
import {avatarSelector, nameSelector} from "../redux/store";
import {changeAvatar, changeName} from "../redux/userActionCreators.js";


const Avatar = ({size}: {size?: string}) => {
  const dispatch = useDispatch()
  const avatar = useSelector(avatarSelector)
  const userName = useSelector(nameSelector)

  return (
    <img
      onClick={() => {
        const url = prompt('Enter new avatar url');
        dispatch(changeAvatar(url));
      }}
      onContextMenu={e => {
        e.preventDefault();
        const name = prompt('Enter new name');
        dispatch(changeName(name));
      }}
      className={`user-avatar ${size ?? ''}`}
      src={avatar}
      alt={userName}
    />
  );
};

export default Avatar;