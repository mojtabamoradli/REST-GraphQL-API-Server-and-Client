import axios from "axios";
import { useState } from "react";

const RESTDeleteData = () => {
  const [id, setId] = useState("");

  const deleteData = () => {
    if (id) {
      axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/data/${id}`, {
      });
    }
  };

  return (
    <div>
      <p>ADD_DUMMY_DATA</p>

      <input type="text" placeholder="id" value={id} onChange={(e) => setId(e.target.value)}></input>
      <button onClick={() => deleteData()}>DELETE REST DATA</button>
    </div>
  );
};

export default RESTDeleteData;
