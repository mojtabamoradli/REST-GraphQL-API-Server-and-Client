import { useMutation } from "@apollo/client";
import { UPDATE_DUMMY_DATA } from "../graphql/mutations";
import { useState } from "react";

const UpdateData = () => {
  const [id, setId] = useState("");
  const [dummy, setDummy] = useState("");

  const [updateData, { loading, data, error }] = useMutation(UPDATE_DUMMY_DATA, { variables: { id: parseInt(id), dummy: dummy } });

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Something went wrong...</h3>;

  return (
    <div>
      <p>UPDATE_DUMMY_DATA</p>

      <input type="text" placeholder="id" value={id} onChange={(e) => setId(e.target.value)}></input>
      <input type="text" placeholder="Dummy" value={dummy} onChange={(e) => setDummy(e.target.value)}></input>
      <button onClick={() => updateData()}>Update Dummy</button>
    </div>
  );
};

export default UpdateData;
