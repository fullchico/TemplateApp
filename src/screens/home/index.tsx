import React from 'react';

import {InputParticipant} from '../../components/InputParticipant';
import {StatusBar} from '../../components/StatusBar';
import {Container, VStack} from '../../components/ui';

export const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar />
      <VStack>
        <InputParticipant />
        <InputParticipant />
        <InputParticipant />
      </VStack>
    </Container>
  );
};
