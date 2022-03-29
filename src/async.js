// let a=3;
// function increment(){
//     console.log(a++);
// }

// // setTimeout(()=>console.log(a++),1000);// since this is async, the value of a will be 4 in all the cases
// // setTimeout(()=>console.log(a++),1000);//  
// // setTimeout(()=>console.log(a++),1000);
// // // console.log(a);




// function closure(a){
//     setTimeout(()=>console.log(a+1),1000);// since this is async, the value of a will be 4 in all the cases
//     setTimeout(()=>console.log(a+1),1000);//  
//     setTimeout(()=>console.log(a+1),1000);   
// }
// closure(3);
// // setTimeout(
// //     (setTimeout(
// //         (setTimeout(
// //             ()=> console.log(a++),1000)
// //         )
// //     ),1000),
// //     1000);// since this is async, the value of a will be 4 in all the cases
// // setTimeout(increment,1000);//  
// // setTimeout(increment,1000);
// // console.log(a);

// // setTimeout(()=>{
// //     increment()
// //     setTimeout(()=>{
// //         increment()
// //         setTimeout(()=>{
// //             increment()
// //         },1000)
//     },1000)
// },1000)


const obj={
    name:'hello',
    func:function(){
        console.log(this.name);

    },
    func1:()=>{
        console.log(this.name);
    },
    func2:function(){
        (()=>{console.log(this.name)})()// like yo garexi chai auto run hunxa afai
        // like esma yo wala function le dui level mathi gayo euta func2 function bata mathi
        // into obj object ma
        // tara like tyo function bhitra ni testai function vako vae esto hudaina thyo

    },
    func3:function(){
        (function hello(){
            console.log(this.name);
        })()
    }
}

// const hwe=new function(){
//     console.log(this);
//     console.log('hello');
// }

// hwe.prototype.hel=()=>{
//     console.log('hello');
// }
// obj.func();
// obj.func1();
// obj.func2();
// obj.func3();
// console.log(hwe);


Object.defineProperty(obj,'unicorn',{
    value:'hsd;',
    value:'sdj;f',
    value1:'h;lsdfjk'
})

const hello={
    ['hel'+'llo']:'ram'
}

console.log(hello);

console.log(obj.unicorn.value1)



const obj1={
    name:'hello',
    makeWeb(){// even this method resolves to function()==> ho esari function banako jastai
        //a different way of making function// esari banayo bhane getter, setter set garna sakinxa
        // this.name=value;
        console.log(this.name)
    },
    makeNest:function(){
        console.log('make Nest')
    },
    makeSpider:()=>{
        console.log('make spider')
        console.log(this);
    }
 
}

// obj1.makeNest();
obj1.makeWeb();
obj1.makeNest();
obj1.makeSpider();
// hwe.he=hwe();
// console.log(hwe);