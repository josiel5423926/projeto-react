import { Switch, Route } from 'react-router-dom';
import Produtos from './pages/Produtos';
import Pedidos from './pages/Pedidos';



function Rotas() {
    return (
        <Switch>
            <Route exact path="/Produtos" component={Produtos} />;
            <Route exact path="/Pedidos" component={Pedidos} />;

        </Switch>
    )
}
export default Rotas;