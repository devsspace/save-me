import withAuth from "@components/auth/withAuth"
import React from "react"

const Dashboard = () => {
  return <h1 className="text-center">Dashboard</h1>
}

export default withAuth(Dashboard)
