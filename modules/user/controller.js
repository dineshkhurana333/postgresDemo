async function create(req, res, next) {
    const db = req.app.db;
console.log("Im here")
    // try {
    //     await db.query(`INSERT INTO public.user VALUES('${req.body.name}')`);

    //     return res.status(200).send({ message: 'Inserted' });
    // } catch (error) {
    //     console.log(error)
    //     //return res.status(500).json({ message: 'Something went wrong' });
    //     next;
    // }


    db.query(`INSERT INTO public.user VALUES('${req.body.name}')`).then(()=>{
        res.status(200).send({ message: 'Inserted' });
    }).catch(next);

    


}

module.exports = { create }