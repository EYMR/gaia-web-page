import {Box, Button, Card, CardContent, Container, Typography} from "@mui/material";
import {Award, Heart, Leaf, Users} from "lucide-react";

import PageLayout from "@/components/page-layout";

export default function HomePageClient() {
    return (
        <PageLayout>
            {/* ---------- HERO ---------- */}
            <Box component="section" className="py-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg mb-16">
                <Container maxWidth="lg">
                    <Box sx={{textAlign: "center", width: "100%"}}>
                        <Typography
                            component="h1"
                            variant="h2"
                            fontWeight={700}
                            sx={{
                                mb: 2,
                                textAlign: "center",
                                width: "100%",
                            }}
                        >
                            Medicina Tradicional
                            <Box component="span" sx={{display: "block", color: "green.600"}}>
                                Natural y Holística
                            </Box>
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                width: "100%",
                                mb: 5,
                            }}
                        >
                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{
                                    textAlign: "center",
                                    maxWidth: "600px", // Fixed max-width instead of Tailwind class
                                    lineHeight: 1.6,
                                    px: 2, // Padding for mobile
                                }}
                            >
                                Descubre el poder curativo de la naturaleza con nuestros tratamientos respaldados por
                                siglos de
                                sabiduría ancestral.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: {xs: "column", sm: "row"},
                                gap: 2,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                href="https://wa.me/524422799328?text=Hola%20podrías%20darme%20más%20información"
                            >
                                Contáctanos por WhatsApp
                            </Button>
                            <Button variant="outlined" color="primary" size="large" href="/treatments">
                                Conocer Más
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* ---------- FEATURES ---------- */}
            <Box component="section" className="py-20">
                <Container maxWidth="lg">
                    <Box sx={{textAlign: "center", width: "100%", mb: 6}}>
                        <Typography
                            component="h2"
                            variant="h4"
                            fontWeight={700}
                            sx={{
                                mb: 2,
                                textAlign: "center",
                            }}
                        >
                            ¿Por qué elegir Gaia?
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                width: "100%",
                            }}
                        >
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{
                                    textAlign: "center",
                                    maxWidth: "600px", // Fixed max-width
                                    lineHeight: 1.6,
                                    fontSize: "1.1rem", // Slightly larger for better readability
                                    px: 2, // Padding for mobile
                                }}
                            >
                                Combinamos la sabiduría ancestral con enfoques modernos para ofrecerte el mejor cuidado
                                integral de tu
                                salud.
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "repeat(2, 1fr)",
                                lg: "repeat(4, 1fr)",
                            },
                            gap: 4,
                        }}
                    >
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
                                desc: "Más de 10 años ayudando a personas a recuperar su bienestar.",
                            },
                            {
                                icon: Award,
                                title: "Certificado",
                                desc: "Profesional certificada en medicina tradicional y terapias alternativas.",
                            },
                        ].map(({icon: Icon, title, desc}) => (
                            <Card
                                key={title}
                                elevation={1}
                                sx={{
                                    textAlign: "center",
                                    p: 3,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Box sx={{mb: 2}}>
                                    <Icon
                                        style={{
                                            height: "48px",
                                            width: "48px",
                                            color: "#16a34a", // green-600
                                            margin: "0 auto",
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{flexGrow: 1, pt: 0}}>
                                    <Typography variant="h6" fontWeight={600} sx={{mb: 1}}>
                                        {title}
                                    </Typography>
                                    <Typography color="text.secondary" variant="body2">
                                        {desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
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