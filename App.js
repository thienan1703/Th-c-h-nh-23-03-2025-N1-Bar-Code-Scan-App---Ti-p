import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CheckoutScreen = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Checkout 💳</Text>
      <Text style={styles.price}>₹ 1,527</Text>
      <Text style={styles.tax}>Including GST (18%)</Text>
      
      <View style={styles.paymentOptions}>
        <TouchableOpacity style={styles.selectedOption}><Text>💳 Credit Card</Text></TouchableOpacity>
        <TouchableOpacity style={styles.option}><Text> Apple Pay</Text></TouchableOpacity>
      </View>
      
      <Text style={styles.label}>Card number</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={cardNumber} onChangeText={setCardNumber} placeholder="5261 4141 0151 8472" />
      
      <Text style={styles.label}>Cardholder name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Christie Doe" />
      
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Expiry date</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={expiry} onChangeText={setExpiry} placeholder="06 / 2024" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>CVV / CVC</Text>
          <TextInput style={styles.input} keyboardType="numeric" secureTextEntry value={cvv} onChangeText={setCvv} placeholder="915" />
        </View>
      </View>
      
      <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate("SuccessScreen")}>
        <Text style={styles.payText}>🔒 Pay for the order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.successContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/906/906343.png" }} style={styles.successImage} />
      <Text style={styles.successText}>Payment Success, Yayy! 🎉</Text>
      <Text style={styles.successSubText}>We will send order details and invoice to your email.</Text>
      
      <TouchableOpacity>
        <Text style={styles.link}>Check Details →</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.invoiceButton}>
        <Text style={styles.invoiceText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  const [screen, setScreen] = useState("Checkout");

  return screen === "Checkout" ? <CheckoutScreen navigation={{ navigate: setScreen, goBack: () => setScreen("Checkout") }} /> : <SuccessScreen navigation={{ goBack: () => setScreen("Checkout") }} />;
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff", flex: 1 },
  title: { fontSize: 24, fontWeight: "bold", marginVertical: 10 },
  price: { fontSize: 20, color: "green", fontWeight: "bold" },
  tax: { color: "gray" },
  paymentOptions: { flexDirection: "row", marginVertical: 10 },
  selectedOption: { backgroundColor: "#4CAF50", padding: 10, borderRadius: 10, marginRight: 10 },
  option: { backgroundColor: "#E0E0E0", padding: 10, borderRadius: 10 },
  label: { fontSize: 14, fontWeight: "bold", marginTop: 10 },
  input: { borderWidth: 1, borderColor: "gray", padding: 10, borderRadius: 10, marginVertical: 5 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  payButton: { backgroundColor: "#4CAF50", padding: 15, borderRadius: 10, marginTop: 20, alignItems: "center" },
  payText: { color: "white", fontWeight: "bold" },
  successContainer: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  successImage: { width: 100, height: 100, marginBottom: 20 },
  successText: { fontSize: 22, fontWeight: "bold" },
  successSubText: { color: "gray", textAlign: "center", marginBottom: 20 },
  link: { color: "blue", fontWeight: "bold" },
  invoiceButton: { backgroundColor: "#4CAF50", padding: 15, borderRadius: 10, marginTop: 20 },
  invoiceText: { color: "white", fontWeight: "bold" },
});
