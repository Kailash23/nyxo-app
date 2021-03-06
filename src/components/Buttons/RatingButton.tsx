import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'
import { rateDay } from '@actions/sleep/sleep-data-actions'
import { fonts } from '../../styles/themes'
import IconBold from '../iconBold'
import TranslatedText from '../TranslatedText'
import ScalingButton from './ScalingButton'

type Props = {
  selected: boolean
  value: number
  title: string
  icon: string
  color: string
}

const RatingButton: FC<Props> = ({ selected, value, title, icon, color }) => {
  const dispatch = useDispatch()

  const handlePress = () => {
    dispatch(rateDay(value))
  }

  return (
    <Container>
      <ScalingButton
        analyticsEvent="Rating button pressed"
        onPress={handlePress}>
        <ButtonContents>
          <IconContainer color={color}>
            <IconBold name={icon} height={30} fill="black" width={30} />
          </IconContainer>
          <Text>{title}</Text>
        </ButtonContents>
      </ScalingButton>
    </Container>
  )
}

export default RatingButton

const Container = styled.View`
  flex: 1;
`

const Text = styled(TranslatedText)`
  margin-top: 5px;
  text-align: center;
  font-size: 15px;
  font-family: ${fonts.medium};
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
`

const ButtonContents = styled.View`
  align-items: center;
  margin-bottom: 10px;
`

type IconProps = {
  readonly color: string
}

const IconContainer = styled.View<IconProps>`
  background-color: ${({ color }) => color};
  border-radius: 30px;
`
