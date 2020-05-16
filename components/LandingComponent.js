import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button  } from 'react-native-elements';

function RenderThumbnailBanner({thumbnail}) {   
   
        return (
            <Card>
               <Text> This is where a banner of event thumbnails will go</Text>      
            </Card>
        );
    
}
const loggedIn = false;

function RenderButtons({props}){
    if (loggedIn){
        return(
        <View>
            <Button
                title="Upload pic to Event"
            />
            <Button
                title="Browse Event Pics"
            />
            <Button
                title="View Event Slideshow"
            />
            <Button
                title="Photo Challenge"
            />
        </View>
        )

    }
    return(
        <View>
            <Button
                title="Login"
            />
            <Button
                title="Register"
            />
            <Button
                title="View Event Slideshow"
            />
        </View>
    )
}

function Landing(props) {
    
    return( 
        <View>
            <RenderThumbnailBanner thumbnail={props.thumbnail} />
            <RenderButtons loggedIn={props.loggedIn} />
        </View>
    );
    }

export default Landing;