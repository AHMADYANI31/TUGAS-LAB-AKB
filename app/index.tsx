import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet, TouchableWithoutFeedback, Image } from "react-native";

const defaultImages = [
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

const alternateImages = [
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

export default function GalleryGrid() {
  const [imageStates, setImageStates] = useState(
    new Array(9).fill(null).map(() => ({ flipped: false, zoom: 1 }))
  );

  const toggleImage = (index: number) => {
    setImageStates((previous) =>
      previous.map((data, i) =>
        i === index
          ? {
              flipped: !data.flipped,
              zoom: Math.min(data.zoom + 0.2, 2),
            }
          : data
      )
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <Text style={styles.title}>AHMAD YANI{"\n"}NIM 105841107922</Text>
      <View style={styles.gridBox}>
        {defaultImages.map((url, index) => {
          const activeImage = imageStates[index].flipped
            ? alternateImages[index]
            : url;
          return (
            <TouchableWithoutFeedback key={index} onPress={() => toggleImage(index)}>
              <View style={styles.cellBox}>
                <Image
                  source={{ uri: activeImage }}
                  style={[
                    styles.picture,
                    { transform: [{ scale: imageStates[index].zoom }] },
                  ]}
                />
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 30,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "#444",
    fontStyle: "italic",
  },
  gridBox: {
    width: 330,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cellBox: {
    width: 110,
    height: 110,
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: "#ccc",
  },
});
