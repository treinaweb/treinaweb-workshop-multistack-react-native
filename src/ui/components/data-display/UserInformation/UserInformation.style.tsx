import { View } from 'react-native';
import styled, { css } from '@emotion/native';
import { AirbnbRating } from 'react-native-ratings';
import AppTheme from 'ui/themes/app-theme';

export const UserInformationContainer = styled(View, {
    shouldForwardProp: (prop) => prop !== 'darker',
})<{ darker: boolean }>`
    flex-flow: row;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(3) + ' ' + theme.spacing(2)};
    background-color: ${({ theme, darker }) =>
        theme.colors.grey[darker ? 100 : 50]};
`;

export const InformationContainer = styled.View`
    flex: 1;
    padding-left: ${({ theme }) => theme.spacing(2)};
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
`;

export const UserDescription = styled.Text`
    color: ${({ theme }) => theme.colors.text};
`;

export const RatingStyled = styled(AirbnbRating)``;
RatingStyled.defaultProps = {
    isDisabled: true,
    showRating: false,
    size: 10,
    count: 5,
    selectedColor: AppTheme.colors.warning,
    //@ts-ignore
    starContainerStyle: css`
        width: 100%;
        justify-content: flex-start;
    `,
};
