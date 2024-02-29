import './App.module.scss'
import Container from 'react-bootstrap/Container';
import classes from './App.module.scss';
import { Card } from 'react-bootstrap';
import { BarChart } from "./components/BarChart";
import { faker } from '@faker-js/faker';
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['Alimentação', 'Arte', 'Estética/Beleza', 'Investimento', 'Saúde', 'Serviço'];

export interface Data {
    labels: Array<string>;
    datasets: Array<{ label: string, data: Array<number>, backgroundColor: Array<string>, borderWidth: number }>;
}

const data: Data = {
        labels,
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: 'Votos de Candidatos',
                data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
                // you can set indiviual colors for each bar
                backgroundColor: [
                    'rgba(53, 162, 235, 0.5)',
                    'rgba(53, 162, 235, 0.5)',
                    'rgba(53, 162, 235, 0.5)'
                ],
                borderWidth: 1,
            }
        ]
}


function App() {
    return (
        <Container fluid className={classes.content}>
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

            <BarChart chartData={data} />
        </Container>
)
}

export default App
