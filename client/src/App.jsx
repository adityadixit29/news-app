//importing browser router
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
// importing components and pages
import Home from "./pages/home/Home"
import Dashboard from "./pages/dashboard/Dashboard";
import AddNews from "./pages/addnews/Addnews";
import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import ViewNews from "./pages/viewnews/ViewNews";
import Footer from "./components/footer/Footer";
// import Login from "./pages/login/Login";

//importing global css
// import "./styles/global.scss"

function App() {
// layout for the home page 
  const Layout = () => {
    return (
      <div className="main">
        {/* navbar  */}
        <Navbar />
        <div className="container min-w-full">
       {/*   <div className="menuContainer">
            
            <Menu />
          </div>*/}
          <div className="contentContainer">
            {/* outlet so that we can switch between pages without changing navbar and menu  */}
            <Outlet />
          </div>
        </div>
        {/* footer  */}
        <Footer />
      </div>
    )
  }


// routing for the different pages 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      //children router
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/addnews",
          element: <AddNews />
        },
        {
          path: "/viewnews/:id",
          element: <ViewNews />
        },
        {
          path: "/dashboard",
          element: <Dashboard />
        },
      ]
    },

  ]);

// rendering router 
  return (
    <RouterProvider router={router} />
  )
}

export default App