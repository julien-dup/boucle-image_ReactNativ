import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , ScrollView , Button , TouchableOpacity } from 'react-native';

import image from './assets/img/opportunity.jpg'

import exampleJson from './assets/json/tp.json'

const exo1 = () => {
  return (
    
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Ma première application à la Manu</Text>
      </View>
    
  );
}


const exo2 = () => {
  return (
    
      <View style={styles.containerExo2}>
        <StatusBar style="auto" />
        <Image
        source={require('./assets/img/opportunity.jpg')}
        style={styles.imgExo2}
      />
        <Text style={styles.textex02}>Le rover Opportunity</Text>
      </View>
    
  );
}

const exo3 = () => {
  return (
    
      <View style={styles.containerExo2}>
        <StatusBar style="auto" />
        <Image
        source={image}
        style={styles.imgExo3}
      />
        <Text style={styles.textex03}>Le rover Opportunity</Text>
      </View>
    
  );
}

const exo4 = () => {
  return (
    <View style={styles.containerExo4}>
        <StatusBar style="auto" />
      <View style={styles.containImgExo4}>
        <Image
        source={image}
        style={styles.imgExo4}       
        />
      </View>
      <View style={styles.containScrollViewExo4}>
        <ScrollView>
            <Text>LA MANU est une marque de NOVEI Formation
              NOVEI Formation – Campus Inovia Bâtiment 12 – 1435 boulevard Cambronne – 60400 Noyon
              SIRET N° 752 434 605 00024 – Code activité : 8559A – Déclaration d’activité N° 32 60 03047 60
              2
              utilisant une batterie d'instruments embarqués pour analyser les
              roches les plus intéressantes :
              Chaque rover pèse environ 185 kg et se déplace sur six roues mues par
              l'énergie électrique fournie par des panneaux solaires. Il est équipé
              de trois paires de caméras utilisées pour la navigation et de
              plusieurs instruments scientifiques : une caméra panoramique située
              sur un mât à 1,5 mètre de hauteur, un outil pour abraser la surface
              des roches porté par un bras articulé sur lequel se trouvent également
              un spectromètre à rayons X, un spectromètre Mössbauer et une caméra
              microscope. Enfin, un spectromètre infrarouge est utilisé pour
              l'analyse des roches et de l'atmosphère.
              La mission MER fait partie du programme d'exploration de Mars de la
              NASA et prend la suite de deux missions américaines sur le sol martien
              aux capacités scientifiques beaucoup plus limitées : le programme
              Viking de 1976 et Mars Pathfinder de 1997. Les objectifs scientifiques
              du programme ont été remplis avec la découverte par les deux robots de
              plusieurs formations rocheuses qui résultent probablement de l'action
              de l'eau dans le passé : billes d'hématite grise et silicates. Les
              robots ont également permis d'étudier les phénomènes météorologiques,
              d'observer des nuages et de caractériser les propriétés des couches de
              l'atmosphère martienne. Les deux véhicules MER conçus et gérés par le
              Jet Propulsion Laboratory ont largement dépassé les objectifs qui leur
              étaient fixés : parcourir 600 mètres et rester opérationnel durant 90
              jours martiens. Spirit, désormais bloqué par le sable, a pu parcourir
              7,7 kilomètres et a transmis ses dernières données scientifiques le 22
              mars 2010. Opportunity, après une tempête de sable qui a recouvert ses
              panneaux solaires, est devenu injoignable et sa mission s'est
              officiellement terminée le 13 février 2019.
            </Text>
        </ScrollView>
      </View>
    </View>

  );
}

const exo5 = () => {
  return (
    <View style={styles.containerExo5}>
        <StatusBar style="auto" />
        <Button style={styles.buttonStyle} 
                title="FELICITATION" 
                accessibilityLabel='felicitation'>
        </Button>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textButtonStyle}>FELICITATION</Text>
        </TouchableOpacity>
    </View>
  );
}


const td = () => {
  return (

    <View style={{flex: 1}}>
      <StatusBar style="auto" />
      {
  
  exampleJson.map((a)=> {
  return(
    
  <View style={styles.containerTd}>
        

        <View style={styles.containerInfoImgTd}>
          <View style={styles.viewImage}>
            <Image source ={{uri: a.img}} style={styles.img}></Image>
          </View>
          <View style={styles.containerInfoTd}>
            <View style={styles.titleTd}>
              <Text style={styles.titleText}>{a.title}</Text>
            </View>
            <ScrollView style={styles.descTd}>
              <Text style={styles.descText}>{a.desc}</Text>
            </ScrollView>
          </View>
        </View>
        
  </View>
  


  );

  })
}
  </View>

 )
}

const tdCorrigé = () => {
  const data = require('./assets/json/tp.json')
  // test commentaire 
  return (
    <ScrollView style={{flex: 1}}>
      {/* commantaire dans le return */}
      {data.map((element) => (
       
        <View style={{flex: 1, flexDirection: 'row' , marginVertical: 5}}  >
            <View style={{flex: 2}}>
              <Image source={{uri: element.img}} style={styles.imgTdCorrige}></Image>
            </View>
            <View style={{flex: 1}}>
              <Text>{element.title}</Text>
              <Text>{element.desc}</Text>
            </View>
        </View>
    ))}
    </ScrollView>
  )
}

export default td

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerExo2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textex02: {
    flex: 1,
  },

  imgExo2: {
    flex: 3,
  },

  textex03: {
    flex: 1,
    color: 'red',
    marginLeft: 20,
  },

  imgExo3: {
    flex: 3,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
  },  

  containerExo4: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containImgExo4: {
    flex: 1,
  },

  imgExo4: {
    flex: 1,
  },  

  containScrollViewExo4: {
    flex: 1,
  },

  containerExo5: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  buttonStyle : {
    width: '60%',
    height: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,

  },

  textButtonStyle: {
    color: 'white'
  },

  containerTd: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 25,

  },

  containerInfoImgTd: {
    flex: 1,
    flexDirection: 'row',
    height: 300,
    justifyContent: 'space-around',
  },

  viewImage: {
    flex: 2,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },

  containerInfoTd: {
    flex: 2,
    flexDirection: 'column',
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
  },

  titleTd: {
    flex: 0.25,
  },

  descTd: {
    flex: 1,
    height: '75%',
  },

  img: {
    width: '100%',
    height: '100%',
  },

  titleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  imgTdCorrige: {
    height: 300,
    width: '100%',
  },
});
