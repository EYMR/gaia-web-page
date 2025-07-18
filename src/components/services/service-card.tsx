"use client";

import HealingIcon from "@mui/icons-material/Healing";
import {Button, Card, CardActions, CardContent, Chip, Typography} from "@mui/material";

import {Service} from "@/data/services";

export default function ServiceCard({s}: { s: Service }) {
    const waMsg = encodeURIComponent(
        `Hola, quiero agendar ${s.name} (${s.modality}) — ${s.duration}, $${s.price} MXN`
    );
    const waLink = `https://wa.me/524422799328?text=${waMsg}`;

    return (
        <Card elevation={2} className="flex flex-col">
            <CardContent className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                    <HealingIcon color="primary"/>
                    <Typography variant="h6" fontWeight={600}>
                        {s.name}
                    </Typography>
                </div>

                <Typography variant="body2" color="text.secondary" className="mb-4">
                    {s.description}
                </Typography>

                <div className="flex gap-2 mb-2">
                    <Chip label={s.duration} size="small"/>
                    <Chip label={`$${s.price} MXN`} color="success" size="small"/>
                </div>
                <Chip label={s.modality} size="small" variant="outlined"/>
            </CardContent>

            <CardActions className="pt-0">
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Reservar por WhatsApp
                </Button>
            </CardActions>
        </Card>
    );
}