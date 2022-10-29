import React from 'react'

import Twet from 'components/Twet'

export default function TwitPage(props) {
    return <>
        <Twet {...props} />
    </>
}

TwitPage.getInitialProps = (context) => {
    const { query, res } = context
    const { id } = query

    return fetch(`http://localhost:3000/api/twits/${id}`).then(
        (apiRes) => {
            if (apiRes.ok) return apiRes.json()
            if (res) {
                res.writeHead(301, { location: '/home' }).end()
            }
        }
    )
}
