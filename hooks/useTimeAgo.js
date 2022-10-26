import { useEffect, useState } from "react"

const DATE_UNITS = [
    ['year', 31536000],
    ['month', 2592000],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['seconds', 1]
]

const getDateDiffs = timestamp => {
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
        const interval = setInterval(() => {
            const newTimeAgo = getDateDiffs(timestamp)
            setTimeago(newTimeAgo)
        }, 5000)
        return () => clearInterval(interval)
    }, [timestamp])

    const rtf = new Intl.RelativeTimeFormat('es', { style: 'short' })
    const { value, unit } = timeago

    return rtf.format(value, unit)
}

export default useTimeAgo