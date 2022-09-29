import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/actions";
function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  console.log(state);
  console.log(actions);
  return (
    <div className="App">
      <button onClick={() => actions.depositMoney(100)}>Deposit 100</button>
      <button onClick={() => actions.withdrawMoney(100)}>withdraw 100</button>
      <div>{state.account}</div>
    </div>
  );
}

export default App;
