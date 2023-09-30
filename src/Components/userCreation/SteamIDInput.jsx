import axios from "axios";
import { useState } from "react";

function SteamIDInput() {
  const [steamID, setsteamID] = useState("");

  const handleChange = (e) => {
    const steamIDValue = e.target.value;
    setsteamID(steamIDValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const steamIDData = { steamID };
    axios
      .post("http://localhost:3001/steamID", steamIDData)
      .then((result) => {
        console.log(result.status, result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input 
          onChange={handleChange}
          type="text"
          name="steamID"
          placeholder="Insert steamID"
          className="steamID-input"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}



export default SteamIDInput;

