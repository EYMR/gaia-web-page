import type {ReactNode} from "react"

export type AlertType = "success" | "error" | "warning" | "info"

export interface AlertProps {
    type: AlertType
    message: string | ReactNode
    title?: string
    dismissible?: boolean
    onClose?: () => void
    className?: string
    children?: ReactNode
}
