"use client"

import type {AlertItem} from "@/hooks/use-alerts"

import {Alert} from "./alert"

interface AlertContainerProps {
    alerts: AlertItem[]
    onRemove: (id: string) => void
    className?: string
}

export function AlertContainer({alerts, onRemove, className}: AlertContainerProps) {
    if (alerts.length === 0) return null

    return (
        <div className={`fixed top-4 right-4 z-50 space-y-2 max-w-md ${className || ""}`}>
            {alerts.map((alert) => (
                <Alert
                    key={alert.id}
                    type={alert.type}
                    message={alert.message}
                    title={alert.title}
                    dismissible={alert.dismissible}
                    onClose={() => onRemove(alert.id)}
                    className="shadow-lg"
                />
            ))}
        </div>
    )
}
