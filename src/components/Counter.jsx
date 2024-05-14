import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/slices/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <input type="number" onChange={(e) => dispatch(incrementByAmount(parseInt(e.target.value) || 0))} placeholder="Enter Value" />
        <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
      </div>
    </>
  );
};

export default Counter;
