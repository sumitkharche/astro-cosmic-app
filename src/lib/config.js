import dotenv from 'dotenv';

dotenv.config();

export const apiURL = process.env.COSMIC_API_URL;
export const bucketSlug = process.env.COSMIC_BUCKET_SLUG;
export const readKey = process.env.COSMIC_READ_KEY;

