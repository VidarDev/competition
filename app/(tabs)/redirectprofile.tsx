import { useFocusEffect, useRouter } from 'expo-router';

const RedirectProfile = () => {
  const router = useRouter();

  useFocusEffect(() => {
    // Call the replace method to redirect to a new route without adding to the history.
    // We do this in a useFocusEffect to ensure the redirect happens every time the screen
    // is focused.
    router.navigate('(aux)/profile');
  });
};

export default RedirectProfile;
