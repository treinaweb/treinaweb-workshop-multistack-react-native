import styled from '@emotion/native';

export const FormContainer = styled.View`
    padding: 0 ${({ theme }) => theme.spacing(2)};
`;

export const TextContainer = styled.Text`
    text-align: center;
    padding: ${({ theme }) => theme.spacing(4) + ' ' + theme.spacing()};
`;

export const ErrorText = styled(TextContainer)`
    color: ${({ theme }) => theme.colors.error};
`;

export const ResponseContainer = styled.View`
    padding: ${({ theme }) => theme.spacing(5) + ' 0 ' + theme.spacing(8)};
`;
