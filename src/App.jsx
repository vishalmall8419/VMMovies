import RouteProvider from "./Router/RouteProvider"
// import { getdata } from "./API/Api"
import APIContext from "./Context/APIContext";


const App = () => {
  // getdata();
  return (
    <APIContext>
      <RouteProvider />
    </APIContext>
  )
}

export default App