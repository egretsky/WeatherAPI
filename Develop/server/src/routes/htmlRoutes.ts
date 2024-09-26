import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Router } from 'express';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = Router();

// TODO: Define route to serve index.html
// @ts-ignore
router.get('/', (_req: Request, res: Response) => {
    //@ts-ignore
    res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});

export default router;
