
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://xacarodvjyulefzuqtai.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);



async function uploadSingleFile(file) {

    const { data, error } = await supabase.storage.from('Safe').upload(new Date().getTime() + file.originalname, file.buffer, {
        contentType: file.mimetype,
        upsert: true,
    })

    let path = data.path;

    if (error) {
        throw error;
    }
    return path;
}


async function getFileUrl(path, time = 10, download) {
    const { data, error } = await supabase.storage
        .from('Safe')
        .createSignedUrl(path, time, { download: download });

    if (error) {
        throw error;
    }
    return data.signedUrl;
}



export default { uploadSingleFile, getFileUrl }