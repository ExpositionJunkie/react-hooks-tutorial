import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
//https://www.youtube.com/watch?v=f687hBjwFcM

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, [values.email]);


  // Can have as many useEffects as you want on your component
  useEffect(() => {
    console.log('mount1')
  }, [])

  useEffect(() => {
    console.log('mount2')
  }, [])

  // const [showHello, setShowHello] = useState(true);
  // const [values2, handleChange2] = useForm({ firstName: "", lastName: ""});

  return (
    <div>
      {/* <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
      <input name="email" value={values.email} onChange={handleChange} /> */}
      <input
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
