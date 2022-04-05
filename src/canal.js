import {Router} from 'express';

const router = new Router();


// GET /canal/aberto?followers=1000
router.get("/:tipo", (req, res) => {   
    console.log(req.query.followers);     // quantidade de followers do canal
    console.log(req.params.tipo);         // o canal pode ser 'aberto' ou 'privado'
    
    res
        .status(200)    
        .json(req.body);
});

router.post("/", (req, res) => {
    res
        .status(200)    
        .json(req.body);
})

router.patch("/:id", (req, res) => {
    alteraMeuProduto(req.params.id, req.body);

    res
        .status(200)    
        .json(req.body);
})

router.delete("/:id", (req, res) => {
    deletaMeuProduto(req.params.id, req.body);

    res
        .status(200); 
})

export default router;