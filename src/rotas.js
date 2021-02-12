import { Switch, Route } from 'react-router-dom';
import Produtos from './pages/Produtos';
import Pedidos from './pages/Pedidos';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Lojas from './pages/Lojas';



function Rotas() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />;
            <Route exact path="/Produtos" component={Produtos} />;
            <Route exact path="/Pedidos" component={Pedidos} />;
            <Route exact path="/Contato" component={Contato} />;
            <Route exact path="/Lojas" component={Lojas} />;

        </Switch>
    )
}
export default Rotas;