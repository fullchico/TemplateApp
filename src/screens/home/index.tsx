import React from 'react';

import {FormAddParticipant} from '../../components/form/FormAddParticipant';
import {StatusBar} from '../../components/StatusBar';
import {Container, VStack} from '../../components/ui';

export const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar />
      <VStack>
        <FormAddParticipant />
      </VStack>
    </Container>
  );
};
