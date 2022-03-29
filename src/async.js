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

const a={
    boo:'hel',
    sel:'hew'
}


const b=Object.create(a);// yo ta inheritance bata ako honta

const c=Object.assign({},b);// technically nth should be copied to c bcz b bhaneko
// sab kura prototype bata ako xa; ani  assign le prototype bata ako kura lidaina

console.log(c.boo);// see it got undefined
//but if we had done it differently then:
const d=Object.assign({},a);// actual one which has  values without inheritance
console.log(d.boo)// we should technically get the result as d has the values 
// yes we got it
// like this says alot about assign
// like it only copies stuff that belongs to a
// doesn't go up the prototype chain
// ani with assign we can change the values in a and it wont affect b and d

a.boo='llo';
console.log(a);
console.log(b);
// if we want to copy like tyo mathi ko ni inherit garera ako then we use create
// like create use garnu ko disadv chai like tesko  value herna sakinna

console.log(d);
// if we want to like have no relation ie no inheritance then we use assign
//
// it boils down to assign does shallow copy as it doesn't copies the protype that is passed to the object

// create does deep copy bcz tesma prototype haru ni copied hunxa tara create ko disadv chai like print garyo vane like purai object dekhinna



