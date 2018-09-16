export function redirectTo({identity,hasAvator}){
    let url = identity === 'Boss' ? 'boss':'jobSeeker';
    // url += hasAvator.length > 0 ? '': 'Info';
    if(!hasAvator){
        url += 'Info';
    }
    return url;
}