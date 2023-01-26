/* 
0. 회원가입 버튼(or submit) 누르면 데이터베이스에서 중복 확인후 입력 창이 뜸
0-1 중복이 없으면 alert로 "회원가입되었습니다."
0-1-1 데이터 베이스에 추가
0-2 중복이 있으면 alert로 "이미있는 id입니다." 후에 다시 처음 0번
1. input값에 id 입력 (엔터 or 옆 버튼(or submit) 끌릭 --> 후에 나중에 찾아볼때 그 방식으로)
2. 데이터베이스 안에 있는 id이면 2-1번  아니면 2-2번
2-1. input, 옆에 확인("Login") 버튼, 회원가입 버튼 사라짐(hidden --> css 활용 )
2-2. alert로 "없는 정보입니다. 회원가입 하십시요." 확인누르면 다시 0번 
*/

const Login = document.querySelector("#login")
const LoginInput = document.querySelector("#login input")


