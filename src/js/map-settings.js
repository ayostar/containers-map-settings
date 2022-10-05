class Settings {
  constructor(userSettings) {
    const possibleSettings = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare'],
    };

    this.defaultSettings = this.getDefaultSettings(possibleSettings);

    this.userSettings = this.getUserSettings(userSettings, possibleSettings);
  }

  getSettings() {
    const gameSettings = new Map();
    this.defaultSettings.forEach((value, key) => {
      gameSettings.set(
        key,
        this.userSettings.has(key) ? this.userSettings.get(key) : value
      );
    });
    return gameSettings;
  }

  getDefaultSettings(settings) {
    const defaultSettings = new Map();
    Object.keys(settings).forEach((key) => {
      defaultSettings.set(key, settings[key][0]);
    });
    return defaultSettings;
  }

  getUserSettings(settings, possibleSettings) {
    const userSettings = new Map();
    for (const key in settings) {
      if (
        Object.keys(possibleSettings).includes(key) &&
        possibleSettings[key].includes(settings[key])
      ) {
        userSettings.set(key, settings[key]);
      }
    }
    return userSettings;
  }
}

export { Settings as default };
