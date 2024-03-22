/* eslint-disable no-unused-vars */
import { Outlet, useLoaderData, useNavigate } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSidebar, Navbar, SmallSidebar } from "../components"
import { createContext, useState } from "react"
import { useContext } from "react"
import customFetch from "../utils/customFetch"
import { toast } from "react-toastify"

const DashboardContext = createContext()

const DashboardLayout = () => {
    const { user } = useLoaderData()
    const navigate = useNavigate();

    const [showSidebar, setShowSidebar] = useState(false)

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const logoutUser = async () => {
        navigate('/');
        await customFetch.get('/auth/logout');
        toast.success('Logging out...');
    };

    return (
        <DashboardContext.Provider
            value={{
                user,
                showSidebar,
                toggleSidebar,
                logoutUser
            }}>
            <Wrapper>
                <main className="dashboard">
                    <BigSidebar />
                    <SmallSidebar />
                    <div>
                        <Navbar />
                        <div className="dashboard-page">
                            <Outlet context={user} />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    )
}
export const useDashboardContext = () => useContext(DashboardContext)

export default DashboardLayout
