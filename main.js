
const userName = 'Namae';
string = `Hello ${userName}`;
console.log(string);
console.log(string + '\nYou will die');
console.log(string + `改行
    できるよ`);

    const userInput = '10.1';
    let calcResult;
    calcResult = Number(userInput) + 10;
    console.log(calcResult);
    calcResult = parseInt(userInput) + 10;
    console.log(calcResult);
    calcResult = parseFloat(userInput) + 10;
    console.log(calcResult);
    calcResult = +userInput + 10;
    console.log(calcResult);


    const tenNumber = 10;
    calcResult = '1' + String(tenNumber);
    console.log(calcResult);
    calcResult = '1' + tenNumber.toString();
    console.log(calcResult);

    let boolean = true;
    boolean = false;


    //22.配列を使って値を順序付けて纏める方法
     let arraay = ['apple', 'lemon','banana','orange'];
     array = [1, 3, 4, 6, 7, 8, 10];
     array = [1, '3', 'apple'];
     console.log(array[0]);
     array = [];
     array.push('apple'); //配列の最後に要素を追加
     console.log(array);
     
     
     //23. 最も重要な型であるオブジェクトを使い、まとまったデータを作る方法
     const coffee = {
        name: 'Chocolate Mocha', //プロパティっていうらしい
        size: 350, //これだとサイズプロパティだってさ
        isHot: true,
        toppings: ['Chinnamon', 'Whipped Cream'],
        nutritions: {
            calorie: 450,
            sugar: 40, //最後はカンマあってもなくてもいい
        },
     }; 
     console.log(coffee.size);
     coffee.isHot = false; //これで値を変更できる
     coffee.barista = 'John'; //これで新しいプロパティを追加できる
     console.log(coffee.barista);
     
     
    //24.「null」と「undefined」
    let userInfo = null; //これはNull
    userInfo = undefined; //これはUndefined
    userInfo; //これもUndefined
    coffee.Hello; //これもUndefined
    
     //25. typeof演算子を使って、データの型を表示する方法
     typeof 10
     typeof -10
     typeof NaN
     typeof 3.0
     typeof true
     typeof {name: 'Jane'}
     typeof [1,2,4]
     typeof null
     typeof undefined
     
