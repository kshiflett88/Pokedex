import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';


export function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <div>This is the home Page</div>
      <Link to='/Kanto'>Kanto</Link>
      <button onClick={() => navigate('/pokemon/kanto')}>Visit the Kanto Region!</button>
    </div>
  );
}
