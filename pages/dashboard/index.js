import withAuth from "@components/auth/withAuth"
import DashboardWrapper from "@components/Dashboard/DashboardWrapper"
import React from "react"

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <h1 className="text-center">Dashboard</h1>
    </DashboardWrapper>
  )
}

export default withAuth(Dashboard)
