import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";
import {useSelector} from "react-redux";
import {nameSelector} from "../redux/store";

const Stats = () => {
    const {stats, changeStats} = useContext(TwitterContext);
    const userName = useSelector(nameSelector)

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {userName}
            </div>
            <div className={'stats'}>
                <div
                    onClick={() => changeStats('followers', 1)}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        changeStats('followers', -1);
                    }}
                >Followers: {stats.followers}</div>
                <div
                    onClick={() => changeStats('following', 1)}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        changeStats('following', -1);
                    }}
                >Following: {stats.following}</div>
            </div>
        </div>
    );
};

export default Stats;