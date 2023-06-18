
import './Box.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Dog Shelter</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className='heading'>
        <h1>Big Dog Rescue Network</h1>
      </div>
      <div className='grid'>
        <div className='box1'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/16254908/pexels-photo-16254908/free-photo-of-a-portrait-of-a-cute-dog.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <Card.Title>Max</Card.Title>
              <Card.Text>
                Max is a 5-year-old Border Collie Retriever mix. He loves having lots of fun and enjoys playing with his toys and running around the yard. He has boundless energy and loves long hikes, chasing wild rabbits, and swimming in the lake.
              </Card.Text>
              <Button variant="primary">Adopt now!</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='box2'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/40986/dog-bulldog-white-tongue-40986.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <Card.Title>Rocco</Card.Title>
              <Card.Text>
                Rocco is a 5-year-old Boxer/Basset Hound mix rescue. He is a happy and friendly pup that loves spending time with his humans. Rocco loves long walks, playing fetch, and swimming in the lake.
              </Card.Text>
              <Button variant="primary">Adopt now!</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='box3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/7871245/pexels-photo-7871245.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Card.Body>
              <Card.Title>Teddy</Card.Title>
              <Card.Text>
                Teddy is a 3-year-old Siberian Husky/Labrador Retriever mix. This big, lovable pup has a heart of gold and loves to make people smile. Teddy loves playing with his toys and running around the yard, but he also enjoys taking it slow and laying on the couch.
              </Card.Text>
              <Button variant="primary">Adopt now!</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}



export default App;
