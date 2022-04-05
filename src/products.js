import {Router} from 'express';

const router = new Router();


// GET /products/fisico?pageSize=30
router.get("/:tipo", (req, res) => {   // o '?' em '/:tipo?' quer dizer q é optativo
    console.log(req.query.pageSize);
    console.log(req.params.tipo);
    
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

