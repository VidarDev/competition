import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { useTheme } from '@/src/context/ThemeContext';

interface ThemedPageContainerProps {
  children: React.ReactNode;
}

const ThemedPageContainer = ({ children }: ThemedPageContainerProps) => {
  const { themeColor } = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: themeColor.background, flex: 1 }}>
      <ScrollView style={{ paddingTop: 48 }}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default ThemedPageContainer;
