"use client"

import type React from "react"

import {X} from "lucide-react"
import {useEffect, useRef} from "react"

import {Button} from "@/components/ui/button"

interface VideoModalProps {
    open: boolean
    onClose: () => void
    url: string
    title?: string
    description?: string
    selectedTestimonial?: never
}

export default function VideoModal({open, onClose, url, title, description}: VideoModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose()
            }
        }

        if (open) {
            document.addEventListener("keydown", handleEscape)
            document.body.style.overflow = "hidden"
            modalRef.current?.focus()
        } else {
            document.body.style.overflow = "unset"
            if (videoRef.current) {
                videoRef.current.pause()
            }
        }

        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = "unset"
        }
    }, [open, onClose])

    const handleBackdropClick = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            onClose()
        }
    }

    if (!open || !url) {
        return null
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-4xl mx-4 bg-white rounded-lg shadow-2xl overflow-hidden focus:outline-none"
                tabIndex={-1}
            >
                {/* Close Button */}
                <Button
                    onClick={onClose}
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full"
                    aria-label="Cerrar modal"
                >
                    <X className="h-5 w-5"/>
                </Button>

                {/* Video Section */}
                <div className="relative aspect-video bg-black">
                    <video ref={videoRef} className="w-full h-full" controls preload="metadata" autoPlay>
                        <source src={url} type="video/mp4"/>
                        <track kind="captions" srcLang="es" label="Español"/>
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>

                {/* Content Section */}
                {(title || description) && (
                    <div className="p-6 space-y-4">
                        {title && (
                            <h2 id="modal-title" className="text-2xl font-bold text-gray-900">
                                {title}
                            </h2>
                        )}
                        {description && <p className="text-gray-700 leading-relaxed">{description}</p>}
                    </div>
                )}
            </div>
        </div>
    )
}
