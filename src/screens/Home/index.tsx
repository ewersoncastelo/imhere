import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../components/Participant';
import { styles } from './styles';

export function Home() {
   const [participants, setParticipants] = useState(["John"]);

  function handleParticipantAdd(name: String){
    // Verificar se os nomes são únicos
    if(participants.includes("Sarah")){
      return Alert.alert(
        "Adicionar Participante", 
        "Já existe um participante na lista com este nome"
      )
    }

    setParticipants(prevState => [...prevState, "Ana"]);
    console.log(participants);
  }

  function handleParticipantRemove(name : String){
    return Alert.alert(
      "Excluir Participante", 
      `Deseja realmente excluir ${name} como presente no evento?`,
      [
        {
          text: "Sim",
          onPress: () => Alert.alert(`Participante ${name} removido`)
        },
        {
          text: "Não",
          style: "cancel"
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          keyboardType="numbers-and-punctuation"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleParticipantAdd("Ewerson")}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        keyExtractor={item => item}
        data={participants}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />  
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpatyParticipants}>
            Ninguém chegou ainda? Adicione quem já está presente.
          </Text>
        )}
      />
    </View>
  );
}