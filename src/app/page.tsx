import {Box, Button, Card, CardContent, Container, Typography} from "@mui/material";
import {Award, Heart, Leaf, Users} from "lucide-react";

import PageLayout from "@/components/page-layout";

export default function Home() {
    return (
        <PageLayout>
            {/* ---------- HERO ---------- */}
            <Box
                component="section"
                className="py-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg mb-16"
            >
                <Container maxWidth="lg" className="text-center">
                    <Typography
                        component="h1"
                        variant="h2"
                        fontWeight={700}
                        className="mb-4"
                    >
                        Medicina Tradicional
                        <span className="block text-green-600">Natural y Holística</span>
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        className="mb-10 max-w-2xl mx-auto "
                    >
                        Descubre el poder curativo de la naturaleza con nuestros tratamientos
                        respaldados por siglos de sabiduría ancestral.
                    </Typography>

                    <Box className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            href="https://wa.me/524422799328?text=Hola%20quiero%20una%20consulta%20gratuita"
                        >
                            Consulta Gratuita
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            href="/consultas"
                        >
                            Conocer Más
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* ---------- FEATURES ---------- */}
            <Box component="section" className="py-20">
                <Container maxWidth="lg">
                    <Typography
                        component="h2"
                        variant="h4"
                        fontWeight={700}
                        align="center"
                        className="mb-4"
                    >
                        ¿Por qué elegir Gaia?
                    </Typography>
                    <Typography
                        align="center"
                        color="text.secondary"
                        className="mb-12 max-w-2xl mx-auto"
                    >
                        Combinamos la sabiduría ancestral con enfoques modernos para
                        ofrecerte el mejor cuidado integral de tu salud.
                    </Typography>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Leaf,
                                title: "100% Natural",
                                desc: "Tratamientos con ingredientes naturales sin efectos secundarios.",
                            },
                            {
                                icon: Heart,
                                title: "Cuidado Integral",
                                desc: "Enfoque holístico que trata la causa raíz, no solo los síntomas.",
                            },
                            {
                                icon: Users,
                                title: "Experiencia",
                                desc: "Más de 15 años ayudando a personas a recuperar su bienestar.",
                            },
                            {
                                icon: Award,
                                title: "Certificado",
                                desc: "Profesionales certificados en medicina tradicional y alternativa.",
                            },
                        ].map(({icon: Icon, title, desc}) => (
                            <Card
                                key={title}
                                elevation={1}
                                className="text-center p-6 bg-white shadow-sm"
                            >
                                <Icon className="h-12 w-12 text-green-600 mx-auto mb-4"/>
                                <CardContent>
                                    <Typography variant="h6" fontWeight={600} className="mb-2">
                                        {title}
                                    </Typography>
                                    <Typography color="text.secondary">{desc}</Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Box>

            {/* ---------- CTA FINAL ---------- */}
            <Box component="section" className="py-20 bg-green-600 text-white text-center rounded-lg">
                <Container maxWidth="md">
                    <Typography variant="h4" fontWeight={700} className="mb-4">
                        Comienza tu camino hacia el bienestar
                    </Typography>
                    <Typography variant="h6" className="mb-10 opacity-90">
                        Agenda tu consulta gratuita y descubre cómo podemos ayudarte.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            bgcolor: "white",
                            color: "primary.main",
                            "&:hover": {bgcolor: "grey.100"},
                        }}
                        href="/agenda"
                    >
                        Agendar Consulta
                    </Button>
                </Container>
            </Box>
        </PageLayout>
    );
}