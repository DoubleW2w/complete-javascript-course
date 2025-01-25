////////////////////////////////////////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

/* var markMass = 78;
var markHeight = 1.69;
var johnMass = 95;
var johnHeight = 1.88;
var markBMI = markMass / markHeight ** 2;
var johnBMI = johnMass / johnHeight ** 2;
console.log("markBMI", markBMI);
console.log("johnBMI", johnBMI); */

////////////////////////////////////////////////////////////////////////
// 字符串和模板语法
/* const job = "Teacher";
const myJob = "I'am a" + job;
console.log(myJob);
console.log(`.... ${myJob}`);
console.log(
  "多行\n\
字符\n\
串"
);
console.log(`多行
字符
串`);
 */

////////////////////////////////////////////////////////////////////////
// if else 语法
/*
if(){

} else{
}
*/

////////////////////////////////////////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
/* var markMass = 78;
var markHeight = 1.69;
var johnMass = 95;
var johnHeight = 1.88;
var markBMI = markMass / markHeight ** 2;
var johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI(${johnBMI}) is higher than Mark's!(${markBMI})`);
} */

////////////////////////////////////////////////////////////////////////
// 类型转换和强制
/* var inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18); //199118
console.log(Number(inputYear) + 18); //2009

console.log(Number("sss"));
console.log(typeof NaN);

console.log(String(23), 23);

console.log("I am " + 23 + " 岁"); // 字符串之间的操作存在数字，就会强制转换
console.log("23" - "10" - 3); // 10
console.log("23" + "10" + 3); // 23103 */

////////////////////////////////////////////////////////////////////////
// Truely 和 falsely
// 假值是不完全为false的值，当我们尝试转换它们时，就会变成false
// 0,'',undefined,null,NaN
/* console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({})); */

////////////////////////////////////////////////////////////////////////
// == 操作符 和 === 操作符
// == 是等于，=== 是恒等于
/* console.log(18 === 19); // false
console.log(18 === 18); // false
console.log(18 == "18"); // true
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
 */

////////////////////////////////////////////////////////////////////////
// 布尔逻辑
////////////////////////////////////////////////////////////////////////
// 逻辑运算符

////////////////////////////////////////////////////////////////////////
// Coding Challenge #3
/*
有两支体操队，分别是海豚队和考拉队。它们要相互竞争 3 次。平均得分最高的获胜者将赢得一个奖杯！

1. 使用下面的测试数据计算每支队伍的平均得分
2. 比较各队的平均分，确定比赛的获胜者，并打印到控制台。别忘了，也有可能出现平局，所以也要进行测试（平局表示平均分相同）。

3. 额外奖励 1：加入最低得分 100 分的要求。有了这条规则，只有当一支队伍的得分高于另一支队伍，且同时得分至少达到 100 分时，这支队伍才能获胜。提示：使用逻辑运算符测试最低得分，以及多个 else-if 块😉。
4. 附加 2：最低得分也适用于平局！因此，只有当两队得分相同且都大于或等于 100 分时，才会发生平局。否则，没有球队赢得奖杯。

测试数据 海豚得分 96、108 和 89。考拉得分 88、91 和 110
测试数据奖励 1：海豚队得分 97、112 和 101。考拉得分 109、95 和 123
测试数据奖励 2：海豚得分 97、112 和 101。考拉得分 109、95 和 106

祝您好运
*/
/* var scoreKoalas = (97 + 112 + 101) / 3;
var scoreDolphins = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreKoalas > scoreDolphins) {
  console.log("Koalas is winner");
} else if (scoreKoalas < scoreDolphins) {
  console.log("Dolphins is winner");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both");
} else {
  console.log(" No one");
} */

////////////////////////////////////////////////////////////////////////
// Swith 语句
/* const day = "friday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
} */

////////////////////////////////////////////////////////////////////////
// 语句和表达式
/*
表达式（Expression）是一段可以计算并返回一个值的代码，可以是简单的值（如字面量）、变量、运算符组合或函数调用。可以嵌套在其他表达式中
5;  x;
2+3;
x > 10 ? "yes" : "no"; // 三元表达式

语句是执行某个操作的代码单元。不一定返回值
*/

console.log("Hello"); // 函数调用表达式作为语句
// x = 10; // 赋值表达式作为语句
let x = 10; // 变量声明语句
if (x > 5) {
  console.log("x is greater than 5");
} // 条件语句

////////////////////////////////////////////////////////////////////////
// 三元表达式
// 条件 ? 表达式1 : 表达式2

////////////////////////////////////////////////////////////////////////
// Coding Challenge #4
/*
史蒂文想建一个非常简单的小费计算器，以便他在餐馆吃饭时使用。在他的国家，如果账单金额在 50 到 300 之间，通常给 15%的小费。如果账单金额不同，小费则为 20%。

1. 您的任务是根据账单金额计算小费。为此创建一个名为 “小费 ”的变量。不允许使用 if/else 语句😅（如果对您来说更简单，您可以从 if/else 语句开始，然后尝试将其转换为三元运算符！） 2.
2. 向控制台打印包含账单值、小费和最终值（账单 + 小费）的字符串。示例："账单值为 275，小费为 41.25，总值为 316.25。

测试数据：测试账单值 275、40 和 430

提示：要计算数值的 20%，只需将其乘以 20/100 = 0.2
提示：值 X 介于 50 和 300 之间，如果 >= 50 && <= 300 😉

祝您好运
*/
var bill = 275;
var tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill},the tip was ${tip},and the total value ${bill + tip}`
);
