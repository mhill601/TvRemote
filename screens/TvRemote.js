import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { IR } from '../src/InfraredBlaster/IR';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Example Remote',
  };

  
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = { 
            playToggle: true,
            activeSrc: require("../assets/icons/baseline_play_arrow_black_48dp.png"),
            playSrc: require("../assets/icons/baseline_play_arrow_black_48dp.png"),
            pauseSrc: require("../assets/icons/baseline_pause_black_48dp.png")
        };
    }

    render() {
        var test = IR.pauseDevice;

        return (
            <View>
                <TouchableOpacity style={styles.button} onPress={this.toggle}>
                    <Image 
                        style={{width: 48, height: 48}} 
                        source={this.state.activeSrc}
                    />
                </TouchableOpacity>
            </View>
        );
    }

  toggle() {
        this.setState({
            playToggle: ! this.state.playToggle
        });

        if(this.state.playToggle) {
            this.setState({
                activeSrc: this.state.pauseSrc
            });

            var ir = new IR();
            ir.pauseDevice();
        }
        else {
            this.setState({
                activeSrc: this.state.playSrc
            });
        }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
