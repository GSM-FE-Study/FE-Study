function solution(my_string, overwrite_string, s) {
    let my_string_list = my_string.split('');

    my_string_list.splice(s, overwrite_string.length, ...overwrite_string);

    let result = my_string_list.join('');

    return result;
}