import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function PaymentCallback() {
    const [status, setStatus] = useState('Processing...');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const verifyPayment = async () => {
            const token = localStorage.getItem('jwtToken');
            const searchParams = new URLSearchParams(location.search);
            const transactionId = searchParams.get('transactionId');

            try {
                const response = await fetch('https://amrti-main-backend.vercel.app/api/v1/amrti/payment/verify', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({ transactionId }),
                });

                if (response.ok) {
                    const result = await response.json();
                    setStatus(result.status === 'SUCCESS' ? 'Payment Successful' : 'Payment Failed');

                    setTimeout(() => {
                        navigate(result.status === 'SUCCESS' ? '/order-confirmation' : '/payment-failed');
                    }, 3000);
                } else {
                    setStatus('Failed to verify payment');
                }
            } catch (error) {
                console.error('Error:', error);
                setStatus('An error occurred');
            }
        };

        verifyPayment();
    }, [navigate, location]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">{status}</h1>
                <p>Please wait while we process your payment...</p>
            </div>
        </div>
    );
}