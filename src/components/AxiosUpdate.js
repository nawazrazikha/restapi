import axios from "axios";
import { useState } from "react";

const AxiosUpdate = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [id, setId] = useState(''); // Add a state for the id of the data you want to update

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

  async function update() {
    try {
      const response = await axios.put(`https://lunara-http-default-rtdb.firebaseio.com/details/${id}.json`, {
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
    if (id) {
      update();
    } else {
      post();
    }
  }
  async function handleDelete() {
    try {
      const response = await axios.delete('https://lunara-http-default-rtdb.firebaseio.com/details.json',  {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Post or Update data</h1>
      <label>First Name</label>
      <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
      <label>Last Name</label>
      <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
      <label>ID (for update)</label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Leave empty for new entry" />
      <button type="submit">Submit</button>
      <button type="submit" onClick={handleDelete}>delete</button>
    </form>
  );
}

export default AxiosUpdate;
