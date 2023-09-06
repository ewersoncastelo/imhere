import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../components/Participant';
import { styles } from './styles';

export function Home() {
   const [participants, setParticipants] = useState<string[]>([]);
   const [newParticipant, setNewParticipant] = useState<string>("");


  function handleParticipantAdd(){
    // Verificar se os nomes são únicos
    if(participants.includes(newParticipant) || newParticipant == ""){
      return Alert.alert(
        "Adicionar Participante", 
        "Participante já cadastrado ou o campo está vazio"
      )
    }

    setParticipants(prevState => [...prevState, newParticipant]);
    setNewParticipant("");
  }

  function handleParticipantRemove(name : string){
    return Alert.alert(
      "Excluir Participante", 
      `Deseja realmente excluir ${name} como presente no evento?`,
      [
        {
          text: "Sim",
          onPress: () => (
            setParticipants(prevState => prevState.filter(participant => participant !== name)),
            Alert.alert(`Participante ${name} removido`)
          ),
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
          onChangeText={text => setNewParticipant(text)}
          value={newParticipant}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleParticipantAdd()}
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