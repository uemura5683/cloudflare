import { Hono } from 'hono'

const app = new Hono()
app.get('/hello', (c) => c.text('Hello PWA night!'))

export default app