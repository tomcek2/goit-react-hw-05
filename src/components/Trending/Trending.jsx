import { React } from 'react';

import { useAppContext } from 'components/AppContext/AppContext';

export const Trending = () => {
  const { trending } = useAppContext();

  return (
    <ul>
      {trending.map(trend => (
        <li>{trend.original_title}</li>
      ))}
    </ul>
  );
};
