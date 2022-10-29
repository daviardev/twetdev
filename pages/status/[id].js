import React from 'react'
import { useRouter } from 'next/router'

import { firestore } from 'firebase/admin'

import Twet from 'components/Twet'

export default function TwitPage(props) {
    const router = useRouter()

    if (router.isFallback) return <img src='/spinner.gif' />

    return <>
        <Twet {...props} />
    </>
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '7WBbJyquh2HD9WvCEMTD' } }],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const { id } = params

    return firestore
        .collection('twits')
        .doc(id)
        .get()
        .then((doc) => {
            const id = doc.id
            const data = doc.data()
            const { createdAt } = data

            const props = {
                id,
                ...data,
                createdAt: +createdAt.toDate()
            }

            return { props }

        }).catch(() => {
            return { props: {} }
        })
}