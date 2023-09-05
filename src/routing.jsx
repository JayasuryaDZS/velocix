import General from "../../screens/General";
import GetStarted from "../../screens/GetStarted";

const Routing = [
  { path: "/general", name: "General", exact: true, element: General },
  { path: "/get-started", name: "GetStarted", exact: true, element: GetStarted },

];

export default Routing;