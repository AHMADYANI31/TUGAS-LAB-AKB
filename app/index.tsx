import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

// 9 Gambar utama mahasiswa
const mainImages = [
  "https://simak.unismuh.ac.id/upload/mahasiswa/105841107722_.jpg",
  "https://simak.unismuh.ac.id/upload/mahasiswa/10584108622_.jpg",
  "https://simak.unismuh.ac.id/upload/mahasiswa/105841107922_.jpg",
  "https://simak.unismuh.ac.id/upload/mahasiswa/105841108022_.jpg",
  "https://simak.unismuh.ac.id/upload/mahasiswa/105841108122_.jpg",
  "https://simak.unismuh.ac.id/upload/mahasiswa/105841108222_.jpg",
  "https://simak.unismuh.ac.id/upload/mahasiswa/105841108322_.jpg",
  "https://simak.unismuh.ac.id/upload/mahasiswa/105841108422_.jpg",
  "https://simak.unismuh.ac.id/upload/mahasiswa/105841108522_.jpg",
];

// 9 Gambar alternatif (flip)
const altImages = [
  "https://picsum.photos/id/1015/100",
  "https://picsum.photos/id/1016/100",
  "https://picsum.photos/id/1017/100",
  "https://picsum.photos/id/1018/100",
  "https://picsum.photos/id/1019/100",
  "https://picsum.photos/id/1020/100",
  "https://picsum.photos/id/1021/100",
  "https://picsum.photos/id/1022/100",
  "https://picsum.photos/id/1023/100",
];

export default function ImageGrid3x3() {
  // State: flipped & zoom scale per gambar
  const [imageStates, setImageStates] = useState(
    Array(9).fill(null).map(() => ({
      flipped: false,
      scale: 1,
    }))
  );

  // Saat gambar ditekan: flip + zoom
  const handlePress = (index: number) => {
    setImageStates((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              flipped: !item.flipped,
              scale: Math.min(item.scale * 1.2, 2), // maksimal 2x
            }
          : item
      )
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>
        AHMAD YANI{"\n"}NIM 105841107922
      </Text>

      <View style={styles.grid}>
        {mainImages.map((main, index) => {
          const { flipped, scale } = imageStates[index];
          const imageSource = flipped ? altImages[index] : main;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(index)}
              activeOpacity={0.8}
              style={styles.cell}
            >
              <Image
                source={{ uri: imageSource }}
                style={[styles.image, { transform: [{ scale }] }]}
                resizeMode="cover"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

// Style untuk layout & elemen
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 24,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "600",
    color: "#333",
  },
  grid: {
    width: 330,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cell: {
    width: 110,
    height: 110,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: "#ddd",
  },
});
