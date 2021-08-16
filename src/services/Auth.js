

export const LoginApi=async(data)=>{

    console.log("data",data)
    try{

        const result=await fetch('http://172.20.32.1:4000/login',{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
 },
            body:JSON.stringify(data)


        })
        var jsonResponse = await result.json();

        console.log(jsonResponse)
        return jsonResponse

    }
    catch(err){
        console.log(err)
        return err;
    }
}