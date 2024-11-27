import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

/*const App = () => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola, React Native!</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Enviar" onPress={() => alert(inputValue)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40, 
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});

export default App; */


const Cat = props => {
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    }}>     
      <Text>Hello, I am {props.name}!</Text>
       <Image
      source ={{uri: 'https://logowik.com/content/uploads/images/black-clover8928.jpg'}}style ={{
        marginTop: 500,
        width: 400,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      ></Image>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
}

export default Cat;


function ejercicioApp(){
  return(
    <View>
      <View style={styles.container}><Text>Hellou</Text></View>
      <TouchableOpacity title="ON/OFF"></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  Foco: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundcolor: "red",
  },
});