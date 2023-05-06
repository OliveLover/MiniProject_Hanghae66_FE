import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import useInput from "../hooks/useInput";
import axios from 'axios';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userYear, setUserYear] = useState('');
  const [userSkill, setUserSkill] = useState(''); // 0=spring, 2=react, 3=nodejs
  const [userType, setUserType] = useState(''); // admin || user

  console.log(userType)
  const handleChange = (event) => {
    setUserType(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/auth/signup', {
        username,
        userpassword: password,
        userYear,
        userSkill,
        role:userType,
      }, {
        headers: {
        },
      });

      // if (response.status === 200) {
      //     alert('회원가입에 성공했습니다!');
      // } else {
      //     alert('회원가입에 실패했습니다.');
      //     console.log('회원가입 오류:', response.data);
      // }
      alert('회원가입에 성공했습니다!');
      // navigate('/')
      console.log(username, password, userYear, userSkill)
    } catch (error) {
      console.error('회원가입 오류:', error.response.data);
      alert(JSON.stringify(error.response.data));
    }
  }

  return (
    <StLayout>
      <StsignBox>
        <Stheadtext>회원가입</Stheadtext>
        <StInputbox>
          <StIDtext>아이디</StIDtext>
          <StIdbox>
            <Input value={username}
              onChange={(e) => setUsername(e.target.value)}
              size="medium" placeholder="아이디는 4 ~ 12자 이내로 입력해주세요" />
            <Button size="medium">중복체크</Button>
          </StIdbox>
          <div>
            <Sttext>패스워드</Sttext>
            <Input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="custom" width="460px" height="46px" fsize="16px" placeholder="비밀번호는 4 ~ 12자 이내로 입력해주세요" />
          </div>
          {/* <div>
            <Sttext>패스워드 확인</Sttext>
            <Input size="custom" width="460px" height="46px" fsize="16px" placeholder="비밀번호를 확인해주세요" />
          </div> */}
          <div>
            <Sttext>기수</Sttext>
            <Select.SelectboxA setUserYear={setUserYear} />
          </div>
          <div>
            <Sttext>주특기</Sttext>
            <Select.SelectboxB setUserSkill={setUserSkill} />
          </div>
          <StButtonbox>
        <div>
        <input
          type="radio"
          id="admin"
          name="userType"
          value="0" //admin
          // checked={userType === 'admin'}
          onChange={handleChange}
        />
        <label htmlFor="admin">Admin</label>
      </div>
      <div>
        <input
          type="radio"
          id="user"
          name="userType"
          value="1" //user
          // checked={userType === 'user'}
          onChange={handleChange}
        />
        <label htmlFor="user">User</label>
      </div>
      </StButtonbox>
        </StInputbox>
        <StButtonbox>
          <Button size="custom">취소</Button>
          <Button onClick={handleSubmit} size="large">가입완료</Button>
        </StButtonbox>

      </StsignBox>
    </StLayout>
  );
}

export default SignUp;

const StIdbox = styled.div`
  display: flex;
  align-items: center;
`

const StIDtext = styled.div`
  font-size: 12px;
  font-weight: 700;
  transform: translateY(14px);
`

const Sttext = styled.div`
  font-size: 12px;
  font-weight: 700;
`

const Stheadtext = styled.p`
  font-size: 40px;
  font-weight: 700;
`;

const StLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const StsignBox = styled.div`
  width: 640px;
  height: 742px;
  display: flex;
  border-radius: 18px;
  gap: 38px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.25);
`;
const StInputbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StButtonbox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`