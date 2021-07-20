// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function startServer(req, res) {
  res.status(200).json({ message : 'Responsing from GraphQL ' })
}
