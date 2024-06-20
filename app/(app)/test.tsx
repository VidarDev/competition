import React from 'react';
import styled from 'styled-components/native';
import { Link } from 'expo-router';

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

const ButtonContainer = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${(props: { bgColor: string }) => props.bgColor};
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: white;
`;

export default function TestScreen() {
  return (
    <StyledView>
      <StyledText>Hello World!</StyledText>
      <Link href="/sign-up" asChild>
        <ButtonContainer bgColor={'#bf4f74'}>
          <ButtonText>Button</ButtonText>
        </ButtonContainer>
      </Link>
    </StyledView>
  );
}
