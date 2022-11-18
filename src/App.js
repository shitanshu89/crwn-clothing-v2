import Directory from "./components/Directory/Directory.component";
import { Routes, Route, Outlet } from "react-router-dom";

import Navigation from "./components/Routes/Navigation.Component";
import Signin from "./components/Routes//signIn/Signin.component";

const Shop = () => {
  return (
    <>
      <div>this final shop </div>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Directory />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
