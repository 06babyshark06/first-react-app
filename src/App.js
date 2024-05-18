// import logo from "./logo.svg";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./OnClassLogin.css";
import AuthProvider from "./components/AuthContext";
import LanguageProvider from "./components/LanguageContext";
// import Login from "./components/OnClassLogin";
// // import BackToTop from "./components/BackToTopButton";
// // import {useState} from "react";
// // import FormPassword from "./components/password";
// // import ButtonBase from "./common/ButtonBase";
// // import PostListView from "./components/PostListView";
// // import ProductListView from "./components/ProductListView";
// import WordCounter from "./components/WordCounter";
import OnClassLogin from "./components/OnClassLogin";
import UserSettingProvider from "./components/UserSettingContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NavigationBar from "./components/NavigationBar";
import PrivateRoute from "./components/PrivateRoute";
import Films from "./components/Films";
import StopWatch from "./components/StopWatch";
import UserProfile from "./class/UserProfile";
import LoginForm from "./class/LoginForm";
import Timer from "./class/Timer";
import Player from "./class/Player";
import { ValidationSchemaExample } from "./formik/FormIkExample";
function App() {
  const navigate = useNavigate();
  // const [isLightOn, setInLight] = useState(false);
  // const handleLight = () => {
  //   return setInLight((isLightOn) => !isLightOn);
  // };
  return (
    // <div className="App">
    //   {/* <FormPassword /> */}
    //   {/* <h1>{isLightOn ? "Light is on" : 'Light is off'}</h1>
    //   <button type="button" onClick={handleLight}>{isLightOn ? "Turn off": "Turn on"}</button> */}
    //   {/* <ButtonBase /> */}
    //   {/* <PostListView /> */}
    //   {/* <ProductListView/> */}
    //   {/* <BackToTop/> */}
    //   {/* <WordCounter/> */}
    //   {/* <Login/> */}
    // <LanguageProvider>
    //   <AuthProvider>
    //     <UserSettingProvider>
    //       <OnClassLogin />
    //     </UserSettingProvider>
    //   </AuthProvider>
    // </LanguageProvider>
    // </div>
    // <>
    //   <NavigationBar />
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <PrivateRoute>
    //           <Home />
    //         </PrivateRoute>
    //       }
    //     />
    //     <Route path="/login" element={<Login />} />
    //     <Route
    //       path="/register"
    //       element={
    //         <PrivateRoute>
    //           <Register />
    //         </PrivateRoute>
    //       }
    //     />
    //     <Route
    //       path="/products"
    //       element={
    //         <PrivateRoute>
    //           <Products />
    //         </PrivateRoute>
    //       }
    //     />
    //     <Route
    //       path="/products/:id"
    //       element={
    //         <PrivateRoute>
    //           <ProductsDetail />
    //         </PrivateRoute>
    //       }
    //     />
    //     <Route
    //       path="/about"
    //       element={
    //         <PrivateRoute>
    //           <About />
    //         </PrivateRoute>
    //       }
    //     />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    //   <button onClick={() => navigate("/")}>Back to home</button>
    // </>
    // <>
    //   <Films/>
    // </>
    // <StopWatch/>
    // <>
    //   <UserProfile name="1111" email="2222" />
    //   <LoginForm />
    //   <Timer/>
    //   <Player/>
    // </>
    <>
      <ValidationSchemaExample />
    
    </>
  );
}

export default App;
