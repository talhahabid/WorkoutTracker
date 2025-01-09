import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import PPL from "./pages/PPL";
import UpperLower from "./pages/UpperLower";
import FullBody from "./pages/FullBody";
import BroSplit from "./pages/BroSplit";
import Preview from "./pages/Preview";
import CustomSplit from "./pages/CustomSplit";
import CustomPg from "./pages/CustonPg";

const App = () => {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <About />} />
        <Route exact path="/signin" element={!user ? <SignIn /> : <Home />} />
        <Route exact path="/signup" element={!user ? <SignUp /> : <Home />} />
        <Route exact path="/profile" element={user ? <Profile /> : <About />} />
        <Route exact path="/ppl" element={user ? <PPL /> : <About />} />
        <Route
          exact
          path="/upper-lower"
          element={user ? <UpperLower /> : <About />}
        />
        <Route
          exact
          path="/full-body"
          element={user ? <FullBody /> : <About />}
        />
        <Route
          exact
          path="/bro-split"
          element={user ? <BroSplit /> : <About />}
        />
        <Route exact path="/preview" element={user ? <Preview /> : <About />} />
        <Route
          exact
          path="/custom"
          element={user ? <CustomSplit /> : <About />}
        />
        <Route
          exact
          path="/build-workout"
          element={user ? <CustomPg /> : <About />}
        />
        <Route exact path="/about" element={!user ? <About /> : <Home />} />

        <Route path="*" element={<Navigate to="/about" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
