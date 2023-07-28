/*
    Redux-Saga => 
    کتابخانه ای که کمک می کند در ریداکس به راحتی با ای پی آی ها کار کنید

    تفاوت های Redux-Thunk vs Redux-Saga
    1.redux-thunk => بسیار ساده و با امکانات بسیار کمتر نسبت به رقیب خود می باشد
    2.redux-saga => دارای امکانات زیادی در کنترل تعداد و نحوه درخواست ها به سمت سرور می باشد


    روش نصب و راه اندازی => 
    https://redux-saga.js.org/
    npm install --save redux-saga
    yarn add redux-saga


    //روش راه اندازی =>
    1.store.js =>
    import createSagaMiddleware from 'redux-saga'
    import mySaga from './sagas'

    const sagaMiddleware = createSagaMiddleware()

    export const store = createStore(persistedReducer,applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(mySaga);

    2.crate saga.js
    


*/