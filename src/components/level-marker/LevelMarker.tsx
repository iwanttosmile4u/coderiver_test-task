import React from 'react';

export type Level = 'high' | 'low' | 'normal';

interface Props {
  level: Level,
  text: string,
}

export const LevelMarker: React.FC<Props> = ({ level, text }) => (
  <button type="button" className={`btn btn--${level}`}>{text}</button>
);
