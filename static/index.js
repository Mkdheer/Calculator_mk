btns = document.querySelectorAll('.buttons button')
    textArea = document.querySelector('#text')
    let res = ""
    btns.forEach((btn) => {
        btn.addEventListener('click', async ()=>{
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
                        textArea.value = await resultValue(res)
                        res = ""
                }
               }catch(err){

               }
            }
        })
    })


    let resultValue = async (res) => {
        let data = await fetch('/process', {
            method : 'POST',
            headers : {'content-type':'application/json'},
            body : JSON.stringify({'res':res})
        })
        data = await data.json()
        return data.result
    }