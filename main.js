let i=0,op='',num=[],clr=false,next=true;
function hello(e){
    var val=e.target.innerText;
    var inp=document.getElementById("val");
   
    
    if(!isNaN(val)||val=='.'){
        if (clr==true){inp.value='0';clr=false;}
        next=true;
        if(inp.value=='0')
            inp.value='';
        inp.value+=val;
        
    }
    else if(val=='CE'){
        inp.value='0';
        op='';
        num=[];
        
    }
    else if(val=='DEL'){
       
        inp.value=inp.value.slice(0,inp.value.length-1);
        if(inp.value=='')
            inp.value='0';
    }
    else if(val=='='){
        
        num.push(parseFloat(inp.value));
        if(num.length>=2){
            performop();
            num.pop();
            inp.value=num[0];
        }
        op='';
        clr=true;
        num=[];
    }
    else {if(next){
        num.push(parseFloat(inp.value));
       
        if(num.length>=2){
            performop();
            num.pop();
            inp.value=num[0];
            single=false;
        }
    }
        op=val;
        clr=true;
        next=false;
}
    console.log(num,op,inp.value,num.length);
}

function performop(){
    switch(op){
        case '+':num[0]+=num[1];break;
        case '-':num[0]-=num[1];break;
        case '/':num[0]=(num[1]==0)?"Math Error":(num[0]/num[1]);break;
        case 'x':num[0]*=num[1];break;
        
    }
}

