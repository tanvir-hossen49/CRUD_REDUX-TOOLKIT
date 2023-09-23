import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailsSlice";
import CustomModal from "./CustomModal";

const Read = () => {
    const dispatch = useDispatch();
    const [showPopup, setShowPopup] = useState(false);
    const [id, setId] = useState('')

    const {users, loading} = useSelector(state => state.app);

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
           <div className="row row-cols-1 row-cols-lg-3">
            {users && users.map(user => 
                <Card key={user.id} className="col mt-0">
                    <Card.Body>
                        <Card.Title>Name: {user.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Email: {user.email}</Card.Subtitle>
                        <Card.Text>Gender: {user.gender}</Card.Text>

                        <Button onClick={() => [setShowPopup(true), setId(user.id)]}>view</Button>
                        <Button className="mx-2 btn-warning">edit</Button>
                        <Button className="btn-danger">delete</Button>
                    </Card.Body>
                </Card>
            )}
           </div>
        </Container>
    );
};

export default Read;