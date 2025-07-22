import 'dotenv/config';                 // 👈 carga .env.local
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { readFileSync } from 'node:fs';

import { storage } from '@/lib/firebase';

(async () => {
    const bytes = readFileSync('./public/fbtestimonial.jpeg');
    const fileRef = ref(storage, 'public/testimonials/demo.jpg');
    await uploadBytes(fileRef, bytes, { contentType: 'image/jpeg' });
    const url = await getDownloadURL(fileRef);
    console.log('File URL:', url);
})();