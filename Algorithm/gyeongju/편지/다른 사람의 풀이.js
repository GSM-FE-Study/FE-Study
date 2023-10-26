function solution(message) {
    var horizontal = null;
    if((typeof message)=="string" ){
        horizontal = message.length * 2;
    }

    return horizontal;

}
