import { useDispatch, useSelector } from "react-redux";
import { changeModifire, decNoMinus, increment } from "../app/features/counter/action";

export default function Counter(props) {    
    const dispatch = useDispatch();
    let {mod} = useSelector(state => state.modifire);

    return (
        <div className="col d-flex justify-content-center align-items-center m-4">
            <button className="btn btn-success mx-3" onClick={() => dispatch(decNoMinus(mod))}>-</button>
            <div className="text-center">
                <p>Modifier Value</p>
                <input type="number" defaultValue={mod} className="form-control text-center" onChange={(event) => dispatch(changeModifire(event.target.value))} />
            </div>
            <button className="btn btn-success mx-3" onClick={() => dispatch(increment(mod))}>+</button>
        </div>
    );
}