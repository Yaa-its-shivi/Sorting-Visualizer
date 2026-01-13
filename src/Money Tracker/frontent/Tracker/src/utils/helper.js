import moment from "moment";

export const validateEmail=(email)=>{
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const getInitials=(name)=>{
    if(!name)return "";
    const words=name.split(" ");
    let initals="";
    for(let i=0;i<Math.min(words.length,2); i++){
        initals+=words[i][0];
    }
    return initals.toUpperCase();
}


export const addThousandSeparator=(num)=>{
    if(num==null||isNaN(num))return "";

    const [integerPart,fractionalPart]=num.toString().split(".");
    const formattedInterger=integerPart.replace(/\B(?=(\d{3})+(?!\d))/g,",");

    return fractionalPart
    ? `${formattedInterger}.${fractionalPart}`
    : formattedInterger;
}

export const prepareExpenseBarChartData=(data=[])=>{
    const chartData=data.map((item)=>({
        category:item?.category,
        amount:item?.amount,
    }));
    return chartData;
}

export const prepareIncomeBarChartData=(transactions=[])=>{
    const sortedData=[...transactions].sort((a,b)=>new Date(a.date)-new Date(b.date));

    const chartData=sortedData.map((item)=>({
        month:moment(item?.date).format("Do MMM"),
        amount:item?.amount,
        source:item?.source,
    }));
    return chartData;
}

export const prepareExpenseLineChartData=(transactions=[])=>{
    const sortedData=[...transactions].sort((a,b)=>new Date(a.date)-new Date(b.date));

    const chartData=sortedData.map((item)=>({
        month:moment(item?.date).format("Do MMM"),
        amount:item?.amount,
        category:item?.category,
    }));
    return chartData;
}