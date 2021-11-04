import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import images from '../assets/images/images';
import { BUTTONS, COLORS, FONTS, HEIGHT, SIZES } from '../constants/theme';

function WelcomePage({ navigation }) {


    const { width, height } = Dimensions.get('screen') 

    return (
        <ImageBackground
            source={images.backgroundImage}
            resizeMode="cover"
            blurRadius={4}
            style={[
                StyleSheet.absoluteFillObject,
                { width, height },
                styles.container
            ]}
        >
            <View style={styles.welcome} >
                <Text style={styles.welcomeText}>
                    WELCOME TO IKEJONES PHONES
                </Text>
                <Text style={styles.sloganText}>
                    Home of Quality and Affordable iPhones
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity 
                    style={styles.btnPrimary} 
                    onPress={() => navigation.navigate('Auth',{
                        auth: true
                    })}
                    >
                    <Text style={styles.btnPrimaryText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnSecondary} 
                    onPress={() => navigation.navigate('Auth', {
                        auth: false
                    })}
                    >
                    <Text style={styles.btnSecondaryText} >
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding * 2,
        justifyContent: 'space-around'
    },
    welcomeText: {
        ...FONTS.h3,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    sloganText: {
        ...FONTS.body3,
        fontWeight: "200",
        textAlign: 'center'
    },
    btnContainer: {

    },
    btnPrimary: {
        ...BUTTONS.primary, 
    },
    btnSecondary: {
        ...BUTTONS.secondary,
        
    },
    btnPrimaryText: {
        ...FONTS.primary,
    },
    btnSecondaryText: {
        ...FONTS.secondary,
    }
    
})

export default WelcomePage
