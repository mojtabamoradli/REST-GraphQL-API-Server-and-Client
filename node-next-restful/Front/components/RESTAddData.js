import axios from "axios";
import { useState } from "react";

const RESTAddData = () => {
  const [title, setTitle] = useState("");

  const addData = () => {
    if (title) {
      axios.post(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/data`, {
        title: title,
      });
    }
  };

  return (
    <div>
      <p>ADD_DUMMY_DATA</p>

      <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <button onClick={() => addData()}>ADD REST DATA</button>
    </div>
  );
};

export default RESTAddData;
