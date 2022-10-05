import Settings from './map-settings';
const mySettings = new Settings({
  music: 'off',
  difficulty: 'nightmare',
});
console.log(mySettings.getSettings());
