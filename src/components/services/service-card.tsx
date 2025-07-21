"use client";

import {Check} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Service} from "@/data/services";

type Props = { service: Service };

export default function ServiceCard({service}: Props) {
    return (
        <Card className="flex flex-col">
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-xl">
                    {service.name}
                </CardTitle>
                <CardDescription className="text-green-600 font-semibold">
                    ${service.price} MXN
                </CardDescription>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col gap-4">
                <p className="text-gray-700">{service.description}</p>

                <ul className="space-y-2">
                    {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                            <Check className="w-4 h-4 text-green-600"/>
                            {f}
                        </li>
                    ))}
                </ul>

                <div className="flex gap-2">
          <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">
            {service.duration}
          </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
            {service.modality}
          </span>
                </div>

                <Button
                    asChild
                    className="mt-auto w-full"
                >
                    <a href={`/calendar?service=${service.id}`}>Reservar</a>
                </Button>
            </CardContent>
        </Card>
    );
}