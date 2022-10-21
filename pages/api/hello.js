// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(__, res) {
  res.status(200).json({
    userName: 'Goku',
    love: 'Hago este llamado para que tu vuelvas',
    isOver: 'Es más de 9000'
  })
}
