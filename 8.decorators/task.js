//Задача № 1
function cachingDecoratorNew(func) {
    const cache = new Map();
    const MAX_CACHE_SIZE = 5;
  
    return function(...args) {
        const hash = md5(JSON.stringify(args));
         if (cache.has(hash)) {
            console.log("Из кеша: " + cache.get(hash));
            return "Из кеша: " + cache.get(hash);
        }
  
        const result = func.apply(this, args);
        cache.set(hash, result);
    
        if (cache.size > MAX_CACHE_SIZE) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }
    
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    };
  }

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    let isFirstCall = true;
    let count = 0;
    let allCount = 0;
  
    function wrapper(...args) {
      if (isFirstCall) {
        func.apply(this, args);
        isFirstCall = false;
        count++;
        allCount++;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          count++;
          allCount++;
        }, delay);
      }
    }
  
    wrapper.count = () => count;
    wrapper.allCount = () => allCount;
  
    return wrapper;
  }
  
