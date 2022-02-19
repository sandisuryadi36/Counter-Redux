import { useSelector } from "react-redux";

export function ViewCount(props) {
    let { count } = useSelector(state => state.counter);
    return (
        <div className="card justify-content-center align-items-center p-2">
            <p>The Counter Value</p>
            <h1>{count} </h1>
        </div>
    );
}