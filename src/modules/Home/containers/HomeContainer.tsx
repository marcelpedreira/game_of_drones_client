import React, { useContext, useEffect } from 'react';
// import connect from "react-redux/es/connect/connect";
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import HomeForm from '../components/HomeForm';
import { GameContext } from '../../../GameContext';
import { History } from 'history';

interface IProps {
  history: History;
}

const HomeContainer: React.FC<IProps> = ({ history }) => {
  const { changePlayers, cleanScore } = useContext(GameContext);

  const handleSubmit = (players: string[]) => {
    changePlayers(players);
    history.push('/round/1/player/0');
  };

  useEffect(() => {
    cleanScore();
  }, []);

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Enter Players Names
      </Typography>
      <HomeForm onSubmit={handleSubmit} />
      <div style={{ marginTop: '5rem' }}>
        Check the <Link to="/records">records</Link>
      </div>
    </div>
  );
};

export default HomeContainer;
