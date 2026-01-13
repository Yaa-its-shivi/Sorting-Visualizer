

export function bubbleSort(array){
    let steps=[];
    let a=[...array];
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i-1;j++){
            steps.push({array:[...a],i,j,swapped:false})

            if(a[j]>a[j+1]){
                [a[j],a[j+1]]=[a[j+1],a[j]]
            }
        }
        steps.push({array:[...a],i,j:0,swapped:true})
    }
    return steps;
}

export function insertionSort(array){
    let steps=[];
    let a=[...array];
    steps.push({array:[...a],i:0,j:0,swapped:false})
    for(let i=1;i<array.length;i++){
        let key = a[i];  // Current element to insert
        let j = i - 1;
        while(j>=0&&a[j]>key){
            a[j + 1] = a[j];
            j--;
           
        }
        a[j + 1] = key;
        steps.push({array:[...a],i,j,swapped:true})
    }
    return steps;

}
export function selectionSort(array){
    let steps=[];
    let a=[...array];
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            let minInd=i;
            steps.push({array:[...a],i,j,swapped:false})

            if(a[i]>a[j]){
                minInd=j;
            }
            if(minInd!=i){
                [a[i],a[minInd]]=[a[minInd],a[i]]
                
            }
        }
        steps.push({array:[...a],i,j:0,swapped:true})
    }
    return steps;

}