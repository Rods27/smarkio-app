import React, { useState } from "react";

import MyContext from "../context/MyContext";

export default function Provider({ children }) {
  const [getComment, setComment] = useState('');

  const context = {
    getComment,
    setComment,
  };

  return (
    <MyContext.Provider value={context}>
      {children}
    </MyContext.Provider>
  );
}