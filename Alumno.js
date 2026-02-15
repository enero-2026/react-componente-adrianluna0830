import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Alumno(props) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
        <View style={styles.info}>
          <Text style={styles.nombre}>{props.nombre}</Text>
          <Text style={styles.matricula}>{props.matricula}</Text>
        </View>
      </View>
      
      <Button 
        title={mostrar ? "Ocultar" : "Ver mas"} 
        onPress={() => setMostrar(!mostrar)} 
      />
      
      {mostrar && (
        <View style={styles.extra}>
          <Text style={styles.text}>Carrera: Ciencias Computacionales</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: '#ccc',
  },
  info: {
    flex: 1,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  matricula: {
    fontSize: 14,
    color: '#666',
  },
  extra: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  text: {
    fontSize: 14,
    color: '#444',
  },
});
