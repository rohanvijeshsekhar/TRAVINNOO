// src/lib/theme.js
// Define color tokens for dark and light themes used across the admin panel.

export const darkTheme = {
  bg: '#050505',               // main background
  surface: 'rgba(12, 12, 14, 0.85)', // card/background surface
  text: '#F5F2EC',           // primary text color
  subText: 'rgba(245,242,236,0.5)', // secondary text / subheadings
  border: 'rgba(255, 255, 255, 0.08)', // borders
  accent: '#C1121F',         // primary accent color (used for buttons, icons)
  inputBg: 'rgba(0,0,0,0.5)', // input background
  inputBorder: 'rgba(255,255,255,0.1)',
  buttonBg: '#C1121F',
  buttonHoverBg: 'rgba(193, 18, 31, 0.8)'
};

export const lightTheme = {
  bg: '#F5F5F5',
  surface: 'rgba(255,255,255,0.95)',
  text: '#222222',
  subText: 'rgba(0,0,0,0.6)',
  border: 'rgba(0,0,0,0.12)',
  accent: '#C1121F',
  inputBg: 'rgba(255,255,255,0.8)',
  inputBorder: 'rgba(0,0,0,0.2)',
  buttonBg: '#C1121F',
  buttonHoverBg: 'rgba(193, 18, 31, 0.9)'
};

export const getThemeColors = (theme) => (theme === 'dark' ? darkTheme : lightTheme);
