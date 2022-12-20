import axios from "axios";
import { useState } from "react";

const RESTUpdateData = () => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  const updateData = () => {
    if (id && title) {
      axios.put(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/data/${id}`, {
        title: title,
      });
    }
  };

  return (
    <div>
      <p>ADD_DUMMY_DATA</p>

      <input type="text" placeholder="id" value={id} onChange={(e) => setId(e.target.value)}></input>
      <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
      <button onClick={() => updateData()}>UPDATE REST DATA</button>
    </div>
  );
};

export default RESTUpdateData;
