import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

import BodyText from "../components/BodyText.js";
import TitleText from "../components/TitleText.js";

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<TitleText>The Game is Over!</TitleText>
			<Image source={require("../assets/success.png")} />
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
});

export default GameOverScreen;
