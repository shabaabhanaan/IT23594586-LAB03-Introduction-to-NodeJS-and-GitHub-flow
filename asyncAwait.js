async function myFunction(){
    const myPromise = new Promise((resolve, reject) =>{
        const condition = true;
        if(condition) resolve('Success!');
        else reject('Failure!');

    });

    try{
        const result = await myPromise;
        console.log(result);

    }catch(error){
        console.log(error);
    }
}

myFunction();