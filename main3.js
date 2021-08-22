function work(a,b,c) {
    let aBiggerZero  =parseInt(a) >= 0
    let aSmallerZero =parseInt(a) <= 0
    let bBiggerZero  =parseInt(b) >= 0
    let bSmallerZero =parseInt(b) <= 0
    let cEquals = c == '-'|| c == '+'|| c =='*'|| c=='/';

    try{
        if (aBiggerZero,aSmallerZero,bBiggerZero,bSmallerZero,cEquals) {
            cwork(a,b,c)
        }
        else{
            throw new SyntaxError('error')
            console.log('lol');
        }
    }catch(err){
        console.log('Invalid syntax->'+err);
        }
}


function cwork(a,b,c) {
    let result = 0 ;
    switch (c) {
        case '-':{
            result=a-b
            console.log('Result: '+result);
            break;
        }case '+':{
            result=a+b
            console.log('Result: '+result);
            break;

        }case '*':{
            result=a*b
            console.log('Result: '+result);
            break;
        }case '/':{
            result=a/b
            console.log('Result: '+result);
            break;
        }
    
    }
}
work(4,8,'r')