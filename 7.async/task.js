class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }
  
    addClock(time, callback) {
      if (!time || !callback) {
        throw new Error('Отсутствуют обязательные аргументы');
      }
  
      const existingAlarm = this.alarmCollection.find(alarm => alarm.time === time);
      if (existingAlarm) {
        console.warn('Уже присутствует звонок на это же время');
        return;
      }
  
      this.alarmCollection.push({
        time: time,
        callback: callback,
        canCall: true
      });
    }
  