import { ViewStyle } from "react-native"

export interface ICustomButtonProps {
    title: string
    onPress: () => void
    style?: ViewStyle
}