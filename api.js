import express from 'express'
const servidor = express()


servidor.listen(5001, () => console.log('A api SUBIU::::'));

servidor.get('/somar/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)

    let soma = n1 + n2

    resp.send({
        soma
    })
    })



    servidor.get ('/multi/:n1/:n2', (req,resp) => {
        let n1 = Number(req.params.n1)
        let n2 = Number (req.params.n2)

        let n3 = n1 * n2
        

        resp.send ({
            n3
        })

    })

