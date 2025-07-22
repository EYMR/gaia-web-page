"use client"

import {AlertTriangle, CheckCircle, Info, X, XCircle} from "lucide-react"
import {useState} from "react"

import type {AlertProps} from "@/data/alert"

import {cn} from "@/lib/utils"

const alertVariants = {
    success: {
        container: "bg-green-50 border-green-200 text-green-800",
        icon: CheckCircle,
        iconColor: "text-green-500",
        titleColor: "text-green-800",
        closeButton: "text-green-500 hover:text-green-700 hover:bg-green-100",
    },
    error: {
        container: "bg-red-50 border-red-200 text-red-800",
        icon: XCircle,
        iconColor: "text-red-500",
        titleColor: "text-red-800",
        closeButton: "text-red-500 hover:text-red-700 hover:bg-red-100",
    },
    warning: {
        container: "bg-yellow-50 border-yellow-200 text-yellow-800",
        icon: AlertTriangle,
        iconColor: "text-yellow-500",
        titleColor: "text-yellow-800",
        closeButton: "text-yellow-500 hover:text-yellow-700 hover:bg-yellow-100",
    },
    info: {
        container: "bg-blue-50 border-blue-200 text-blue-800",
        icon: Info,
        iconColor: "text-blue-500",
        titleColor: "text-blue-800",
        closeButton: "text-blue-500 hover:text-blue-700 hover:bg-blue-100",
    },
}

export function Alert({type, message, title, dismissible = false, onClose, className, children}: AlertProps) {
    const [isVisible, setIsVisible] = useState(true)

    const variant = alertVariants[type]
    const IconComponent = variant.icon

    const handleClose = () => {
        setIsVisible(false)
        onClose?.()
    }

    if (!isVisible) return null

    return (
        <div
            className={cn("relative rounded-lg border p-4 shadow-sm", variant.container, className)}
            role="alert"
            aria-live="polite"
        >
            <div className="flex items-start gap-3">
                <IconComponent className={cn("h-5 w-5 flex-shrink-0 mt-0.5", variant.iconColor)} aria-hidden="true"/>

                <div className="flex-1 min-w-0">
                    {title && <h3 className={cn("text-sm font-semibold mb-1", variant.titleColor)}>{title}</h3>}

                    <div className="text-sm">
                        {typeof message === "string" ? <p className="leading-relaxed">{message}</p> : message}
                    </div>

                    {children && <div className="mt-3">{children}</div>}
                </div>

                {dismissible && (
                    <button
                        type="button"
                        onClick={handleClose}
                        className={cn(
                            "inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors",
                            variant.closeButton,
                        )}
                        aria-label="Dismiss alert"
                    >
                        <X className="h-4 w-4"/>
                    </button>
                )}
            </div>
        </div>
    )
}
