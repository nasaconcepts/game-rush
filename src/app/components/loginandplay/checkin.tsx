import './styles/checkin.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login: React.FC = () => {
  const [gameId, setGameId] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // check if gameId exist at the backend -To be implemented
    // check if user is already joined the room to play
    // navigate to the playground page
    //confirm that both game id and nickname are not empty
    const playIdentityData = {
      gameId,
      nickname,
    };
    navigate('/playground', { state: playIdentityData });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="form-group">
          <h1 className="blinking-text">Join Game</h1>
        </div>
        <div className="form-group">
          <label className="label-login">Game Id</label>
          <input
            className="ibput-box"
            onChange={(e) => setGameId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label-login">NickName</label>
          <input
            className="input-box"
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="transparent-button" onClick={handleLogin}>
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
