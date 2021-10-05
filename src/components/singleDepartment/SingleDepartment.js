import React from 'react';
import { useHistory } from "react-router-dom";
import { Card } from 'react-bootstrap';

const SingleDepartment = (props) => {
    
    const {id,departmentImage, departmentName} = props.department;
    
    const history = useHistory()
    
    const cardStyle = {
        width: '22.5%',
        height: '200px',
        borderRadius: '5px',       
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '15px',
    }

    const cardImage = {
        width: '100%',
        height: '100%',
    }

    const carttitle = {       
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        textTransform: 'capitalize',        
        fontSize: '20px',
        color: '#fff',
    }
    
    const showDetails = () => {
        history.push(`/all-departments/${id}/course-details`);
    }

    return (
        <Card style={cardStyle} onClick= {() => showDetails()}>
        <Card.Img variant="top" src={departmentImage} style ={cardImage}/>
        <Card.Body style = {carttitle}>
            <Card.Title>{departmentName}</Card.Title>    
        </Card.Body>
</Card>
    );
};

export default SingleDepartment;