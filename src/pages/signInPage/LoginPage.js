import {View,Text} from 'react-native'
import React,{Component} from 'react'
import { Card, Input } from 'react-native-elements'
class LoginPage extends Component{
    render(){
        return(
            <View>
                <View>
                    <Card>
                      <Input
                      
                      placeholder="enter a email"
                      >
                      </Input>
                      <Input
                      
                      placeholder="enter a password"
                      >
                      </Input>
                    </Card>
                </View>
            </View>
        )
    }
}
export default LoginPage