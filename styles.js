import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282828',
  },
  header: {
    backgroundColor: '#181818',
    borderBottomWidth: 0,
  },
  headerTitle: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  footer: {
    backgroundColor: '#181818',
    borderTopWidth: 0,
    height: 48,
  },
  footerText: {
    color: '#FFFFFF',
  },
  topGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 200,
    backgroundColor: '#404040',
  },
  bottomGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
    backgroundColor: '#282828',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#B3B3B3',
  },
  buttonContainer: {
    backgroundColor: '#282828',
    padding: 10,
    borderRadius: 5,
  },  
});
