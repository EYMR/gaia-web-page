"use client"

import {useCallback, useState} from "react"

import type {AlertType} from "@/data/alert"

export interface AlertItem {
    id: string
    type: AlertType
    message: string
    title?: string
    dismissible?: boolean
    duration?: number
}

export function useAlerts() {
    const [alerts, setAlerts] = useState<AlertItem[]>([])

    const addAlert = useCallback((alert: Omit<AlertItem, "id">) => {
        const id = Math.random().toString(36).substr(2, 9)
        const newAlert = {...alert, id}

        setAlerts((prev) => [...prev, newAlert])

        // Auto-dismiss after duration if specified
        if (alert.duration) {
            setTimeout(() => {
                removeAlert(id)
            }, alert.duration)
        }

        return id
    }, [])

    const removeAlert = useCallback((id: string) => {
        setAlerts((prev) => prev.filter((alert) => alert.id !== id))
    }, [])

    const clearAlerts = useCallback(() => {
        setAlerts([])
    }, [])

    return {
        alerts,
        addAlert,
        removeAlert,
        clearAlerts,
    }
}
