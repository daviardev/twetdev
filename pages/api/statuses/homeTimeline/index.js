const timeline = [
    {
        key: 0,
        avatar: "https://pps.whatsapp.net/v/t61.24694-24/291483763_3316118818675085_5448892912731441282_n.jpg?ccb=11-4&oh=01_AdSRXLEmIR70J73qKMmmdvvgAekzTrwsi5obE2guMn-AeA&oe=6361E245",
        username: "devsilva",
        name: "Jerson David Silva Arjona",
        message: "Me pican los cocos ayyyy"
    },
    {
        key: 1,
        avatar: "https://pps.whatsapp.net/v/t61.24694-24/139538959_280211920738836_280568824938396229_n.jpg?ccb=11-4&oh=01_AdSaQMq1UBcTpfHvTPOFealevWki6Xkd2kaZmUBdujXwPQ&oe=6361E1B0",
        username: "DaXter",
        name: "Daniel Osorio Venecia",
        message: "Hola, soy tu amigo y docente dígital, Jonhatan Mercha"
    },
    {
        key: 2,
        avatar: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-startupgrind/events/freddy_vega_platzi.png",
        username: "Freddier",
        name: "Fredy Vega",
        message: "Recuerda, nunca pares de aprender"
    },
    {
        key: 3,
        avatar: "https://pps.whatsapp.net/v/t61.24694-24/291483763_3316118818675085_5448892912731441282_n.jpg?ccb=11-4&oh=01_AdSRXLEmIR70J73qKMmmdvvgAekzTrwsi5obE2guMn-AeA&oe=6361E245",
        username: "devsilva",
        name: "Jerson David Silva Arjona",
        message: "Me pican los cocos ayyyy"
    },
    {
        key: 4,
        avatar: "https://pps.whatsapp.net/v/t61.24694-24/139538959_280211920738836_280568824938396229_n.jpg?ccb=11-4&oh=01_AdSaQMq1UBcTpfHvTPOFealevWki6Xkd2kaZmUBdujXwPQ&oe=6361E1B0",
        username: "DaXter",
        name: "Daniel Osorio Venecia",
        message: "Hola, soy tu amigo y docente dígital, Jonhatan Mercha"
    },
    {
        key: 5,
        avatar: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-startupgrind/events/freddy_vega_platzi.png",
        username: "Freddier",
        name: "Fredy Vega",
        message: "Recuerda, nunca pares de aprender"
    },
    {
        key: 6,
        avatar: "https://pps.whatsapp.net/v/t61.24694-24/291483763_3316118818675085_5448892912731441282_n.jpg?ccb=11-4&oh=01_AdSRXLEmIR70J73qKMmmdvvgAekzTrwsi5obE2guMn-AeA&oe=6361E245",
        username: "devsilva",
        name: "Jerson David Silva Arjona",
        message: "Me pican los cocos ayyyy"
    },
    {
        key: 7,
        avatar: "https://pps.whatsapp.net/v/t61.24694-24/139538959_280211920738836_280568824938396229_n.jpg?ccb=11-4&oh=01_AdSaQMq1UBcTpfHvTPOFealevWki6Xkd2kaZmUBdujXwPQ&oe=6361E1B0",
        username: "DaXter",
        name: "Daniel Osorio Venecia",
        message: "Hola, soy tu amigo y docente dígital, Jonhatan Mercha"
    },
    {
        key: 8,
        avatar: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-startupgrind/events/freddy_vega_platzi.png",
        username: "Freddier",
        name: "Fredy Vega",
        message: "Recuerda, nunca pares de aprender"
    },
    {
        key: 9,
        avatar: "https://pps.whatsapp.net/v/t61.24694-24/291483763_3316118818675085_5448892912731441282_n.jpg?ccb=11-4&oh=01_AdSRXLEmIR70J73qKMmmdvvgAekzTrwsi5obE2guMn-AeA&oe=6361E245",
        username: "devsilva",
        name: "Jerson David Silva Arjona",
        message: "Me pican los cocos ayyyy"
    },
    {
        key: 10,
        avatar: "https://pps.whatsapp.net/v/t61.24694-24/139538959_280211920738836_280568824938396229_n.jpg?ccb=11-4&oh=01_AdSaQMq1UBcTpfHvTPOFealevWki6Xkd2kaZmUBdujXwPQ&oe=6361E1B0",
        username: "DaXter",
        name: "Daniel Osorio Venecia",
        message: "Hola, soy tu amigo y docente dígital, Jonhatan Mercha"
    },
    {
        key: 11,
        avatar: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-startupgrind/events/freddy_vega_platzi.png",
        username: "Freddier",
        name: "Fredy Vega",
        message: "Recuerda, nunca pares de aprender"
    }
]

export default (re, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(timeline))
}