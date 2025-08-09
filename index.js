btns = document.querySelectorAll('.buttons button')
    textArea = document.querySelector('#text')
    let res = ""
    btns.forEach((btn) => {
        btn.addEventListener('click', ()=>{
            const value = btn.innerText
            if (value !== '=' && value !== 'c'){
                res+=value
                textArea.value = res
            }else if(value === 'c') {
                res = ""
                textArea.value = res
            }else if(value === '='){
               try{
                if(res){
                    res = eval(res)
                    textArea.value = res
                }
               }catch(err){

               }
            }
        })
    })