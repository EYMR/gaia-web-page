"use client";

import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
} from "@mui/material";
import Image from "next/image";
import {useState} from "react";

type Props = {
    open: boolean;
    url: string;          // imagen grande (Firebase o /public)
    onClose: () => void;
    title?: string;
    description?: string;
};

export default function ImageDialog({
                                        open,
                                        url,
                                        onClose,
                                        title,
                                        description,
                                    }: Props) {
    const [zoomed, setZoomed] = useState(false);
    const [imgSize, setImgSize] = useState<{ width: number; height: number } | null>(null);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="lg"
            fullWidth
            scroll="body"
        >
            <DialogTitle sx={{m: 0, p: 2, pr: 5}}>
                {title ?? "Imagen"}
                <IconButton
                    onClick={onClose}
                    aria-label="Cerrar"
                    sx={{position: "absolute", right: 8, top: 8}}
                >
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{p: 0}}>
                {description && (
                    <Box sx={{p: 2, pt: 0, color: "text.secondary"}}>
                        {description}
                    </Box>
                )}

                {/* Contenedor flexible */}
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        overflow: "hidden",
                        bgColor: "#000",
                    }}
                >
                    <Image
                        src={url}
                        alt={title ?? "Imagen ampliada"}
                        width={imgSize?.width ?? 1}
                        height={imgSize?.height ?? 1}
                        quality={90}
                        sizes="100vw"
                        onLoadingComplete={({naturalWidth, naturalHeight}) => {
                            setImgSize({width: naturalWidth, height: naturalHeight});
                        }}
                        style={{
                            display: "block",
                            width: zoomed ? "auto" : "100%",
                            height: zoomed ? "auto" : "auto",
                            objectFit: "contain",
                            maxWidth: zoomed ? "none" : "100%",
                            maxHeight: zoomed ? "none" : "80vh",
                            margin: "0 auto",
                            transition: "all 0.3s",
                            cursor: zoomed ? "zoom-out" : "zoom-in",
                            visibility: imgSize ? "visible" : "hidden",
                        }}
                        onClick={() => setZoomed(!zoomed)}
                    />

                    {/* Botón zoom */}
                    <IconButton
                        onClick={() => setZoomed(!zoomed)}
                        aria-label="Zoom"
                        sx={{
                            position: "absolute",
                            bottom: 16,
                            left: 16,
                            bgcolor: "rgba(0,0,0,0.6)",
                            color: "#fff",
                            "&:hover": {bgcolor: "rgba(0,0,0,0.8)"},
                        }}
                    >
                        {zoomed ? <ZoomOutIcon/> : <ZoomInIcon/>}
                    </IconButton>
                </Box>
            </DialogContent>
        </Dialog>
    );
}