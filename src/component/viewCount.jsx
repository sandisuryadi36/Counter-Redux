import { useSelector } from "react-redux";
import Counter from "./counter";

export function ViewCount(props) {
    let { count } = useSelector(state => state.counter);
    return (
        <div className="card">
            <div className="card-header text-center">
                <p>The Counter Value</p>
                <h1>{count} </h1>
            </div>
            <div className="card-body">
                <Counter />
            </div>
        </div>
    );
}