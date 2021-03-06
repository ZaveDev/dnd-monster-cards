import { useHistory } from "react-router-dom";

function changeComponent(route, data = {}) {
  const history = useHistory();
  history.push(route, data);
}
