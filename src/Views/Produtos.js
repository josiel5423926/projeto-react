
import React,{useState, useEffect}  from 'react';
import {  Button,ScrollView, Text, View  } from 'react-native';
import axios from 'axios'; // npm i axios 
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';



import TextCenter from "../components/TextCenter";

const Produtos = (props) => {


  const [lista, setLista] = useState([]);
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [preco_final, setPreco_final] = useState('');
  const [imagem, setImagem] = useState('');
  const [idproduto, setIdproduto] = useState('');

  useEffect(()=>{
    ListarDados();
  },[])
  
  async function ListarDados(){
    const res = await axios.get('http://localhost/teste/api/Listar.php');
    setLista(res.data.result);
    console.log(res.data.result);
  }
  return (
   
    <ScrollView>
      <View  style={{ flex: 1, 
    FlexDirectin: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 420,
    width: 200  
    
    
    }} > 
  

     <div className="container fluid "  > 
        <h2>Lista de Produtos</h2>
        
         
      <Card className="text-center px-2">
  
            
        <CardImg top width="100%" src={require('../../assets/img/honda_3.jpg')} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h2">Honda</CardTitle>
          <CardSubtitle tag="h3" className="mb-2 text-muted">CG 160 KS</CardSubtitle>

          <CardText style={{ color:'red'}}><del>R$ 88,000.00</del></CardText>
          <CardText>R$ 79,000.00</CardText>
          <Button
               
                  title="Comprar"
                  color="#2196F3"
                  accessibilityLabel="Learn more about this purple button"
                />
                <hr></hr>
        </CardBody>
        
      </Card>
       

      
      <Card className="text-center px-2"  >
      {lista.map(item =>(
                <React.Fragment key={item.idproduto}>
             
        <CardImg top width="50%" src={require('../../assets/img/Kawasaki_1.jpg')} alt="Card image cap" />{item.imagem}
        <CardBody>
          <CardTitle tag="h2">{item.categoria}</CardTitle>
          <CardSubtitle tag="h3" className="mb-2 text-muted">{item.descricao}</CardSubtitle>

          <CardText style={{ color:'red'}}><del>R$ {item.preco}</del></CardText>
          <CardText>R$ {item.preco_final}</CardText>
          <Button
               
                  title="Comprar"
                  color="#2196F3"
                  accessibilityLabel="Learn more about this purple button"
                />
        </CardBody>
        <hr></hr>
        </React.Fragment> 
        ))}
      </Card>
      
    </div>
     

   

  </View>
    
</ScrollView>
  
  );
};

export default Produtos;


