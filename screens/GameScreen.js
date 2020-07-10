import React, { useState, useRef, useEffect } from "react";
import { Text, View, Button, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer.js";
import Card from "../components/Card.js";
import MainButton from "../components/MainButton.js";
import DefaultStyles from "../constants/default-styles.js";

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

	const [rounds, setRounds] = useState(0);
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const { userChoice, onGameOver } = props;

	useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOver(rounds);
		}
	}, [currentGuess, userChoice, onGameOver]);

	const nextGuessHandler = (direction) => {
		if (
			(direction === "lower" && currentGuess < props.userChoice) ||
			(direction === "greater" && currentGuess > props.userChoice)
		) {
			Alert.alert("Don't Lie!", "You know that this is wrong...", [
				{ text: "Sorry!", style: "cancel" },
			]);
			return;
		}

		if (direction === "lower") {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess;
		}

		const nextNumber = generateRandomInBetween(
			currentLow.current,
			currentHigh.current,
			currentGuess
		);
		setCurrentGuess(nextNumber);
		setRounds((currRounds) => currRounds + 1);
	};

	return (
		<View style={styles.screen}>
			<Text style={DefaultStyles.title}>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<MainButton onPress={nextGuessHandler.bind(this, "lower")}>
					<Ionicons name="md-remove" color="white" size={24} />
				</MainButton>
				<MainButton onPress={nextGuessHandler.bind(this, "greater")}>
					<Ionicons name="md-add" color="white" size={24} />
				</MainButton>
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
		width: 400,
		maxWidth: "90%",
		marginTop: 20,
	},
});

export default GameScreen;
