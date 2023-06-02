import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'


const NonExistentPage = () => {
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(false);

  const OnButtonClick = () => {
    setButtonClicked(true);
    navigate('/')
  }
  return (
    <div className="error-page">
          <img src={require("E:/Internships/syncinterns/task3/resumebuilder/src/images/error.png")} alt="Page Not Found" />
      <h1 className= "error-title">PAGE NOT FOUND!</h1>
      <button onClick={OnButtonClick} className="error-link">Go back to homepage</button>
    </div>
  );
}

export default NonExistentPage;
