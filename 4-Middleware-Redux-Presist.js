/*
    Middlware : میان افزارها
    کاربرد =>
    تاثیر روی ورودی و خروجی  در بخش استور

    معروف ها => 
    1.Redux-Persist => ذخیره مقادیر داخل استور در لوکال استوریج و بازیابی آن در موقع رفرش شدن صفحه
    install => 
    npm i redux-persist
    yarn add redux-persist

    نکات مهم :
    blacklist : کدام استیت ها از داخل استور ذخیره سازی نشوند
    whitelist : کدام استیت ها از داخل استور ذخیره سازی شوند
    
  const persistConfig = {
    key: 'root',
    storage,
    //blacklist: ['productState', 'categoryState'],
    //whitelist:['productState'],
  }


*/