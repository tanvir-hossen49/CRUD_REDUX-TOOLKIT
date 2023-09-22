import { Card } from "react-bootstrap";

const Read = () => {
    return (
        <>  
           <h1 className="text-center my-2">All User</h1>
           <Card className="mx-auto w-50">
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
           </Card>
        </>
    );
};

export default Read;