import { ScrollView, StyleSheet, Text } from "react-native";

// 10 nama sesuai permintaan kamu
const namesWithStambuk = [
  // 5 sebelum AHMAD (font statis)
  "Afifah Auliyah - 105841111022",
  "Muhammad Fikri Maulana - 105841107622",
  "MUHAMMAD HASRADDIN HASNAN - 105841107722",
  "Muhammad Zulfikar Hidayat - 105841107822",
  "AHMAD YANI - 105841107922",


  // AHMAD (kamu) + 4 sesudah (font variabel)
  "AHMAD YANI - 105841107922",
  "ROSFIKA AWALIA - 105841108122",
  "YOGI A. AMMAH - 105841108222",
  "USRAN - 105841108722",
  "RIKA ARMAYANI - 105841108822", 
];

// Font untuk 5 statis dan 5 variabel
const staticFonts = [
  "LibertinusMono-Regular",
  "BitcountPropSingle-Regular",
  "SpaceMono-Regular",
  "Lato-Regular",
  "Oswald-Regular",
];

const variableFonts = [
  "Ubuntu-Bold",       // Ray
  "TikTokSans_28pt_Expanded-Bold",
  "Quicksand-Bold",
  "WinkyRough-Bold",
  "NotoSans-Bold",
];

export default function Page() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>5 nama sebelum (font statis):</Text>
      {namesWithStambuk.slice(0, 5).map((item, idx) => (
        <Text
          key={idx}
          style={[styles.name, { fontFamily: staticFonts[idx] }]}
        >
          {item}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>5 nama setelah (font variabel):</Text>
      {namesWithStambuk.slice(5).map((item, idx) => (
        <Text
          key={idx + 5}
          style={[
            styles.name,
            { fontFamily: variableFonts[idx] },
            item.includes("Ray") && styles.highlight,
          ]}
        >
          {item}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 100,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 22,
    marginVertical: 8,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#555",
  },
  highlight: {
    fontWeight: "bold",
    color: "#1976D2", // Sorot warna biru untuk nama kamu (Ray)
  },
});