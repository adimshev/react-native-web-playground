import React from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const routes = [ 'Main', 'Second', 'Third' ];

export default function Screen ({ route: { name }, navigation })
{
	return (
		<SafeAreaView style={ styles.container }>
			<Text style={ styles.title }>
				{ name }
			</Text>
			{ routes.map ( route =>
				<TouchableOpacity
					key={ route }
					onPress={ () => navigation.navigate ( route ) }
				>
					<Text>{ route }</Text>
				</TouchableOpacity>
			) }
		</SafeAreaView>
	);
}


const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: 'transparent'
	},
	title: {
		fontSize: 32,
		textAlign: 'center',
		margin: 12,
		color: 'black'
	}
});
