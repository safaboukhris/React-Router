import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddMovie = ({handleAdd}) => {
            /* declaring our const new movie with useState hook */
    const[newMovie,setNewMovie] = useState({
        title:``,
        description: "",
        rating: "",
        poster:""
    })
            /* importing our modal from bootstrap */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
            /* funtion for inserting the information in our input */
    const handleChange = (e) => {
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <Button variant="outline-light" onClick={handleShow} style={{fontWeight:"bolder"}}>
                ADD MOVIE
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color:"rgb(49,210,242)" , fontWeight:"bolder", fontStyle:"oblique"}}>ADD NEW MOVIES</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{fontWeight:"bold"}}>Title :</Form.Label>
                        <Form.Control
                            /* insert our props in the modal bootstrap */
                            type="text"
                            placeholder=" Enter your Movie's Title"
                            onChange={handleChange} name="title" value={newMovie.title}
                            autoFocus/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{fontWeight:"bold"}}>Description :</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=" Enter your Movie's Description"
                            onChange={handleChange} name="description" value={newMovie.description}
                            autoFocus/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{fontWeight:"bold"}}>Rating :</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder=" Enter your Movie's rating "
                            onChange={handleChange} name="rating" value={newMovie.rating}
                            autoFocus/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{fontWeight:"bold"}}>Poster URL :</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=" Enter your Movie's URL"
                            onChange={handleChange} name="poster" value={newMovie.poster}
                            autoFocus/>
                    </Form.Group>

                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-info" onClick={() => {handleAdd(newMovie); handleClose()}}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
    </div>
)
}

export default AddMovie
