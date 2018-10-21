let i=0,op='',num=[0.,0.],ans=false;

function hello(e){
    var val=e.target.innerText;
    var inp=document.getElementById("val");
   
    if (ans==true)inp.value='0';
    if(!isNaN(val)||val=='.'){
        if(inp.value=='0')
            inp.value='';
        inp.value+=val;
        
    }
    else if(val=='CE'){
        inp.value='0';
        op='';
        ans=false;
    }
    else if(val=='DEL'){
        ans=false;
        inp.value=inp.value.slice(0,inp.value.length-1);
        if(inp.value=='')
            inp.value='0';
    }
    else{
        if(op==''){
            num[i]=parseFloat(inp.value);
            //console.log(num[0]);
            i=(i+1)%2;
            op=val;
            inp.value='0';
        }
        else{
            num[i]=parseFloat(inp.value);
            performop(op);
            inp.value=num[0];
            i=(i+1)%2;
            op=val;
            ans=true;
        }

    }
    console.log(num,op);
}

function performop(op){
    switch(op){
        case '+':num[0]+=num[1];break;
        case '-':num[0]-=num[1];;break;
        case '/':num[0]-=num[1];;break;
        case '*':num[0]-=num[1];;break;
    }
}