import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/**/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DB_URL!,
  },
})

// dbCredentials: {
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT),
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   ssl: { ca: readFileSync('.cert/ap-southeast-2-bundle.pem').toString() },
// },
