export function redirectTo({identity,avator}){
    let url = identity === 'Boss' ? 'boss':'jobSeeker';
    // url += hasAvator.length > 0 ? '': 'Info';
    if(!avator){
        url += 'Info';
    }else{
        url += 'Page';
    }
    return url;
}