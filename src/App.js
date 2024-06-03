import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import HomePage from './components/Homepage';
import VideoPage from './components/VideoPAge';
function App() {
const router = createBrowserRouter([
  {
    path : "/",
    element: <HomePage/>
  },
  {
    path : "/room/:id",
    element: <VideoPage/>
  }
])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
