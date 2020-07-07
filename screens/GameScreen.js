import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

import NumberContainer from "../components/NumberContainer.js";
import Card from "../components/Card.js";

const generateRandomInBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	if (rndNum === exclude) {
		return generateRandomInBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

const GameScreen = (props) => {
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomInBetween(1, 100, props.userChoice)
	);

	const nextGuessHandler = (direction) => {};

	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<Button
					title="LOWER"
					onPress={() => {
						nextGuessHandler.bind(this, "lower");
					}}
				/>
				<Button
					title="GREATER"
					onPress={() => {
						nextGuessHandler.bind(this, "greater");
					}}
				/>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: 300,
		maxWidth: "80%",
		marginTop: 20,
	},
});

export default GameScreen;
