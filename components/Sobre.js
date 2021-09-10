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
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Contato() {
  let widthWindow = Dimensions.get('window').width - 200 - 100;
  return (
    <View style={{ flex: 1, padding: 15 }}>
      <ScrollView
        contentContainerStyle={{ padding: 20 }}
        style={styles.container}
      >
        <View style={styles.newTabPerson}>
          <Image
            style={{
              width: widthWindow,
              height: widthWindow,
              borderRadius: 50,
            }}
            source={{
              uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQEBUgrvd0zH0Q/profile-displayphoto-shrink_200_200/0/1628051400707?e=1635984000&v=beta&t=C5fZiBI3k3hgWPkY6087Zway5IsNoAYU3_PAq9Wf06s',
            }}
          />

          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.textHeaderName}>Ewerllon Cristian</Text>
            <Text style={styles.textHeaderProfission}>
              Mobile Front-End Developer
            </Text>
          </View>
        </View>

        <View style={styles.newTab}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#0099ff',
            }}
          >
            Perfil Profissional:
          </Text>
          <Text
            style={{
              width: '100%',
              fontSize: 14,
              textAlign: 'justify',
              marginTop: 8,
              color: 'grey',
            }}
          >
            Desenvolvedor de Software com habilidades em resolução de problemas
            front-end em aplicações web e mobile.
          </Text>
        </View>
        <View style={{ ...styles.newTab, height: 120 }}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#0099ff',
            }}
          >
            Objetivo Profissional:
          </Text>

          <Text
            style={{
              width: '100%',
              fontSize: 14,
              textAlign: 'justify',
              marginTop: 8,
              color: 'grey',
            }}
          >
            Busca uma vaga de junior ou estágio no setor de desenvolvimento
            mobile ou web para ampliar os conhecimentos em aplicações back-end e
            front-end.
          </Text>
        </View>
        <View style={{ ...styles.newTab, height: 120 }}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#0099ff',
            }}
          >
            Formação Acadêmica:
          </Text>
          <Text
            style={{
              width: '100%',
              fontSize: 14,
              textAlign: 'justify',
              marginTop: 8,
              color: 'grey',
            }}
          >
            Instituto de Ensino Superior FUCAPI - CESF cursando o 10° Período
            letivo de Engenharia da Computação com previsão de formação para
            2021/2.
          </Text>
        </View>
        <View style={{ ...styles.newTab, height: 215 }}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#0099ff',
            }}
          >
            Habilidades:
          </Text>
          <Text
            style={{
              width: '100%',
              fontSize: 14,
              textAlign: 'justify',
              marginTop: 8,
              color: 'grey',
              fontWeight: 'bold',
            }}
          >
            - Linguagem de Programação
          </Text>

          <Text
            style={{
              width: '100%',
              fontSize: 14,
              textAlign: 'justify',
              marginTop: 8,
              color: 'grey',
            }}
          >
            C, JavaScript, HTML/CSS, Python.
          </Text>

          <Text
            style={{
              width: '100%',
              fontSize: 14,
              textAlign: 'justify',
              marginTop: 8,
              color: 'grey',
              fontWeight: 'bold',
            }}
          >
            - Framworks / Sistemas
          </Text>

          <Text
            style={{
              width: '100%',
              fontSize: 14,
              textAlign: 'justify',
              marginTop: 8,
              color: 'grey',
            }}
          >
            Linux, AngularJS, NodeJS, NextJS, ReactJS, React-Native, Bootstrap,
            Expo, Visual Studio.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 5,
            }}
          >
            <Ionicons
              name="logo-javascript"
              size={30}
              style={{ marginRight: 20, color: 'grey' }}
            />
            <Ionicons
              name="logo-html5"
              size={30}
              style={{ marginRight: 20, color: 'grey' }}
            />
            <Ionicons
              name="logo-css3"
              size={30}
              style={{ marginRight: 20, color: 'grey' }}
            />
            <Ionicons
              name="logo-nodejs"
              size={30}
              style={{ marginRight: 20, color: 'grey' }}
            />
            <Ionicons
              name="logo-github"
              size={30}
              style={{ marginRight: 20, color: 'grey' }}
            />
            <Ionicons
              name="logo-python"
              size={30}
              style={{ marginRight: 0, color: 'grey' }}
            />
          </View>
        </View>

        <View style={{ ...styles.newTab, height: 120 }}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#0099ff',
            }}
          >
            Cursos Extras:
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                fontSize: 14,
                marginTop: 8,
                color: 'grey',
              }}
            >
              - Bootcamp Desenvolvedor Fullstack
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 8,
                color: 'grey',
                fontWeight: 'bold',
                marginLeft: 5,
              }}
            >
              - IGTI
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                fontSize: 14,
                marginTop: 8,
                color: 'grey',
              }}
            >
              - FullStack Master
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 8,
                color: 'grey',
                fontWeight: 'bold',
                marginLeft: 5,
              }}
            >
              - DankiCode
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                fontSize: 14,
                marginTop: 8,
                color: 'grey',
              }}
            >
              - Desenvolvimento de Apps
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 8,
                color: 'grey',
                fontWeight: 'bold',
                marginLeft: 5,
              }}
            >
              - DankiCode
            </Text>
          </View>
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
