import React, { useState, useEffect } from "react";
import Loading from "../animation/Loading";
import DropZone from "../components/Dropbox";
import axios from "axios";
import "./Form.css";
import Zoom from "react-reveal/Zoom";

const Form = () => {
  const [file, setFile] = useState();
  const [text, setText] = useState(``);
  const [open, setOpen] = useState(false);
const[key, setKey] = useState('')
  useEffect(() => {
    console.log(file);
  }, [file]);

  const api = "http://5482-43-241-64-2.ngrok.io/custom/";

  const handleSubmit = async (file, key) => {
    console.log("Function entered");
    var formData = new FormData();

    formData.append("input_txt", file);
    formData.append("string" , key)

    
    setOpen(true);
    try {
      const data = await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setOpen(false);
      console.log(data.data)
      let arr = data.data.map( (e, i )=> {
          return (<>
              <li key={i}>{e}</li>
              <br/>
              </>
          )
      })
      setText(arr);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="form">
      <Zoom>
      <DropZone submit={handleSubmit} />
      </Zoom>

      <br />
      <Zoom>

        <input
          type="file"
          id="myFile"
          name="filename"
          className="custom-file-input"
          onChange={(e) => {
            setFile(e.target.files[0]);
            // handleSubmit(e.target.files[0]);
          }}
        />
      </Zoom>
<br/>
<br/>
<br/>
      <input type="text" className="keyword-input"  name="filename" placeholder="Give space separated keywords" onChange={(e) => setKey(e.target.value) }/>
      <br/>
      <div className="send-btn" onClick={() => handleSubmit(file, key)}>
          Send
      </div>
      {/* <input type="button" value="submit" onClick={() => handleSubmit(file)} /> */}
      <br />
      
      <p className="output">
        <h2 style={{textAlign: 'center'}}>Summary</h2>
        <hr />
        <div style={open ? { display: "inline-block" } : { display: "none" }}>
        <Loading />
      </div>
        {text}
      </p>
    </div>
  );
};

export default Form;
