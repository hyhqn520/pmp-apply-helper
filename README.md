# PMP 报名助手

> 支持全真实流程报名，访问>登录>签署防疫协议>选择考场>报名成功。
>
> 本助手仅供技术研究学习，请勿用于非法用途，否则责任自负。

**如侵权或反馈问题请发布 issues，作者将及时处理。**

**报名开始前请勿尝试**

## 环境依赖

> nodejs > 10.0.0

## 用法

0. 克隆项目到本地

1. 在项目目录安装依赖

   ```shell
   npm install
   ```

2. 修改 `config-template.js` 文件内的配置并重命名为 `config.js`，培训机构选项见下文。

3. 执行脚本
   ```shell
   node main.js
   ```
4. 关注脚本输出日志，选择考场。
5. 报名成功!

## 自愿请我喝杯咖啡

<img src="https://user-images.githubusercontent.com/13450661/114641767-48fefd80-9d05-11eb-84d8-2551b7fb67cd.jpeg" width="300">

## 培训机构列表：

(Training Agency)

```html
<option value="567">Advanced Business Analytics Specialization</option>
<option value="566">Boston College- Woods College of Advancing Studies</option>
<option value="495">Global Business Management Consultants (BMC)</option>
<option value="440">IBM</option>
<option value="479">IIL 中国</option>
<option value="441">Instructing.com,LLC</option>
<option value="438">IPA Institute</option>
<option value="598">Iverson Associates Sdn Bhd</option>
<option value="536">Lancaster University</option>
<option value="549">lynda.com</option>
<option value="535">Master of Project Academy</option>
<option value="548">MILESTONE TRAINING CENTER</option>
<option value="481">Platinum Edge., Inc</option>
<option value="565">Pluralsight LLC</option>
<option value="534">PMTraining</option>
<option value="558">
  STS – Sauter Training &amp; Simulation S.A., Shanghai
</option>
<option value="270">Ten Step China</option>
<option value="560">Tiba Managementberatung GmbH</option>
<option value="561">TRIG Limited</option>
<option value="480">TwentyEighty Strategy Execution</option>
<option value="552">UC Berkeley Extension</option>
<option value="553">UCLA Extension</option>
<option value="597">University of Colorado Boulder</option>
<option value="412">艾思康（深圳）科技管理咨询有限公司</option>
<option value="544">安徽远景人力资源管理有限公司</option>
<option value="54">安泰赛斯国际项目管理咨询（北京）有限公司</option>
<option value="576">北京艾立克斯咨询有限公司</option>
<option value="486">北京奥品智晟管理咨询（北京）有限公司</option>
<option value="455">北京才聚天下管理咨询有限公司</option>
<option value="482">北京东方迈道国际管理咨询有限公司</option>
<option value="514">北京泛华卓越企业管理顾问有限公司</option>
<option value="541">北京高远华信科技有限公司</option>
<option value="521">北京共创时网络管理技术有限公司（项目管理者联盟）</option>
<option value="515">北京光环致成国际管理咨询股份有限公司</option>
<option value="489">北京国联融合科技有限公司</option>
<option value="590">北京合创星光科技文化有限公司</option>
<option value="241">北京恒佳时代管理咨询有限公司</option>
<option value="11">北京华科软科技有限公司</option>
<option value="557">北京华信乾坤科技有限公司</option>
<option value="273">北京金色千年咨询有限公司</option>
<option value="487">北京经华智业教育科技有限公司</option>
<option value="540">北京千锋互联科技有限公司</option>
<option value="447">北京睿思力行管理咨询中心</option>
<option value="184">北京商略达项目管理培训中心</option>
<option value="4">北京神州巨龙管理咨询有限公司</option>
<option value="485">北京世纪畅优互联网信息服务有限责任公司</option>
<option value="574">北京网聘咨询有限公司</option>
<option value="490">北京无忧创想技术咨询有限公司</option>
<option value="600">北京无忧创想信息技术有限公司（51CTO）</option>
<option value="488">北京协英科技顾问有限公司</option>
<option value="349">北京易佳盈通咨询有限公司</option>
<option value="584">北京邮电大学（经济管理学院）</option>
<option value="469">北京中公教育科技股份有限公司</option>
<option value="341">北京中培伟业管理咨询有限公司</option>
<option value="596">北京筑龙伟业科技股份有限公司</option>
<option value="228">长沙搜题教育科技有限公司</option>
<option value="512">成都维纳软件</option>
<option value="494">大连鼎达管理咨询有限公司</option>
<option value="470">大连东软信息学院</option>
<option value="197">大连高新区立智管理培训学校</option>
<option value="516">大庆油田工程建设有限公司培训中心</option>
<option value="425">德硕管理咨询公司</option>
<option value="364">东方瑞通（北京）咨询服务有限公司</option>
<option value="355">东莞市金指南企业管理咨询有限公司</option>
<option value="543">福建省建设人力资源集团股份公司</option>
<option value="581">福州近道教育咨询有限公司</option>
<option value="304">福州领先连邦软件服务有限公司</option>
<option value="517">福州盈通企业管理顾问有限公司</option>
<option value="564">广东蓝海项目管理有限公司</option>
<option value="522">广东省项目管理学会（广西办事处）</option>
<option value="523">广东邮电职业技术学院</option>
<option value="592">广东中大职业培训学院</option>
<option value="531">广州慧翔企业管理咨询有限公司</option>
<option value="238">广州嘉为科技有限公司</option>
<option value="356">广州圣略科技信息咨询有限公司</option>
<option value="524">广州石油培训中心（中石油培训基地）</option>
<option value="593">广州市夸克企业顾问有限公司</option>
<option value="518">广州市亚加达发展有限公司</option>
<option value="379">广州韦雅度企业管理咨询有限公司</option>
<option value="562">广州韦雅度企业管理咨询有限公司</option>
<option value="378">广州现代卓越管理技术交流中心有限公司</option>
<option value="505">广州中培项目管理咨询有限公司</option>
<option value="539">广州珠江文化教育培训中心</option>
<option value="326">杭州博学信息技术服务公司</option>
<option value="519">杭州市干部培训中心</option>
<option value="26">杭州市干部培训中心/杭州东方舰桥教育培训中心</option>
<option value="25">杭州新睿智业有限公司</option>
<option value="520">河北石油职业技术学院 （中国石油管道学院）</option>
<option value="589">河海大学（商学院）</option>
<option value="503">河海大学商学院</option>
<option value="594">河南省外事侨务服务中心有限公司</option>
<option value="472">湖北省信产通信服务有限公司科技咨询分公司</option>
<option value="271">惠普培训服务事业部</option>
<option value="526">慧翔天地管理咨询(北京)有限公司</option>
<option value="307">济南市现代卓越管理技术培训学校</option>
<option value="234">嘉为科技咨询有限公司</option>
<option value="551">嘉信和（天津）健康科技有限责任公司</option>
<option value="457">江苏传智播客教育科技股份有限公司</option>
<option value="497">柯马中国</option>
<option value="36">昆明蓝血项目管理系统有限公司</option>
<option value="496">美国艾威学院（中国）培训中心</option>
<option value="554">美国伯克利分校延展课程</option>
<option value="390">内蒙古建设培训学校</option>
<option value="34">南京睿煌企业管理咨询有限责任公司</option>
<option value="502">南京思摩特企业管理咨询</option>
<option value="501">南京远光广安信息科技有限公司</option>
<option value="6">南京卓而越管理技术培训咨询有限公司</option>
<option value="602">宁波诺丁汉大学</option>
<option value="35">宁波市人才培训中心</option>
<option value="578">宁夏软件工程院</option>
<option value="569">青岛齐睿教育科技有限公司</option>
<option value="218">青岛时代企业培训服务有限公司</option>
<option value="313">青岛易佳盈通管理咨询有限公司</option>
<option value="556">青岛易佳盈通管理咨询有限公司</option>
<option value="583">清华大学（土木水利学院建设管理系）</option>
<option value="309">睿达博创国际管理咨询（北京）有限公司</option>
<option value="588">山东大学（管理学院）</option>
<option value="78">山东省振鲁国际交流中心</option>
<option value="545">山东知创管理咨询有限公司</option>
<option value="538">上海艾纵企业管理咨询有限公司</option>
<option value="166">上海创择企业管理顾问有限公司</option>
<option value="527">上海慧谷职业技能培训中心</option>
<option value="582">上海交通大学（机械与动力工程学院）</option>
<option value="327">上海交通大学继续教育学院</option>
<option value="210">上海科维安信息技术顾问有限公司</option>
<option value="388">上海肯恩企业管理有限公司</option>
<option value="500">上海乐凯企业管理咨询有限公司</option>
<option value="448">上海妙坊企业管理咨询有限公司</option>
<option value="528">上海能略企业管理咨询有限公司（第五空间）</option>
<option value="139">上海普华科技发展有限公司</option>
<option value="18">上海清晖管理咨询有限公司</option>
<option value="465">上海市浦东软件园职业技能培训中心</option>
<option value="3">上海威训企业管理咨询有限公司</option>
<option value="463">上海项尔管理咨询有限公司</option>
<option value="48">上海欣旋企业管理咨询有限公司</option>
<option value="323">上海易卓企业管理有限公司</option>
<option value="394">上海羿升企业管理咨询有限公司</option>
<option value="550">上海渔羽管理咨询有限公司</option>
<option value="568">上海越臻企业管理咨询有限公司</option>
<option value="555">上海哲越企业管理咨询有限公司</option>
<option value="577">上海中智国际教育培训中心</option>
<option value="498">上海自源商务咨询有限公司</option>
<option value="359">深圳伯瑞环球</option>
<option value="605">深圳敏航管理咨询有限公司</option>
<option value="460">深圳强矩阵企业信息咨询有限公司</option>
<option value="509">深圳青蓝咨询服务有限公司</option>
<option value="432">深圳世纪拓睿教育管理有限公司</option>
<option value="533">深圳市必有师科技有限公司</option>
<option value="433">深圳市博维职业培训中心</option>
<option value="17">深圳市才聚管理咨询有限公司</option>
<option value="229">深圳市才聚管理咨询有限公司广州分公司</option>
<option value="506">深圳市华为培训学院有限公司</option>
<option value="49">深圳市华夏智诚企业管理咨询有限公司</option>
<option value="452">深圳市砺志企业管理咨询有限公司</option>
<option value="478">深圳市联合盈科企业管理有限公司</option>
<option value="111">深圳市世纪卓越管理咨询有限公司</option>
<option value="604">深圳市威班科技发展有限公司</option>
<option value="338">深圳市问道兴业管理咨询有限公司</option>
<option value="446">深圳市兴传管理咨询有限公司</option>
<option value="508">深圳市旭源管理咨询有限公司</option>
<option value="473">深圳市中鹏教育科技股份有限公司</option>
<option value="507">深圳塔塔咨询服务有限公司</option>
<option value="563">深圳致卓信息技术有限公司</option>
<option value="484">神州数码系统集成服务有限公司</option>
<option value="32">沈阳海外人才交流协会</option>
<option value="572">沈阳华信教育科技有限公司</option>
<option value="86">沈阳惠尔智业教育培训中心</option>
<option value="27">四川思锐项目管理有限公司</option>
<option value="580">苏州高新区（虎丘区）子信职业培训学校</option>
<option value="587">天津大学（管理与经济学部）</option>
<option value="493">天津大学国际工程管理学院</option>
<option value="492">天津市普迅电力信息技术有限公司</option>
<option value="282">天津易迪思高级项目管理学院</option>
<option value="585">同济大学（经济与管理学院）</option>
<option value="499">同曦企业管理有限公司</option>
<option value="30">武汉爱迪泰管理咨询有限公司</option>
<option value="599">武汉聚协企业管理咨询有限公司</option>
<option value="306">武汉现代卓越企业管理咨询有限公司</option>
<option value="586">西北工业大学（管理学院）</option>
<option value="571">希赛网</option>
<option value="570">厦门领才教育咨询有限公司</option>
<option value="37">厦门市培因教育培训中心</option>
<option value="511">厦门市运筹管理咨询有限公司(厦门市培因教育培训中心)</option>
<option value="547">厦门外服人力资源服务有限公司</option>
<option value="537">厦门希瑞尔教育咨询有限公司</option>
<option value="449">厦门至格教育咨询有限公司</option>
<option value="491">晓弈（天津）企业管理咨询有限公司</option>
<option value="39">新疆福来威尔企业管理咨询有限公司</option>
<option value="532">远光软件股份有限公司</option>
<option value="16">郑州杰创企业管理咨询有限公司</option>
<option value="601">郑州科科过科技有限公司</option>
<option value="468">中国航天科工集团公司培训中心</option>
<option value="542">中国检验检疫科学研究院</option>
<option value="603">中国检验认证集团陕西有限公司</option>
<option value="529">中国石油大学（北京）继续教育学院</option>
<option value="344">
  中国石油集团东方地球物理勘探有限责任公司物探培训中心
</option>
<option value="595">中国通信建设集团设计院有限公司</option>
<option value="573">中海油安全技术服务有限公司海洋石油培训中心</option>
<option value="367">中软总公司计算机培训中心</option>
<option value="513">中山市海讯企业管理咨询有限公司</option>
<option value="483">中善明易（北京）咨询有限公司(原智鼎东方)</option>
<option value="591">中通信息服务有限公司</option>
<option value="292">中兴通讯股份有限公司-中兴通讯学院</option>
<option value="575">中智优力管理咨询（北京）有限公司</option>
<option value="443">众学网</option>
<option value="530">重庆市高博职业培训学校</option>
<option value="510">珠海LNG</option>
```
