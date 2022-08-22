import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <header className="w-750
    h-75 d-inline-block mx-auto" style={{ color:'black', }}>
      <h1>this is heading</h1>
      <Button>hello</Button>
    </header>
  );
}

export default Header;