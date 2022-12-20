import axios from "axios";
import { useEffect, useState } from "react";

const RESTData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!data) {
      axios.get(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/data`).then((response) => {
        setData(response.data);
      });
    }
  }, [!data]);

  return (
    <div>
      <p>DATA</p>

      {data && data.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default RESTData;
