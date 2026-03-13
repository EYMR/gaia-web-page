import {Box, Container, Link as MuiLink, Typography} from "@mui/material";
import NextLink from "next/link";

export default function Footer() {
    return (
        <Box component="footer" className="bg-gray-100 py-10 mt-20">
            <Container maxWidth="lg" className="text-center space-y-4">
                <Typography variant="body2" color="text.secondary">
                    © {new Date().getFullYear()} Gaia Medico Tradicional · El Pueblito, Corregidora · Lun-Sáb
                    11:00-19:00
                </Typography>

                <Box className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {[
                        {href: "/about", label: "Acerca de"},
                        {href: "/services", label: "Servicios"},
                        {href: "/products", label: "Productos"},
                        {href: "/treatments", label: "Tratamientos"},
                        {href: "/blog", label: "Blog"},
                        {href: "/testimonials", label: "Testimonios"},
                        {href: "/calendar", label: "Consultas"},
                        {href: "/contact", label: "Contacto"},
                        {href: "/faq", label: "Aviso de Privacidad"},
                    ].map(({href, label}) => (
                        <MuiLink
                            key={href}
                            component={NextLink}
                            href={href}
                            underline="hover"
                            color="text.primary"
                            className="font-medium"
                        >
                            {label}
                        </MuiLink>
                    ))}
                </Box>

                <Typography variant="caption" color="text.secondary">
                    Aviso de Privacidad · Términos de Servicio · Este sitio es informativo y no
                    sustituye asesoría médica profesional. El uso de los productos y servicios ofrecidos es bajo
                    responsabilidad del usuario. Este producto no es un medicamento.
                </Typography>
            </Container>
        </Box>
    );
}