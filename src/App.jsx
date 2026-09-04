import RouteProvider from "./Router/RouteProvider"
import {getdata} from "./API/Api"


const App = () => {
  getdata();
  return (
    <RouteProvider />
  )
}

export default App