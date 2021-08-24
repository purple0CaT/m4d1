import { Navbar, Nav } from "react-bootstrap"

const MyNavbar = ({title,color}) => {
  return (
    <Navbar onClick={(e) => console.log('clicked!', e)} collapseOnSelect expand="lg" bg={color} variant={color}>
    <Navbar.Brand href="#home">{title}</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="#features">Menu</Nav.Link>
            <Nav.Link href="#pricing">Reservation</Nav.Link>
            <Nav.Link href="#pricing">Find us</Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>
  )
}

export default MyNavbar