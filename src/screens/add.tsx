import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from "react-native"
import Header from "../components/Header";
import React, { useState } from "react";


const [btnState, setBtnState] = useState<"in"|"out">("out")
export default function Add() {
    return (
        <>
            <Text>Adicionar uma Transação</Text>
           <View style={styles.container}>
            <View>
                <Text>
                  <button title="descrição" color="006EB7" />
                </Text>
            </View>

            <View>
                <Text style={styles.Name} >
                  <Button title="saida" color="006EB7" onPress={() => ('Botão presionado')} />
                </Text>
            </View>
           </View>

           <View style={styles.fioToText}>
            <Button title="Adicionar" onPress={() => Alert.alert('Botao presionad')} />
            <Button title="Cancelar" onPress={() => Alert.alert('botao presionado')} />
           </View>
        </>
        
    )
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
},
title: {
    marginHorizontal: 16,
    margintop: 15,
    alingItens: 'center',
    gap: 1,
},
Name: {
    marginHorizontal: 16,
    margintop: 15,
    alingItens: 'center',
    gap: 1,
},

fioToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 1,
    marginTop: 15,
},
});