import React, { useState } from "react";
import { View, Image, ScrollView, Pressable, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const imageSize = screenWidth / 3 - 10;

const images = [
  {
    main: "https://simak.unismuh.ac.id/upload/mahasiswa/105841107722_.jpg",
    alt: "https://simak.unismuh.ac.id/upload/mahasiswa/105841107722_.jpg",
  },
  {
    main: "https://simak.unismuh.ac.id/upload/mahasiswa/10584108622_.jpg",
    alt: "https://simak.unismuh.ac.id/upload/mahasiswa/10584108622_.jpg",
  },
  {
    main: "https://simak.unismuh.ac.id/upload/mahasiswa/105841107922_.jpg",
    alt: "https://simak.unismuh.ac.id/upload/mahasiswa/105841107922_.jpg",
  },
  {
    main: "https://simak.unismuh.ac.id/upload/mahasiswa/105841108022_.jpg",
    alt: "https://simak.unismuh.ac.id/upload/mahasiswa/105841108022_.jpg",
  },
  {
    main: "https://simak.unismuh.ac.id/upload/mahasiswa/105841108122_.jpg",
    alt: "https://simak.unismuh.ac.id/upload/mahasiswa/105841108122_.jpg",
  },
  {
    main: "https://simak.unismuh.ac.id/upload/mahasiswa/105841108222_.jpg",
    alt: "https://simak.unismuh.ac.id/upload/mahasiswa/105841108222_.jpg",
  },
  {
    main: "https://simak.unismuh.ac.id/upload/mahasiswa/105841108322_.jpg",
    alt: "https://simak.unismuh.ac.id/upload/mahasiswa/105841108322_.jpg",
  },
  {
    main: "https://simak.unismuh.ac.id/upload/mahasiswa/105841108422_.jpg",
    alt: "https://simak.unismuh.ac.id/upload/mahasiswa/105841108422_.jpg",
  },
  {
    main: "https://simak.unismuh.ac.id/upload/mahasiswa/105841108522_.jpg",
    alt: "https://simak.unismuh.ac.id/upload/mahasiswa/105841108522_.jpg",
  },
];

export default function ImageGrid() {
  const [states, setStates] = useState(
    images.map(() => ({
      useAlt: false,
      scale: 1,
    }))
  );

  const handlePress = (index: number) => {
    setStates((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          const newScale = Math.min(item.scale * 1.2, 2);
          return {
            useAlt: !item.useAlt,
            scale: newScale,
          };
        }
        return item;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {images.map((img, index) => (
        <Pressable
          key={index}
          onPress={() => handlePress(index)}
          style={{ transform: [{ scale: states[index].scale }] }}
        >
          <Image
            source={{ uri: states[index].useAlt ? img.alt : img.main }}
            style={styles.image}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 5,
  },
  image: {
    width: imageSize,
    height: imageSize,
    margin: 5,
    borderRadius: 10,
  },
});
