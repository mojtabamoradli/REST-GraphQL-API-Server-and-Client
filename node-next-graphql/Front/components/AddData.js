import { useMutation } from "@apollo/client";
import { ADD_DUMMY_DATA } from "../graphql/mutations";
import { useState } from "react";

const AddData = () => {
  const [dummy, setDummy] = useState("");

  const [addData, { loading, data, error }] = useMutation(ADD_DUMMY_DATA, { variables: { dummy: dummy } });

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Something went wrong...</h3>;

  return (
    <div>
      <p>ADD_DUMMY_DATA</p>

      <input type="text" placeholder="Dummy" value={dummy} onChange={(e) => setDummy(e.target.value)}></input>
      <button onClick={() => addData()}>Create Dummy</button>
    </div>
  );
};

export default AddData;
