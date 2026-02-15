import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Alumno from './Alumno';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Alumnos</Text>
      <ScrollView style={styles.scrollView}>
        <Alumno matricula="2114354" nombre="CANDELARIA MORA SAMANTHA" />
        <Alumno matricula="2121179" nombre="AGUILAR ORTIZ LUIS ROLANDO" />
        <Alumno matricula="2048051" nombre="BARRIENTOS GALLEGOS DIEGO" />
        <Alumno matricula="1979822" nombre="CANO MONTIEL KELLY YISSETH" />
        <Alumno matricula="2111889" nombre="CANTU SILVA JAVIER" />
        <Alumno matricula="2069119" nombre="CARMONA LOZANO ANGEL EMILIANO" />
        <Alumno matricula="2132842" nombre="CASTILLO ACOSTA JORGE" />
        <Alumno matricula="1994122" nombre="DAVILA GONZALEZ ALDO ADRIAN" />
        <Alumno matricula="2018230" nombre="DURAN BARRIENTOS FABRIZIO" />
        <Alumno matricula="2104564" nombre="FLORES GONZALEZ SEBASTIAN" />
        <Alumno matricula="2066033" nombre="FLORES LÓPEZ DIEGO" />
        <Alumno matricula="2132976" nombre="FLORES MARTINEZ ERICK ADRIAN" />
        <Alumno matricula="2066114" nombre="GARZA AVALOS DIEGO" />
        <Alumno matricula="2031243" nombre="GONZALEZ OVALLE CHRISTIAN GABRIEL" />
        <Alumno matricula="2064733" nombre="GRANJA PEÑA DIEGO" />
        <Alumno matricula="2094647" nombre="IBARRA RODRIGUEZ ALEXIS" />
        <Alumno matricula="2005102" nombre="MARTINEZ ELIAS ANGEL SEBASTIAN" />
        <Alumno matricula="2064574" nombre="MENDIETA GONZALEZ ESMERALDA GABRIELA" />
        <Alumno matricula="2024783" nombre="MIRELES VELAZQUEZ ALEJANDRO" />
        <Alumno matricula="2066077" nombre="MONSIVAIS SALAZAR ANDRES" />
        <Alumno matricula="2092151" nombre="PARRAZALEZ VALDESPINO MARTHA JULIETA" />
        <Alumno matricula="2103708" nombre="PEÑA MUNGARRO LUIS ANGEL" />
        <Alumno matricula="2115192" nombre="PUENTE REYNOSO JULIO CESAR" />
        <Alumno matricula="2103765" nombre="RAMIREZ LOPEZ BRYAN" />
        <Alumno matricula="2056778" nombre="RAMOS AVILA LILIANA VALERIA" />
        <Alumno matricula="2037503" nombre="RICO JAUREGUI MAURICIO" />
        <Alumno matricula="2131513" nombre="RIVERA LUNA ADRIAN" />
        <Alumno matricula="2013503" nombre="RIVERA REYNA JOSE EMILIO" />
        <Alumno matricula="2004613" nombre="RODRIGUEZ OLVERA ROSA ISELA" />
        <Alumno matricula="2133022" nombre="RODRIGUEZ RODRIGUEZ ANGEL AZAEL" />
        <Alumno matricula="2026061" nombre="SANCHEZ GALARZA JUAN CARLOS" />
        <Alumno matricula="2095320" nombre="SOLIS ORTIZ ALFREDO" />
        <Alumno matricula="2025350" nombre="VELAZQUEZ ABREGO HERWIN DANIEL" />
        <Alumno matricula="2103895" nombre="VILLAGRA RODRIGUEZ ANDRES NEHUEL" />
        <Alumno matricula="1857791" nombre="ZACATENCO OLIVE RODRIGO" />
        <Alumno matricula="2025218" nombre="ZAVALA CANTU TERESA MARGARITA" />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    width: '100%',
    paddingHorizontal: 20,
  },
});
