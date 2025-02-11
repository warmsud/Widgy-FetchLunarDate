fetch('https://cdnjs.cloudflare.com/ajax/libs/lunar-javascript/1.6.12/lunar.min.js')
    .then(res => res.text())
    //  获取JS脚本并转换为文本
    .then(scriptContent => {
        //  创建新的 script 标签
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = scriptContent;
        //  将获取的脚本内容赋值给 script 标签
        document.head.appendChild(script);
        //  将 script 标签添加到页面
    })
    .then(() => {
        const lunar = Lunar.fromDate(new Date());
        //  实例化Lunar对象
        const solar = Solar.fromDate(new Date());
        //  实例化Solar对象
        const lunarTime = solar.getLunar().toString();
        //  将公历日期转换为农历日期
        const year = lunar.getYearInChinese()
        //  获取农历年份
        const month = lunar.getMonthInChinese()
        //  获取农历月份
        const day = lunar.getDayInChinese()
        //  获取农历天数

        //sendToWidgy(lunarTime)
        //  将完整的农历结果发送给Widgy

        sendToWidgy('农历'+month+'月'+day)

        console.log(JSON.stringify('农历'+month+'月'+day))
        //  选择性发送阴历结果
    })
