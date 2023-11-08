import { useEffect, useState } from "react";
import classNames from "classnames";

function Tab({children,activeTab}){
    const [active,setActive] = useState(activeTab);
    useEffect(()=>{
        setActive(activeTab);
    },[activeTab]);

    return (
        <div className="tabMenu">
            <nav>
                {
                children.map((tab,index)=>(
                    <button onClick={()=>setActive(index)} className={classNames({
                        "px-4 h-10 transition-colors duration-100 ease-linear": true,
                        "bg-green-500": index === active,
                        "bg-gray-600 text-white": index != active
                    })} key={index}>{tab.props.title}</button>
                ))
                }
            </nav>
            {children[active]}
        </div>
    )
}

Tab.Panel = function({children,title}) {
    return(
        <div>{children}</div>
    );
}

export default Tab;