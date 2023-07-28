/*
    Context => برای آسان تر کردن انتقال داده مشترک بین کامپوننت ها 

    * هدف =>
    ساده تر کردن انتقال داده و کنار گذاشتن استفاده از ریداکس

    **کاربرد =>
    تعریف متغیرهای گلوبال مانند رنگ تم و اشتراک گذاری بین کامپوننت بدون ارسال مستقیم داخل یک کامپوننت

    مفاهیم :
    1.ایجاد کانتکست => const ThemeContext = React.createContext("red");

    2.Provider => در بالاترین کامپوننت استفاده می شود برای ارسال مقدار مورد نظر به کامپوننت های پایین دست
    <ThemeContext.Provider value="yellow">
        <ComponentA />
        <ComponentB />
    </ThemeContext.Provider>
    <ComponentC />

    3.Consumer => کامپوننت های فرزند که می خواهند مقدار ارسال شده از طریق کانتکست را دریافت کنند
    <ThemeContext.Consumer>
      {(value) => ....}
    </ThemeContext.Consumer>


    ***function component => hook useContext =>
     برای دستیابی و خواندن مقادیر کانتکست ارسالی به داخل کامپوننت

*/