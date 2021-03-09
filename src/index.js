module.exports = function check(str, bracketsConfig) {
  if(str.length < 2) return false;
  let dict = {};
  for(let i = 0; i < bracketsConfig.length; i++) {
    dict[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  st = [];
  for(let i = 0; i < str.length; i++) {
    st.push(str[i]);
    if(st.length > 1 && dict[st[st.length - 2]] === st[st.length - 1]) {
      st.pop();
      st.pop();
    }
  }
  return st.length === 0;
}
