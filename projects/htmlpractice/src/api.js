const API_END_POINT = 'https://api.thecatapi.com/v1/images/search'
const IMAGE_END_POINT = ''
const API_KEY = '20c047dd-fefd-4d79-876e-6aa84549c5a3'

const request = async (url) =>{
  try{
    const res= await fetch(`${API_END_POINT}${url}`, 
    //   {
    //     headers:{
    //       'X-API-KEY' : API_KEY,
    //       'Content-Type': 'application/json'
    //   }
    // }
    )
    if(!res.ok){
      throw new Error('에러')
    }
    return await res.json()
  }catch(e){
    alert(e.message)
  }
}

export {request}