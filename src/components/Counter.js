import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';//use selector is the part managed by store
import {counterActions} from'../store/index.js';

const Counter = () => {
const dispatch=useDispatch();
//use selector automatically set up the subscription to the redux store for this component
const counter=useSelector(state=>state.counter.counter);

const show =useSelector(state=>state.counter.showCounter);

const incrementHandler = () => {
 
  //  dispatch({type: 'increment' });
  dispatch(counterActions.increment());

};

const increaseHandler=()=>{
  // dispatch({ type:'increase',amount:5});
  dispatch(counterActions.increase(5));
}

const decreaseHandler=()=>{
  // dispatch({ type:'decrease',amount:-5});
  dispatch(counterActions.decrease(5));
}

const decrementHandler = () =>{

  // dispatch({type: 'decrement' });
  dispatch(counterActions.decrement());
};

  const toggleCounterHandler = () => {
    // dispatch({type:'toggle'});
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&< div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decreaseHandler}>decrement by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
