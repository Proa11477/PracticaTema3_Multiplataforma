import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.Principal}>
      <View>
      <Text style={styles.Titulo}>Bienvenido al Verificador de Signos Vitales Para Adultos Mayores</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.Opcion} onPress={() => navigation.navigate('Medicion de Signos')}>
          <Text style={styles.OpcionTexto}>Verificar Signos Vitales</Text>
          <FontAwesome6 name="hand-holding-heart" size={80} color="red"  />
        
        </TouchableOpacity>
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  Principal:{
    flex: 1,
    alignItems: 'center'
  },
  Titulo:{
    fontSize: 30,
    fontWeight: 'semibold', 
    textAlign: 'center',
    color: '#E14AE3',
    marginVertical: 40,
  },
  Opcion:{
    backgroundColor: '#fff',
    width: 390,
    height: 150,
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
  },
  OpcionTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  }
});
export default HomeScreen;
