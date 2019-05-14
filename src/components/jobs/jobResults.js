import React from 'react';
import Card from 'react-bootstrap/Card';

const JobResults = (props) => {
    return (
        <>
            {props.jobs.map(job =>
                <Card key={job.id} className='mt-3 mb-5'>
                    <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Subtitle>{job.company}</Card.Subtitle>
                        <Card.Text dangerouslySetInnerHTML={{ __html: job.description }} />
                        <Card.Link href={job.url}>Github listing</Card.Link>
                        <Card.Link href={job.company_url}>Company Website</Card.Link>
                    </Card.Body>
                </Card>
            )}
        </>
    );

};


export default JobResults;