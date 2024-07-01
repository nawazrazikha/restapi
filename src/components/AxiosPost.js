import axios from "axios";
import { useState } from "react";

const AxiosPost = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  async function post() {
    try {
      const response = await axios.post('https://lunara-http-default-rtdb.firebaseio.com/details.json', {
        fname: fname,
        lname: lname
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    post();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Post data</h1>
      <label>First Name</label>
      <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
      <label>Last Name</label>
      <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AxiosPost;
