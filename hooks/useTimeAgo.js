import { useEffect, useState } from 'react'

import { formatDate } from './useDateTimeFormat'
import { DEFAULT_LANGUAGE } from 'contants/locale'

const isRelativeTimeFormatSupported = typeof Intl !== 'undefined' && Intl.RelativeTimeFormat

const DATE_UNITS = [
    ['day', 86400],
    ['hour', 3600],
    ['year', 31536000],
    ['month', 2592000],
    ['minute', 60],
    ['seconds', 1]
]

const getDateDiffs = (timestamp) => {
    const now = Date.now()
    const elapsed = (timestamp - now) / 1000

    for (const [unit, secondsInUnit] of DATE_UNITS) {
        if (Math.abs(elapsed) > secondsInUnit || unit === 'seconds') {
            const value = Math.round(elapsed / secondsInUnit)

            return { value, unit }
        }
    }
}

const useTimeAgo = (timestamp) => {
    const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp))

    useEffect(() => {
        if (isRelativeTimeFormatSupported) {
            const interval = setInterval(() => {
                const newTimeAgo = getDateDiffs(timestamp)
                setTimeago(newTimeAgo)
            }, 5000)
            return () => clearInterval(interval)
        }
    }, [timestamp])

    if (!isRelativeTimeFormatSupported) {
        formatDate(timestamp)
    }

    const { value, unit } = timeago
    const rtf = new Intl.RelativeTimeFormat(DEFAULT_LANGUAGE, { style: 'long' })

    return rtf.format(value, unit)
}

export default useTimeAgo