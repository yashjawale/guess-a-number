import react, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

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
};

const styles = StyleSheet.create({});

export default GameScreen;
