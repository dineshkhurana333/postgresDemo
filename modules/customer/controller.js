async function create(req, res, next) {
    const db = req.app.db;

    try {
        await db.query(`INSERT INTO public.customer VALUES('${req.body.name}')`)
        res.status(200).send({ message: 'Inserted' });
    } catch (error) {
        next(error)
    }


}

module.exports = { create }