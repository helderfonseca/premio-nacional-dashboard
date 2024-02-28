import './App.module.scss'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import classes from './App.module.scss'

function App() {

  return (
      <Container className={classes.background} fluid>
          <Button as='a' variant='outline' className='m-3'>add</Button>
      </Container>
  )
}

export default App
