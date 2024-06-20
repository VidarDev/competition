import React from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: papayawhip;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  color: #bf4f74;
`;

export default function TestScreen() {
  return (
    <StyledView>
      <StyledText>Hello World!</StyledText>
    </StyledView>
  );
}
