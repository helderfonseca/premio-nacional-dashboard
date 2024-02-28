import './App.module.scss'
import Container from 'react-bootstrap/Container'
import classes from './App.module.scss'
import { Card } from 'react-bootstrap'

function App() {

  return (
      <Container className={classes.content}>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title style={{ fontWeight: 700 }}>Alimentação</Card.Title>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text style={{ fontSize: '13px' }}>Pastilim de dona Graça</Card.Text>
                    <Card.Text style={{ fontWeight: 700 }}>123</Card.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text style={{ fontSize: '13px' }}>Bodji Sab Sab</Card.Text>
                    <Card.Text style={{ fontWeight: 700 }}>520</Card.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text style={{ fontSize: '13px' }}>Gigalanche</Card.Text>
                    <Card.Text style={{ fontWeight: 700 }}>320</Card.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text style={{ fontSize: '13px' }}>Pinga Djond`Elena</Card.Text>
                    <Card.Text style={{ fontWeight: 700 }}>320</Card.Text>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Card.Text style={{ fontSize: '13px' }}>Atleta Kriol Lanchonete</Card.Text>
                    <Card.Text style={{ fontWeight: 700 }}>320</Card.Text>
                </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
              <Card.Body>
                  <Card.Title style={{ fontWeight: 700 }}>Arte</Card.Title>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Card.Text style={{ fontSize: '13px' }}>Nharti Artesanato e Decoração</Card.Text>
                      <Card.Text style={{ fontWeight: 700 }}>123</Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Card.Text style={{ fontSize: '13px' }}>Sonia Artes</Card.Text>
                      <Card.Text style={{ fontWeight: 700 }}>520</Card.Text>
                  </div>
              </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
              <Card.Body>
                  <Card.Title style={{ fontWeight: 700 }}>Estética/Beleza</Card.Title>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Card.Text style={{ fontSize: '13px' }}>Kuale Miniz</Card.Text>
                      <Card.Text style={{ fontWeight: 700, background: 'brown', borderRadius: '50%', padding: '5px', color: '#fff' }}>523</Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Card.Text style={{ fontSize: '13px' }}>By Linda Rocha Beauty</Card.Text>
                      <Card.Text style={{ fontWeight: 700, background: 'brown', borderRadius: '50%', padding: '5px', color: '#fff' }}>520</Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Card.Text style={{ fontSize: '13px' }}>Bell Make Up</Card.Text>
                      <Card.Text style={{ fontWeight: 700, background: 'brown', borderRadius: '50%', padding: '5px', color: '#fff' }}>320</Card.Text>
                  </div>
              </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
              <Card.Body>
                  <Card.Title style={{ fontWeight: 700 }}>Investimento</Card.Title>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Card.Text style={{ fontSize: '13px' }}>Chave Group Socidade Unipossol</Card.Text>
                      <Card.Text style={{ fontWeight: 700 }}>123</Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Card.Text style={{ fontSize: '13px' }}>Bodjy Sab Sab</Card.Text>
                      <Card.Text style={{ fontWeight: 700 }}>520</Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Card.Text style={{ fontSize: '13px' }}>Bodjy Sab Sab</Card.Text>
                      <Card.Text style={{ fontWeight: 700 }}>320</Card.Text>
                  </div>
              </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
              <Card.Body>
                  <Card.Title style={{ fontWeight: 700 }}>Saúde</Card.Title>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Card.Text style={{ fontSize: '13px' }}>Basefightclub</Card.Text>
                      <Card.Text style={{ fontWeight: 700 }}>123</Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Card.Text style={{ fontSize: '13px' }}>Lidie Clínica Dentária sociedade unipessoal lda</Card.Text>
                      <Card.Text style={{ fontWeight: 700 }}>520</Card.Text>
                  </div>
              </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
              <Card.Body>
                  <Card.Title style={{ fontWeight: 700 }}>Serviço</Card.Title>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Card.Text style={{ fontSize: '13px' }}>Telma Pires Serviços Comerciais</Card.Text>
                      <Card.Text style={{ fontWeight: 700 }}>123</Card.Text>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Card.Text style={{ fontSize: '13px' }}>ED - Comercio & Prestação de Serviço, Lda</Card.Text>
                      <Card.Text style={{ fontWeight: 700 }}>520</Card.Text>
                  </div>
              </Card.Body>
          </Card>
      </Container>
  )
}

export default App
