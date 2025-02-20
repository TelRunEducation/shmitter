import Avatar from "./Avatar";
import {useDispatch, useSelector} from "react-redux";
import {followerSelector, followingSelector, nameSelector} from "../redux/store";
import {changeFollowers, changeFollowing} from "../redux/statsActionCreators.js";

const Stats = () => {
  const userName = useSelector(nameSelector)
  const dispatch = useDispatch()
  const followers = useSelector(followerSelector)
  const following = useSelector(followingSelector)

  return (
    <div className={'user-stats'}>
      <div>
        <Avatar/>
        {userName}
      </div>
      <div className={'stats'}>
        <div
          onClick={() => dispatch(changeFollowers(1))}
          onContextMenu={(e) => {
            e.preventDefault();
            dispatch(changeFollowers(-1));
          }}
        >Followers: {followers}</div>
        <div
          onClick={() => dispatch(changeFollowing(1))}
          onContextMenu={(e) => {
            e.preventDefault();
            dispatch(changeFollowing(-1))
          }}
        >Following: {following}</div>
      </div>
    </div>
  );
};

export default Stats;