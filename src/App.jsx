// import React from "react";

import { useEffect, useState } from "react";
import { fetchUser } from "./api/fetch";

function App() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    if (!loading) {
      return;
    }
    async function fetchData() {
      setLoading(true);
      let resp = await fetchUser();
      setValue(resp);
      console.log(value);
      setLoading(false);
    }
    fetchData();
  }, [value, loading]);

  return (
    <>
      <h1>Hello Andrii</h1>
    </>
  );
}

export default App;
