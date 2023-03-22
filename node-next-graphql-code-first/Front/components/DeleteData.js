import { useMutation } from "@apollo/client";
import { DELETE_DUMMY_DATA } from "../graphql/mutations";
import { useState } from "react";

const DeleteData = () => {
  const [id, setId] = useState("");

  const [deleteData, { loading, data, error }] = useMutation(DELETE_DUMMY_DATA, { variables: { id: parseInt(id) } });

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Something went wrong...</h3>;

  return (
    <div>
      <p>DELETE_DUMMY_DATA</p>

      <input type="text" placeholder="id" value={id} onChange={(e) => setId(e.target.value)}></input>
      <button onClick={() => deleteData()}>Delete Dummy</button>
    </div>
  );
};

export default DeleteData;
