import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PORT } from './config.js';
import db from './db.js';

const app = express();


app.use(cors());
app.use(bodyParser.json());


app.get('/api/data1', (req, res) => {
    db.query('SELECT * FROM bdpedidos', (err, rows) => {
        if (err) {
            res.status(500).send(err);
        } else {
            const result = rows.map(row => ({
                id: row.idproducto,
                value: row.cantidad,
                label: row.producto
            }));
            db.end();
            res.json(result);
        }
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

