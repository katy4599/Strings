
const myStr = "hello class";

function main(){}
    console.log(myStr.replace('c', 'C'));
    console.log(myStr.replace('h', 'H'));
    console.log(myStr.concat('!'));
    console.log(myStr.toUpperCase());
    console.log(myStr.toLowerCase());
    console.log(myStr.repeat(5));
    console.log(myStr.replace('h', 'H').replace('c', 'C'));

    for (let char of myStr) {
        console.log(char);
    }
    
    let result = '';
    
    for (let i = (myStr.length - 1); i >= 0; i--) {
        result += myStr[i];
    }
    console.log(result);

main();
