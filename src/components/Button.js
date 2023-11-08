import classNames from "classnames";

function Button({children,variant = 'default'}){
    return (
        <button className={classNames({
            "p-4 h-10 flex items-center rounded transition-all duration-100 ease-linear": true,
            "bg-gray-500 hover:bg-gray-800 hover:text-white": variant === "default",
            "bg-green-600 text-white hover:bg-green-800": variant === "success",
            "bg-red-600 text-white hover:bg-red-800": variant === "danger",
        })}>{children}</button>
    )
}

export default Button;