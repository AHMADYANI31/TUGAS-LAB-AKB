import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        backgroundColor: "#f0f0f0"
      }}
    >

      {/* Segitiga */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 40,
          borderRightWidth: 40,
          borderBottomWidth: 60,
          borderStyle: "solid",
          backgroundColor: "transparent",
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "orange",
        }}
      />

      {/* Pil (Oval) - Stambuk */}
      <View
        style={{
          backgroundColor: "purple",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 50,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          105841107922
        </Text>
      </View>

      {/* Persegi Panjang - Nama */}
      <View
        style={{
          backgroundColor: "skyblue",
          paddingHorizontal: 30,
          paddingVertical: 15,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "navy" }}>
          AHMAD YANI
        </Text>
      </View>

      {/* Lingkaran hijau */}
      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: "green",
          borderRadius: 100,
        }}
      />
    </View>
  );
}