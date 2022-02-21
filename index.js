let data=[
    ['','',''],
    ['','',''],
    ['','','']
]
let previousValue='x';

const body=document.querySelector('body');
body.style.backgroundColor='gray'
const container=document.createElement('div');
container.setAttribute('class','container');

updateValue=(i,j)=>{
    if(previousValue==='x')
    {
        data[i][j]='0'
        previousValue='0';
    }
    else{
        data[i][j]='x'
        previousValue='x';
    }
    container.innerHTML='';
    grid();
}

function grid(){
    for(let i=0; i<3; i++){
        const gridRow=document.createElement('div');
        gridRow.setAttribute('class','row');

        for(let j=0; j<3; j++){
            const gridCol=document.createElement('h1');
            gridCol.textContent=data[i][j];
            gridCol.setAttribute('class','col');
            gridCol.addEventListener('click',()=>{
                updateValue(i,j)
            })

            gridRow.appendChild(gridCol);
        }

        container.appendChild(gridRow);
        body.appendChild(container);
    }
}

grid()