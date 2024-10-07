import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    return(
        <div>
            <h1>Upss something went wrong</h1>
            <h2>Try again later</h2>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    );
};

export default Error;