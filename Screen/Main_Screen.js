import React, { Component } from 'react';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import Portrait_Keyboard from '../Component/key_board/Portrait_Keyboard';
import Landscape_Keyboard from '../Component/key_board/Landscape_Keyboard';
import { connect } from 'react-redux';
import styles from './MainScreenStyles';
import { RFPercentage } from "react-native-responsive-fontsize";

class Main_Screen extends Component {
	scrollToEnd = () => {
		this.refs.scrollView.scrollToEnd({ animated: true })
		//this.scrollView.scrollToEnd();
	}
	render() {
		const isLandscape = this.props.orientation === 'LANDSCAPE';
		const { text, number, rad_to_deg } = this.props
		return (
			<View style={styles.layout}>
				<View style={styles.screen_layout}>
					<View style={{ flex: 1, marginLeft: 10 }}>
						<Text style={styles.mode}>{rad_to_deg ? "Deg" : "Rad"}</Text>
					</View>
					<View style={{ flex: 3, alignItems: 'flex-end', justifyContent: "flex-end" }}>
						<ScrollView
							ref="scrollView"
							horizontal={true}
							snapToAlignment='end'>
							<View style={{ flex: 1, alignItems: 'flex-end', justifyContent: isLandscape ? "center" : "flex-end" }}>
								{
									isLandscape && number === undefined &&
									<Text
										style={[{ fontSize: RFPercentage(6.5) }, styles.display]}
										adjustsFontSizeToFit
										numberOfLines={1}
									>{text}{text.length >= 3 ? "," : null}
									</Text>
								}
								{
									isLandscape && number !== undefined &&
									<Text
										style={[{ fontSize: RFPercentage(6.5) }, styles.display]}
										adjustsFontSizeToFit
										numberOfLines={1}
									>
										{number}
									</Text>
								}
								{
									!isLandscape &&
									<Text
										style={[{ fontSize: RFPercentage((number !== undefined && number !== '') ? 4 : 6) }, styles.display]}
										adjustsFontSizeToFit
										numberOfLines={1}>
										{text}
									</Text>
								}
								{
									number !== undefined && !isLandscape && number !== '' &&
									< Text
										style={styles.result}
										adjustsFontSizeToFit
										numberOfLines={1}
									>
										={number}
									</Text>
								}
							</View>

						</ScrollView>
					</View>

				</View>
				<View style={styles.border} />
				<SafeAreaView style={{ flex: 2, display: !isLandscape ? 'flex' : 'none' }}>
					<Portrait_Keyboard />
				</SafeAreaView>
				<SafeAreaView style={{ flex: 3.5, display: isLandscape ? 'flex' : 'none' }}>
					<Landscape_Keyboard />
				</SafeAreaView>
			</View >
		);
	}
}

const mapStateToProps = ({ data, orientationState, modeChange }) => ({
	text: data.text,
	number: data.number,
	...orientationState,
	rad_to_deg: data.rad_to_deg,
	mode: modeChange.mode,
})

export default connect(mapStateToProps, null)(Main_Screen);
