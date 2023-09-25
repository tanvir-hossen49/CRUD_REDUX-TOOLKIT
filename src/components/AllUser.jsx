import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailsSlice";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

const Read = () => {
    const dispatch = useDispatch();
    const [showPopup, setShowPopup] = useState(false);
    const [id, setId] = useState('');
    const [radioDate, setRadioData] = useState('')

    const {users, loading, searchData} = useSelector(state => state.app);

    useEffect(() => {
        dispatch(showUser());
    }, [dispatch]);

    if(loading) return <h1 className="text-center my-2">loading</h1>

    return (
        <Container>
           {showPopup && 
            <CustomModal 
                id={id} 
                showPopup={showPopup}
                setShowPopup={setShowPopup}
            />
            }
           <h1 className="text-center my-2">All User</h1>
           {/* radio form */}
            <Form className="d-flex justify-content-end my-3 gap-4">
                <Form.Check id='all'>
                    <Form.Check.Input 
                        type='radio' name='gender' value=''
                        checked={radioDate === ''}
                        onChange={(e) => setRadioData(e.target.value)} 
                    />
                    <Form.Check.Label>All</Form.Check.Label>
                </Form.Check>
                <Form.Check id='male'>
                    <Form.Check.Input 
                        type='radio' name='gender' value='Male'
                        checked={radioDate === 'Male'}
                        onChange={(e) => setRadioData(e.target.value)} 
                    />
                    <Form.Check.Label>Male</Form.Check.Label>
                </Form.Check>
                <Form.Check id='female'>
                    <Form.Check.Input
                        type='radio' name='gender' value='Female'
                        checked={radioDate === 'Female'}
                        onChange={(e) => setRadioData(e.target.value)} 
                    />
                    <Form.Check.Label>Female</Form.Check.Label>
                </Form.Check>
            </Form>
           <div className="row row-cols-1 row-cols-lg-3">
            {users &&
            users.filter((user) => {
                if(user.length === 0) return user;
                else{
                    return user.name.toLowerCase().includes(searchData.toLowerCase())
                }
            })
            .filter(user => {
                if(radioDate === 'Male') {
                    return user.gender.toLowerCase() === radioDate.toLowerCase()
                } else if(radioDate === 'Female') {
                    return user.gender.toLowerCase() === radioDate.toLowerCase()
                } else{
                    return user;
                }
            })
            .map(user => 
                <Card key={user.id} className="col mt-0">
                    <Card.Body>
                        <Card.Title>Name: {user.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Email: {user.email}</Card.Subtitle>
                        <Card.Text>Gender: {user.gender}</Card.Text>

                        <Button onClick={() => [setShowPopup(true), setId(user.id)]}>view</Button>
                        <Link to={`/edit/${user.id}`}>
                            <Button className="mx-2 btn-warning">edit</Button>
                        </Link>
                        <Button className="btn-danger" onClick={() => dispatch(deleteUser(user.id))}>delete</Button>
                    </Card.Body>
                </Card>
            )}
           </div>
        </Container>
    );
};

export default Read;