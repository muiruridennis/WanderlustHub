import {  useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

import {ROUTES} from "../../Constants/routes"

function useGoogleAuthentication() {
    const navigate = useNavigate();

    const handleGoogleSuccess = useGoogleLogin({
        onSuccess: async (response) => {
            if ('access_token' in response) {
                const accessToken = response.access_token;
              await  fetch(`${process.env.REACT_APP_API_URL}/google-authentication`, {
                    method: 'POST',
                    body: JSON.stringify({
                        token: accessToken
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                navigate(ROUTES.main) 

            }
            else console.log("there is an error")

        },
    });
    return {
        handleGoogleSuccess,
    }
}

export default useGoogleAuthentication;