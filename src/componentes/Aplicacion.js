import React,{Component} from 'react';
import Productos from './Productos'
import Footer from './Footer';
import Header from './Header';

class Aplicacion extends Component{

    constructor(props) {
        super(props);
        this.state = {
            productos : [
                
            ]
        }
    }

    componentDidMount() {
        const productos = [
            {nombre:'Libro', precio:200},
            {nombre:'CD', precio:500},
            {nombre:'Cama', precio:700},
            {nombre:'Violín', precio:2100},
            {nombre:'Guitarra', precio:800},
            {nombre:'Libro 2 2', precio:6200}
        ];
        setTimeout(() => {
            this.setState({
                productos : productos
            });
        }, 3000);
    }

    render(){
        return(
            <div>
                <Header
                    titulo = "Nuestra Tienda Virtual"
                />
                <Productos
                    productos = {this.state.productos}
                />
                <Footer/>
            </div>
        );
    }
}

export default Aplicacion;