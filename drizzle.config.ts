import { defineConfig } from 'drizzle-kit'
import { readFileSync } from 'fs'

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/**/schema.ts',
  out: './drizzle',
  dbCredentials: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { ca: readFileSync('.cert/ap-southeast-2-bundle.pem').toString() },
  },
})
