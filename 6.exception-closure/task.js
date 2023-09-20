﻿function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue) || !Number.isFinite(parsedValue)) {
        throw new Error("Невалидное значение");
    }
    return parsedValue;
  }
  
  function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
         return error;
    }
  }
  
