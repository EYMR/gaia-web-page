import 'dotenv/config';                 // 👈 carga .env.local
import {cert, initializeApp} from "firebase-admin/app";
import {getStorage} from "firebase-admin/storage";
// scripts/upload-admin.ts
import {readFileSync} from "node:fs";
import path from "node:path";

/* ---------- Init ---------- */
initializeApp({
    credential: cert(path.join(process.cwd(), "gaia-service-account.json")),
    storageBucket: "gaia-web-a0afb.firebasestorage.app",
});

const bucket = getStorage().bucket();

/* ---------- Subida ---------- */
(async () => {
    const localPath = "./public/fbtestimonial.jpeg"; // archivo local de prueba

    const destPath = "public/fbtestimonial.jpeg"; // destino en el bucket

    const file = bucket.file(destPath);

    await file.save(readFileSync(localPath), {
        metadata: {contentType: "image/jpeg"},
        public: true, // hace el objeto readable sin token
    });

    console.log("URL pública:", file.publicUrl());
})();