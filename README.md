# Widgy 获取农历信息

## 简介
Widgy 获取农历信息是一个用于获取农历日期的 JavaScript 脚本，可用于 Widgy 组件。该脚本基于 [lunar-javascript](https://github.com/6tail/lunar-javascript) 库，将公历日期转换为农历日期。

## 功能
- 获取当前农历日期
- 提供农历年份、月份、天数信息
- 适用于 Widgy 组件的自定义显示

## 依赖
- **JS 作者**: 6tail  
- **JS 库名称**: lunar-javascript  
- **GitHub 链接**: [lunar-javascript](https://github.com/6tail/lunar-javascript)

## 使用方法
1. 添加文本 > 数据 > JavaScript > 异步+没有 main()
2. 粘贴以下脚本：

```javascript
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

## 版权声明
- 本脚本仅供学习与参考，使用请遵循依赖库的开源许可。
