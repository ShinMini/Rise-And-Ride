// ProfileSettingsScreen.tsx
import React, { FC, useState } from 'react';
import { Button, Switch, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

type ProfileSettingsProps = StackScreenProps<RootStack.ProfileStackParamList, 'ProfileSettings'>;

const ProfileSettingsScreen: FC<ProfileSettingsProps> = ({ navigation }) => {
  const [showEmails, setShowEmails] = useState(true);

  const handleToggleSwitch = () => {
    setShowEmails(!showEmails);
  };

  const handleSave = () => {
    // Save the user's profile settings and navigate back to the profile detail screen
    navigation.goBack();
  };

  return (
    <View>
      <Text>Welcome to the Profile Settings Screen!</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Show Emails</Text>
        <Switch value={showEmails} onValueChange={handleToggleSwitch} />
      </View>
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

export default ProfileSettingsScreen;
