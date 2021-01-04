import React from 'react';

import { Container, Shimmer } from './styles';

const TrackMock: React.FC = () => {
  return (
    <Container>
      <Shimmer width={150} height={150} />
      <div className="wrapper">
        <Shimmer width={230} height={24} />
        <Shimmer width={190} height={14} />
        <Shimmer width={150} height={14} />
        <Shimmer width={170} height={14} />
      </div>
      <div className="icons">
        <Shimmer width={20} height={20} />
        <Shimmer width={20} height={20} />
        <Shimmer width={20} height={20} />
      </div>
    </Container>
  );
};

const TrackMockList: React.FC = () => {
  return (
    <>
      <TrackMock />
      <TrackMock />
      <TrackMock />
      <TrackMock />
      <TrackMock />
      <TrackMock />
      <TrackMock />
      <TrackMock />
      <TrackMock />
      <TrackMock />
    </>
  );
};

export default TrackMockList;
