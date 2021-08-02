import withAuth from "@components/auth/withAuth"
import React from "react"

const Dashboard = () => {
    return (
        <div>
            Welcome to your dashboard
        </div>
    )
}

export default withAuth(Dashboard)
