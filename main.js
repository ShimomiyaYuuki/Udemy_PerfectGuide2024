//セクション2のコードを纏めたもの
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

    //26. 関数を使い、何度も呼び出すことができるコードのかたまりを作る方法
     function add() {
        console.log(1 + 1);
     }
     add();

    //27.「パラメーター」と「引数」
    function add(num1, num2) {
        return console.log(num1 + num2);
        console.log('ここはreturnの後なので、無視される');
        
    }
    function add(num1, num2) {
        return console.log(num1 + num2);
        console.log('ここはreturnの後なので、無視される');
        
    }
    add(1, 6);
    add(2, 7);
    add(3, 8);

    //28.return文を使って、値を返す関数を作成する方法
    function add(num1, num2) {
        console.log('ここはreturnの後なので、無視される');
    }
    const returnedValue = add(1, 6);
    console.log(returnedValue); //undefinedが表示される

    //29. 関数の位置は先頭に巻き上げられる
    const returnedValue2 = add(1, 6);
    console.log(returnedValue2); //7が表示される。関数の宣言はコードの先頭に巻き上げられるため、関数を呼び出す前に関数を宣言してもエラーが発生しない。これを「巻き上げ」と呼ぶ。
    function add(num1, num2) { //
        return num1 + num2;
    }

    //30. 変数を参照できる範囲であるスコープはこうなっている
    const newValue = 'addから参照できる変数';
    function add(num1, num2) {
        console.log(newValue); //addから参照できる変数が表示される
        const value = num1 + num2;
        console.log(value); 
        return value;
    }
    console.log(value); //エラーが発生する。関数内で宣言された変数は関数内でしか参照できない。これを「スコープ」と呼ぶ。
    
    //グローバル変数とローカル変数で同じ変数名があるときはどちらを参照するか
    const Value = 'A';
    function add(num1, num2) {
        const value = num1 + num2;
        console.log(value); // 3が表示される
        return value;
    }

    
    //31. JavaScriptでコメントを書く２つの方法
    /* 
    複数行のコメント
    */