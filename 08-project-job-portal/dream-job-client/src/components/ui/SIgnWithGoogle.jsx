import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router';

const SIgnWithGoogle = () => {

    const { Sign_in_with_google } = useContext(AuthContext);

    // if(loading) return <p>Loading... </p>

    const handleGoogleLogin = () => {
        Sign_in_with_google()
            .then(rest => {
                console.log(rest);
            })
            .catch(err => {
                console.log(err);
            })
        // setLoading(true);
    }


    return (
        <div>
            <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                <Link onClick={handleGoogleLogin} to="/login" className="text-blue-600 hover:underline flex items-center gap-2 justify-center btn btn-outline"><FcGoogle /> Login with Google</Link>
            </p>
        </div>
    );
};

export default SIgnWithGoogle;