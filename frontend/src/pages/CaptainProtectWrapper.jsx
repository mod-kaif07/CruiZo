import React, { useContext, useEffect, useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({ children }) => {

    const token = localStorage.getItem('c-token') // ✅ correct key
    const navigate = useNavigate()
    const { setCaptain } = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        // ✅ if token is missing → redirect immediately
        if (!token) {
            navigate('/captain-login')
            return
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/captainProfile`, {
            headers: {
                Authorization: `Bearer ${token}` // ✅ correct
            }
        })
        .then(response => {
            if (response.status === 200) {
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        })
        .catch(() => {
            localStorage.removeItem('c-token') // ✅ correct
            navigate('/captain-login')
        })

    }, [token])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <>{children}</>
}

export default CaptainProtectWrapper
