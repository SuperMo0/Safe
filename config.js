import dotenv from 'dotenv';
import path from 'path'
if (process.env.NODE_ENV == 'development') {
    dotenv.config({ path: path.resolve(process.cwd(), './development-variables/.env') });
}
else {
    dotenv.config();
}