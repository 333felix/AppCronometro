import React, {Component} from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';


class App extends Component {
constructor(props){
  super(props);
  this.state = {
    numero:0,
    botao: 'Vai',
    botao2:'limpar'
  };
  this.timer=null;

  this.vai = this.vai.bind(this);
  this.limpar= this.vai.bind(this)
}
vai(){
if(this.timer != null){
//aqui vai para o timer
  clearInterval(this.timer);
  this.timer = null;
  this.setState({botao:'VAI'});

}else{
  //aqui vai girar o timer

  this.timer=setInterval( ()=>{
    this.setState({numero: this.state.numero + 0.1})
  },100);
this.setState({botao:'PARAR'});

}


}

botao2(){
  if(this.timer  != null){
    //aqui vai para o timer
      clearInterval(this.timer);
      this.timer = null;

}



this.setState({
  botao2:0,
  numero:0
  
})

}
  render(){
  return (
    <View style={styles.container}>
      
      <Image
        source={require('./src/cronometro.png')}
        style={styles.cronometro}
      />



      <Text style={styles.timer}>{this.state.numero.toFixed(2)}</Text>


      
      <View style={styles.btnArea}>



        <TouchableOpacity style={styles.btn} onPress={this.vai}>

          <Text style={styles.btnTexto}>{this.state.botao}</Text>

        </TouchableOpacity>



        <TouchableOpacity style={styles.btn} onPress={this.limpar}>

        <Text style={styles.btnTexto}>{this.state.botao2}</Text>

        </TouchableOpacity>

      </View>

    </View>
  );

  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#00aeef'
  },
timer:{
  marginTop:-160,
  color: '#fff',
  fontSize:65,
  fontWeight:'bold',

},
btnArea:{
  flexDirection:'row',
  marginTop: 70,
  height: 40,

},
btn:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#fff',
  height:40,
  margin: 17,
  borderRadius:9
},
btnTexto:{
  fontSize:20,
  fontWeight:'bold',
  color: '#00aeef'
},
cronometro:{
  alignItems: "center",
  justifyContent: "center"
}



});
export default App;