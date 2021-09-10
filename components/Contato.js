import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Contato(props) {
  //Função para abrir modal de Contato
  const abrirModalContato = () => {
    props.setModal(!props.showModal);
  };

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <ScrollView
        contentContainerStyle={{ padding: 20 }}
        style={styles.container}
      >
        <Text style={styles.textHeader}>
          Entre em contato para mais informações.
        </Text>

        <View style={{ ...styles.newTab, height: 65 }}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="ios-mail" size={40} color="grey" />
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                padding: 10,
              }}
            >
              ewerllon_cristian@hotmail.com
            </Text>
          </View>
        </View>

        <View style={{ ...styles.newTab, height: 65 }}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="logo-whatsapp" size={40} color="grey" />
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                padding: 10,
              }}
            >
              (92) 99356-88531
            </Text>
          </View>
        </View>

        <View style={{ ...styles.newTab, height: 65 }}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="logo-linkedin" size={40} color="grey" />
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                padding: 10,
              }}
            >
              Ewerllon Cristian
            </Text>
          </View>
        </View>

        <View style={{ ...styles.newTab, height: 65 }}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="logo-github" size={40} color="grey" />
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                padding: 10,
              }}
            >
              @EwerllonCBN
            </Text>
          </View>
        </View>

        <View style={{ ...styles.newTab, height: 65 }}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="ios-pin" size={40} color="grey" padding="0" />
            <Text
              style={{
                marginTop: 4,
                fontSize: 13,
                color: 'black',
                padding: 10,
              }}
            >
              Rua Equador, N 14, Manaus - AM
            </Text>
          </View>
        </View>

        <View
          style={{
            ...styles.newTab,
            height: 65,
            backgroundColor: '#0099ff',
            borderRadius: 25,
          }}
        >
          <TouchableOpacity onPress={() => abrirModalContato()}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="ios-chatbubbles"
                size={40}
                color="grey"
                padding="0"
              />

              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  padding: 10,
                  fontWeight: 'bold',
                  textAlign: 'justify',
                }}
              >
                Deixe uma mensagem :)
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textHeader: {
    fontSize: 25,
    color: '#0099ff',
    textAlign: 'left',
    marginLeft: 0,
    fontWeight: 'bold',
  },
  btnNavigation: {
    backgroundColor: '#0099ff',
    padding: 20,
    flexDirection: 'row',
    marginTop: 30,
    borderRadius: 12,
  },
  parentImage: {
    backgroundColor: 'blue',
    marginTop: 30,
  },
  btnAbrirNoNavegador: {
    backgroundColor: '#0099ff',
    padding: 15,
    borderRadius: 15,
    marginTop: 2,
  },
  //Estilização do texto do botão
  textBtn: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  //Estilização do perfil Sobre
  newTabPerson: {
    width: '100%',
    padding: 10,
    backgroundColor: '#e3e3e9',
    borderRadius: 4,
    flexDirection: 'row',
  },
  //Estilização do Nome que fica no topo Sobre
  textHeaderName: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0099ff',
    marginTop: 25,
    marginLeft: 8,
  },
  //Estilização do nome de profissão
  textHeaderProfission: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'grey',
    marginTop: 2,
    marginLeft: 8,
  },
  //Estilização das novas tabelas que ficam abaixo do perfil Sobre.
  newTab: {
    width: '100%',
    padding: 10,
    backgroundColor: '#e3e3e9',
    borderRadius: 4,
    height: 100,
    marginTop: 15,
  },
  //Estilização das novas tabelas que ficam na aba Portfólio.
  newTabPort: {
    width: '100%',
    padding: 10,
    backgroundColor: '#e3e3e9',
    borderRadius: 4,
    height: 100,
    marginTop: 10,
  },
  newTextTab: {
    padding: 1,
    fontSize: 16,
    color: '#0099ff',
  },
  modalParent: {
    position: 'absolute',
    padding: 5,
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1,
  },
  boxModal: {
    backgroundColor: 'white',
    height: 340,
    width: '100%',
    position: 'absolute',
    padding: 20,
    top: '50%',
    left: 5,
    marginTop: -165,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#0099ff',
  },
});
