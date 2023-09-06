import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../components/Participant';
import { styles } from './styles';

export function Home() {
  const participants = [
    'John',
    'Emily',
    'Michael',
    'Sarah',
    'David',
    'Jessica',
    'Daniel',
    'Jennifer',
    'Matthew',
    'Elizabeth'
  ];

  function handleParticipantAdd(name: String){
    console.log(`Participant add...${name}`)
  }

  function handleParticipantRemove(name : String){
    console.log(`Participant removed...${name}`)
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          /* Percorrer array e capturar os participantes */
          participants.map(participant => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)}
            />
          ))
        }
      </ScrollView>
    </View>
  );
}