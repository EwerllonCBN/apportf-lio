import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import {
  NavigationContainer,
  NavigationHelpersContext,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as WebBrowser from 'expo-web-browser';
import { Video, AVPlaybackStatus } from 'expo-av';
import Modal from './Modal.js';
import Sobre from './components/Sobre.js';
import Contato from './components/Contato.js';
import Portfolio from './components/Portfolio.js';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 15 }}>
      <ScrollView
        contentContainerStyle={{ padding: 20 }}
        style={styles.container}
      >
        <Text style={styles.textHeader}>
          Escolha uma das opções abaixo para navegar.
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.btnNavigation}
        >
          <Ionicons name="md-home" size={30} color="white" />
          <Text style={{ color: 'white', marginTop: 8, marginLeft: 8 }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Portfólio')}
          style={styles.btnNavigation}
        >
          <Ionicons name="md-person" size={30} color="white" />
          <Text style={{ color: 'white', marginTop: 8, marginLeft: 8 }}>
            Portfólio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Sobre')}
          style={styles.btnNavigation}
        >
          <Ionicons name="ios-list" size={30} color="white" />
          <Text style={{ color: 'white', marginTop: 8, marginLeft: 8 }}>
            Sobre
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Contato')}
          style={styles.btnNavigation}
        >
          <Ionicons name="ios-information-circle" size={30} color="white" />
          <Text style={{ color: 'white', marginTop: 8, marginLeft: 8 }}>
            Contato
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
function PortfolioScreen({ navigation, route }) {
  //Criando os estados da imagens para manipulação

  const [image, setImage] = useState([
    {
      img: require('./resources/img2.jpg'),
      width: 0,
      height: 0,
      ratio: 0,
      website: 'https://br.linkedin.com/in/ewerllon-cristian-650986150',
    },
    {
      img: require('./resources/img2.jpg'),
      width: 0,
      height: 0,
      ratio: 0,
      website: 'https://br.linkedin.com/in/ewerllon-cristian-650986150',
    },
    {
      img: require('./resources/img2.jpg'),
      width: 0,
      height: 0,
      ratio: 0,
      website: 'https://br.linkedin.com/in/ewerllon-cristian-650986150',
    },
  ]);

  //Criando estado para manipular a largura do nosso dispositivo

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    let windowWidthN = Dimensions.get('window').width;
    setWindowWidth(windowWidthN - 30 - 40);

    let newImage = image.filter(function (val) {
      let w = Image.resolveAssetSource(val.img).width;
      let h = Image.resolveAssetSource(val.img).height;

      val.width = w;
      val.height = h;

      val.ratio = w / h;

      return val;
    });
    setImage(newImage);
  }, []);

  const abrirNavegador = async (website) => {
    let result = await WebBrowser.openBrowserAsync(website);
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 15,
      }}
    >
      <ScrollView
        contentContainerStyle={{ padding: 20 }}
        style={styles.container}
      >
        <Text style={{ ...styles.textHeader }}>
          Aqui você encontra meus últimos projetos.
        </Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            paddingBottom: 20,
          }}
        >
          <Text
            style={{
              marginTop: 20,
              marginBottom: 0,
              fontSize: 20,
              color: '#0099ff',
            }}
          >
            Projeto AppMusic
          </Text>
          <Video
            style={{ width: 305, height: 500, borderRadius: 4, marginTop: 10 }}
            rate={1.0}
            isMuted={true}
            volume={0.0}
            source={require('./resources/video1.mp4')}
            resizeMode="stretch"
            shouldPlay
            isLooping
          />

          <TouchableOpacity
            onPress={() => abrirNavegador(val.website)}
            style={styles.btnAbrirNoNavegador}
          >
            <Text style={styles.textBtn}>Abrir projeto no navegador</Text>
          </TouchableOpacity>
          <View style={styles.newTabPort}>
            <Text style={styles.newTextTab}>
              Este projeto foi feito interiamente em react-native
            </Text>
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            paddingBottom: 20,
          }}
        >
          <Text
            style={{
              marginTop: 20,
              marginBottom: 0,
              fontSize: 20,
              color: '#0099ff',
            }}
          >
            Projeto Lista de Tarefas
          </Text>
          <Video
            style={{ width: 305, height: 500, borderRadius: 4, marginTop: 10 }}
            rate={1.0}
            isMuted={true}
            volume={0.0}
            source={require('./resources/video2.mp4')}
            resizeMode="stretch"
            shouldPlay
            isLooping
          />

          <TouchableOpacity
            onPress={() => abrirNavegador(val.website)}
            style={styles.btnAbrirNoNavegador}
          >
            <Text style={styles.textBtn}>Abrir projeto no navegador</Text>
          </TouchableOpacity>
          <View style={styles.newTabPort}>
            <Text style={styles.newTextTab}>
              Este projeto foi feito interiamente em react-native
            </Text>
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            paddingBottom: 20,
          }}
        >
          <Text
            style={{
              marginTop: 20,
              marginBottom: 0,
              fontSize: 20,
              color: '#0099ff',
            }}
          >
            Projeto Timer
          </Text>
          <Video
            style={{ width: 305, height: 500, borderRadius: 4, marginTop: 10 }}
            rate={1.0}
            isMuted={true}
            volume={0.0}
            source={require('./resources/video3.mp4')}
            resizeMode="stretch"
            shouldPlay
            isLooping
          />

          <TouchableOpacity
            onPress={() => abrirNavegador(val.website)}
            style={styles.btnAbrirNoNavegador}
          >
            <Text style={styles.textBtn}>Abrir projeto no navegador</Text>
          </TouchableOpacity>
          <View style={styles.newTabPort}>
            <Text style={styles.newTextTab}>
              Este projeto foi feito interiamente em react-native
            </Text>
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            paddingBottom: 20,
          }}
        >
          <Text
            style={{
              marginTop: 20,
              marginBottom: 0,
              fontSize: 20,
              color: '#0099ff',
            }}
          >
            Projeto Calculadora
          </Text>
          <Video
            style={{ width: 305, height: 500, borderRadius: 4, marginTop: 10 }}
            rate={1.0}
            isMuted={true}
            volume={0.0}
            source={require('./resources/video4.mp4')}
            resizeMode="stretch"
            shouldPlay
            isLooping
          />

          <TouchableOpacity
            onPress={() => abrirNavegador(val.website)}
            style={styles.btnAbrirNoNavegador}
          >
            <Text style={styles.textBtn}>Abrir projeto no navegador</Text>
          </TouchableOpacity>
          <View style={styles.newTabPort}>
            <Text style={styles.newTextTab}>
              Este projeto foi feito interiamente em react-native
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

//FUNÇÃO DE SOBRE
function SobreScreen({ navigation }) {
  return <Sobre />;
}

//FUNÇÃO DE CONTATO
function ContatoScreen({ navigation }) {
  //Estado da modal
  const [showModal, setModal] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {showModal ? (
        <Modal showModal={showModal} setModal={setModal} />
      ) : (
        <View></View>
      )}
      <Contato showModal={showModal} setModal={setModal} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Portfólio') {
              iconName = focused ? 'md-person' : 'md-person';
            } else if (route.name === 'Sobre') {
              iconName = focused ? 'ios-list' : 'ios-list';
            } else if (route.name === 'Contato') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0099ff',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Portfólio" component={PortfolioScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
        <Tab.Screen name="Contato" component={ContatoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

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
