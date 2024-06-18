import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getTasks } from "./redux/selectors";
import { useEffect } from "react";
import { fetchTasks } from "./redux/operations";

function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>...Loading tasks</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
  );
}

export default App;
