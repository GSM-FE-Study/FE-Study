function solution(bin1, bin2) {
    const parseIntedBin1 = parseInt(bin1, 2);
    const parseIntedBin2 = parseInt(bin2, 2);
    
    const combineBin = parseIntedBin1 + parseIntedBin2;
    
    return combineBin.toString(2);
}