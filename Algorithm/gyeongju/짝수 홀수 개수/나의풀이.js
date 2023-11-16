function solution(num_list) {
    let even = 0;
    let odd = 0;   
    
    for (const num of num_list) {
        if (num % 2 === 0) {  
            even++;
        } else {
            odd++;   
        }
    }

    return [even, odd];
}

const num_list1 = [1, 2, 3, 4, 5];
const num_list2 = [1, 3, 5, 7];
