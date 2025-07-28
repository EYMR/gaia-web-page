"use client"

import {Play, Star} from "lucide-react"
import Image from "next/image"

import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Testimonials} from "@/data/testimonials";

interface TestimonialCardProps {
    testimonial: Testimonials
    onVideoClick: (testimonial: Testimonials) => void
}

export default function TestimonialCard({testimonial, onVideoClick}: TestimonialCardProps) {
    const handleClick = () => {
        if (testimonial.videoUrl) {
            onVideoClick(testimonial)
        }
    }

    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
                {testimonial.thumbnail && (
                    <div className="relative aspect-video">
                        <Image
                            src={testimonial.thumbnail || "/placeholder.svg"}
                            alt={`Testimonio de ${testimonial.name}`}
                            fill
                            className="object-cover"
                        />
                        {testimonial.videoUrl && (
                            <div
                                className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/40 transition-colors duration-300">
                                <Button
                                    onClick={handleClick}
                                    size="lg"
                                    className="bg-white/90 hover:bg-white text-black rounded-full p-4 group-hover:scale-110 transition-transform duration-300"
                                    aria-label={`Ver video de ${testimonial.name}`}
                                >
                                    <Play className="h-6 w-6 ml-1" fill="currentColor"/>
                                </Button>
                            </div>
                        )}
                    </div>
                )}

                {testimonial.image && !testimonial.thumbnail && (
                    <div className="relative aspect-video">
                        <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={`Testimonio de ${testimonial.name}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
            </div>

            <CardContent className="p-6">
                <div className="space-y-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600">{testimonial.location}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                />
                            ))}
                        </div>
                    </div>

                    <blockquote className="text-gray-700 italic">&#34;{testimonial.quote}&#34;</blockquote>

                    <div className="flex flex-wrap gap-2">
                        <span
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{testimonial.treatment}</span>
                        <span
                            className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{testimonial.duration}</span>
                    </div>

                    {testimonial.videoUrl && (
                        <Button onClick={handleClick} className="w-full mt-4 bg-transparent" variant="outline">
                            <Play className="h-4 w-4 mr-2"/>
                            Ver Video Testimonio
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
