import Sidebar from "./Sidebar.js";
import Content from "./Content.js";

const Body = () => {
    return (
        <div className={'body'}>
            <Sidebar/>
            <Content/>
        </div>
    );
};

export default Body;