import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";

const mainImages = [
  "https://placekitten.com/200/200",
  "https://placebear.com/200/200",
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://placekitten.com/201/200",
  "https://placebear.com/201/200",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://placekitten.com/202/200",
];

const altImages = [
  "https://placekitten.com/200/201",
  "https://placebear.com/200/201",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://placekitten.com/203/200",
  "https://placebear.com/202/200",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/women/8.jpg",
  "https://placekitten.com/204/200",
];

export default function ImageGrid() {
  // state: [{isAlt: boolean, scale: number}]
  const [states, setStates] = useState(
    Array(9)
      .fill(0)
      .map(() => ({ isAlt: false, scale: 1 }))
  );

  const handlePress = (idx: number) => {
    setStates((prev) =>
      prev.map((item, i) => {
        if (i !== idx) return item;
        let newScale = item.scale * 1.2;
        if (newScale > 2) newScale = 2;
        return {
          isAlt: !item.isAlt,
          scale: newScale,
        };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{
        fontSize: 16,
        marginBottom: 16,
        textAlign: "center",
        color: "#666",
        fontFamily: "LibertinusMono-Regular",
      }}>
          AHMAD YANI
          NIM 105841107922
        </Text>
      <View style={styles.grid}>
        {mainImages.map((img, idx) => (
          <TouchableOpacity
            key={idx}
            activeOpacity={0.8}
            onPress={() => handlePress(idx)}
            style={styles.cell}
          >
            <Image
              source={{ uri: states[idx].isAlt ? altImages[idx] : img }}
              style={[
                styles.image,
                {
                  transform: [{ scale: states[idx].scale }],
                },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  grid: {
    width: 330,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cell: {
    width: 110,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#eee",
  },
});