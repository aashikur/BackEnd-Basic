import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplicant = () => {
    const [totalApplicant, setTotalApplicant] = React.useState([]);
    const data = useLoaderData();
    const params = useParams();

    console.log(params)

    useEffect(() => {
        axios.get(`http://localhost:3000/applications/${params.id}`).then(data => {console.log('data is loaded applicant : ', data.data); setTotalApplicant(data.data)}).catch(err => console.log(err))
    }, [params])
    console.log(data)
    return (
        <div>
            ViewApplicant of: {params.id} 
            <br />
            data : {totalApplicant.length}
        </div>
    );
};

export default ViewApplicant;