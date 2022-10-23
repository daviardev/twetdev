export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'Application/json')
    res.end(JSON.stringify({ name: 'Dorian, quien mundá es Dorian' }))
}