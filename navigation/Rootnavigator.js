import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';

import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';
import { AuthenticatedUserContext } from '../providers';
import { auth } from '../config';
import { LoadIndicator } from '../components/LoadIndicator';

export const RootNavigator = () => {
    const {user, setUser} = useContext(AuthenticatedUserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribeAuthStateChanged = onAuthStateChanged(
          auth,
          authenticatedUser => {
            authenticatedUser ? setUser(authenticatedUser) : setUser(null);
            setIsLoading(false);
          }
        );
        return unsubscribeAuthStateChanged;
      }, [user]);
      if (isLoading) {
        return <LoadIndicator />;
      }
      return (
        <NavigationContainer>
          {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      );
};