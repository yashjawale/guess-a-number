import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

import BodyText from "../components/BodyText.js";
import TitleText from "../components/TitleText.js";

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<TitleText>The Game is Over!</TitleText>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					fadeDuration={300}
					// source={require('../assets/success.png')}
					source={{
						uri:
							"https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg",
					}}
					resizeMode="cover"
				/>
			</View>
			<BodyText>No. of rounds: {props.roundsNumber}</BodyText>
			<BodyText>Number was: {props.userNumber}</BodyText>
			<Button title="NEW GAME" onPress={props.onRestart} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: "black",
		overflow: "hidden",
		marginVertical: 30,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

export default GameOverScreen;
