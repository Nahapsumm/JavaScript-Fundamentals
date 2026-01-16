function sumofoddnum(N){
    let i = 1;
    let totalsum = 0;
    let num = 1;
    while(i <= N){
        if(num % 2 !== 0){
            totalsum += num;
            console.log(num);
            i++
        }
        num++
    }
    console.log(`Sum: ${totalsum}`);
    
}
sumofoddnum(5);