import * as React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { db } from './firebase.js';

export default function Modal(props) {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarMensagem = () => {
    db.collection('contato').add({
      nome: nome,
      mensagem: mensagem,
    });
    alert('Sua mensagem foi enviada com sucesso.');

    setNome('');

    setMensagem('');
  };

  return (
    <View style={styles.modalParent}>
      <View
        style={{
          position: 'absolute',
          right: 0,
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => props.setModal(!props.showModal)}
          style={{ widht: '100%', height: '100%', top: 5, right: 5 }}
        >
          <Ionicons name="ios-close-circle" size={40} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.boxModal}>
        <Text
          style={{
            ...styles.textHeader,
            fontSize: 18,
          }}
        >
          Qual seu nome?
        </Text>
        <TextInput
          value={nome}
          onChangeText={(text) => setNome(text)}
          style={{
            height: 40,
            fontSize: 15,
            width: '100%',
            marginTop: 5,
            borderRadius: 5,
            borderColor: '#ccc',
            borderWidth: 1,
            marginBottom: 10,
          }}
          numberOfLines={4}
        ></TextInput>
        <Text
          style={{
            ...styles.textHeader,
            fontSize: 18,
          }}
        >
          Qual sua mensagem?
        </Text>
        <TextInput
          value={mensagem}
          onChangeText={(text) => setMensagem(text)}
          style={{
            height: 80,
            fontSize: 15,
            width: '100%',
            marginTop: 5,
            borderRadius: 5,
            borderColor: '#ccc',
            borderWidth: 1,
            marginBottom: 10,
          }}
          multiline
          numberOfLines={4}
        ></TextInput>
        <View
          style={{
            padding: 10,
            textAlign: 'center',
            width: '90%',
            marginLeft: 17,
            height: 65,
            backgroundColor: '#0099ff',
            borderRadius: 50,
            marginTop: 25,
          }}
        >
          <TouchableOpacity onPress={() => enviarMensagem()}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  marginTop: 10,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                Enviar mensagem
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
