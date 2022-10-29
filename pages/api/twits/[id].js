import { firestore } from 'firebase/admin'

// 1:17:39

export default (req, res) => {
    const { query } = req
    const { id } = query

    firestore
        .collection('twits')
        .doc(id)
        .get()
        .then((doc) => {
            const id = doc.id
            const data = doc.data()
            const { createdAt } = data

            res.json({
                id,
                ...data,
                createdAt: +createdAt.toDate()
            })
        }).catch(() => {
            res.status(404).end()
        })
}
