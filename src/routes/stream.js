import { Router } from 'express';

const router = new Router();

// GET /stream/gravada?time=60
router.get('/:tipo', (req, res) => {
  console.log(req.query.time); // tempo em minutos da stream
  console.log(req.params.tipo); // stream pode ser 'gravada' ou 'ao vivo'

  res
    .status(200)
    .json(req.body);
});

router.post('/', (req, res) => {
  res
    .status(200)
    .json(req.body);
});

router.patch('/:id', (req, res) => {
  /* alteraMeuProduto(req.params.id, req.body); */

  res
    .status(200)
    .json(req.body);
});

router.delete('/:id', (req, res) => {
  /* deletaMeuProduto(req.params.id, req.body); */

  res
    .status(200);
});

export default router;
