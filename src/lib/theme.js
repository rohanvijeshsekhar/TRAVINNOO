// src/lib/theme.js
// Define color tokens for dark and light themes used across the admin panel.

export const darkTheme = {
  bg: '#050505',               // main background
  surface: '#0C0C0E',          // card/background surface
  cardBg: 'rgba(255, 255, 255, 0.02)',
  cardBorder: 'rgba(255, 255, 255, 0.08)',
  text: '#F5F2EC',             // primary text color
  subText: 'rgba(245,242,236,0.55)', // secondary text / subheadings
  border: 'rgba(255, 255, 255, 0.08)', // borders
  accent: '#C1121F',           // primary accent color (used for buttons, icons)
  inputBg: 'rgba(0,0,0,0.5)',  // input background
  inputBorder: 'rgba(255,255,255,0.1)',
  buttonBg: '#C1121F',
  buttonHoverBg: 'rgba(193, 18, 31, 0.8)'
};

export const lightTheme = {
  bg: '#F4F4F6',
  surface: '#FFFFFF',
  cardBg: '#FFFFFF',
  cardBorder: 'rgba(0, 0, 0, 0.08)',
  text: '#111111',
  subText: 'rgba(0, 0, 0, 0.65)',
  border: 'rgba(0, 0, 0, 0.12)',
  accent: '#C1121F',
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(0, 0, 0, 0.2)',
  buttonBg: '#C1121F',
  buttonHoverBg: 'rgba(193, 18, 31, 0.9)'
};

export const getThemeColors = (theme) => (theme === 'dark' ? darkTheme : lightTheme);
