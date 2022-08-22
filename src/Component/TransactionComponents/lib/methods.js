export const sortedData = (name, data) => {
    let FinalData;
    if (name) {
        FinalData = data.filter(emp => emp.NAME_ARABIC === name)

    } else {
        FinalData = data
    }

    return FinalData;
}


