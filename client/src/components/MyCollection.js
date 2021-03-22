import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

export default function MyCollection() {
  const [myCollection, setMyCollection] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/collection").then((res) => {
      setMyCollection(res.data);
      console.log(res.data);
    });
  }, [myCollection]);
  return (
    <fieldset className="my-collection">
      <legend>My Collection:</legend>
      {myCollection.join(", ")}
    </fieldset>
  );
}
