import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Screen, All_Clear, Show, Delete, Change_mode, Rad_To_Deg, Memory } from '../Redux/Action/Action';
import { RFPercentage } from "react-native-responsive-fontsize";

class Button extends Component {
	onChange = (text, typeParameter) => {
		if (text === '|x|')
			text = 'abs'
		else if (text === 'ex')
			text = 'e^'
		else if (text === '×10')
			text = '10^'
		else if (text === '1/x')
			text = '1/'
		else if (text === 'rand')
			text = 'random'
		else if (text === '√x')
			text = '√'
		else if (text === '∛x')
			text = '∛'
		else if (text === 'e' && typeParameter === 'function')
			text = 'e^'
		else if (text === 'ex')
			text = 'e^'
		else if (text === 'mr')
			text = 'm'
		text = typeParameter === 'function' ? text + '(' : text
		return this.props.TextScreen(text, typeParameter || '')
	}
	action = () => {
		var text = this.props.title
		switch (this.props.type) {
			case "number":
				return this.onChange(text, "number")
			case "const":
				return this.onChange(text, "const")
			case "pow2":
			case "pow3":
			case "powy":
				return this.onChange(text || '', this.props.type)
			case "powx":
				return this.onChange('2^', "function")
			case "bracket":
				return this.onChange(text, "bracket")
			case "operation":
				return this.onChange(text, "operation")
			case "factorial":
				return this.onChange('!', "factorial")
			case "enter":
				return this.props.ShowScreen()
			case "reset":
				return this.props.AllClear()
			case "negative":
				return this.onChange('-', "negative")
			case "delete":
				return this.props.DeleteText()
			case "fraction":
				return this.onChange('1/', "function")
			case "function":
				return this.onChange(text, "function")
			case "arcfunction":
				return this.onChange('a' + text, "function")
			case "modeshift":
				return this.props.ChangeMode()
			case "RadToDeg":
				return this.props.RadToDeg()
			case "permutations":
			case "combinations":
				return this.onChange(text, "operation")
			case "pointer":
				return this.onChange('.', "pointer")
			case "memory":
				return this.props.Memory(text)
		}
	}
	render() {
		const height = this.props.height
		const imgLink = this.props.image
		const { title, type } = this.props
		return (
			<View style={container.layout}>
				<TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}
					onPress={() => { this.action() }}>
					<View style={{
						width: '95%',
						aspectRatio: 1 / 1,
						borderRadius: 200 / 2,
						alignItems: 'center',
						justifyContent: 'center',
						margin: 5,
						backgroundColor: this.props.background,
					}}>
						<View style={{ display: this.props.title === '' ? 'flex' : 'none', flex: 1, alignItems: 'center', justifyContent: 'center', }}>
							<Image
								style={{
									height: height, aspectRatio: 1 / 1, alignItems: 'center',
									justifyContent: 'center',
									resizeMode: 'cover'
								}}
								source={imgLink}
							/>
						</View>
						<View style={{ display: title !== '' ? 'flex' : 'none', flexDirection: 'row' }}>
							{(type === "canbac3") && <Text style={{ fontSize: RFPercentage(2), lineHeight: 18, color: 'green' }}>y</Text>}
							<Text style={{ fontSize: RFPercentage(this.props.fontSize), color: this.props.color_word }}>{title}</Text>
							{(type === "pow2" || type === "pow3" || type === "powy" || type === "powx") && <Text style={{ fontSize: RFPercentage(2), lineHeight: 18, color: 'green' }}>{type[3]}</Text>}
							{title === 'e' && type !== 'const' && <Text style={{ fontSize: RFPercentage(2), lineHeight: 18, color: 'green' }}>x</Text>}
							{type === 'arcfunction' && <Text style={{ fontSize: RFPercentage(2), lineHeight: 18, color: 'green' }}>-1</Text>}
						</View>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}
const mapStateToProps = ({ modeChange }) => ({
	mode: modeChange.mode,
})

const mapDispatchToProps = (dispatch) => ({
	TextScreen: (text, type) => dispatch(Screen(text, type)),
	AllClear: () => dispatch(All_Clear()),
	DeleteText: () => dispatch(Delete()),
	ShowScreen: () => dispatch(Show()),
	ChangeMode: () => dispatch(Change_mode()),
	RadToDeg: () => dispatch(Rad_To_Deg()),
	Memory: (type) => dispatch(Memory(type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Button);

Button.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
	background: PropTypes.string,
	color_word: PropTypes.string,
	fontSize: PropTypes.string,
	image: PropTypes.string,
	height: PropTypes.string
};

const container = StyleSheet.create({
	layout: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'whitesmoke',
		aspectRatio: 1 / 1,
	},
});