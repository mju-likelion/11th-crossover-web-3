import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from "../components/Input";
import styled from "styled-components";
import LongBtn from "../components/LongBtn";
import {useEffect, useState} from "react";

export const ID_MSG = '영문과 숫자를 조합하여 5~10글자 미만으로 입력하여 주세요.'
export const PWD_MSG = '영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여 주세요.'


//"아이디를 잘못 입력하셨습니다. 다시 입력해주세요."
//"비밀번호를 잘못 입력하셨습니다. 다시 입력해주세요."

// todo X버튼 눌렀을 때 새로고침(제출) 안 돼야 함


const schema = yup.object().shape({
    id: yup.string().matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,10}$/, ID_MSG),
    password: yup.string().matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*_+=`|\(){}[]:;"'<>,.?])[a-zA-Z\d!@#$%^&*_+=`|\\(){}[\]:;"'<>,.?/]{8,14}$/, PWD_MSG),
});

// isVaild true면 그린
// isVaild false + isError true = red
// isVaild false + isError false = gray
const Login = () => {
    const [isAble, setIsAble] = useState(true)
    const [isError, setIsError] = useState(false)

    const [idValue, setIdValue] = useState("")
    const [pwdValue, setPwdValue] = useState("")


    useEffect(()=> {
        setIsAble(idValue && pwdValue)
    }, [idValue, pwdValue])


    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });


    useEffect(() => {
        setIsError(Object.keys(errors).length > 0);
    }, [errors]);


    const onSubmit = (data) => {
        console.log(data);
        // 데이터를 서버로 전송하거나 필요한 작업 수행
    };


    return (
        <>
            <Wrapper>
                <Container>
                    <Title>로그인</Title>
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <Input value={idValue} setValue={setIdValue} placeholder="아이디" isError={isError}
                                   type="text" register={register('id') } errors={errors.id}
                            />
                            <Input value={pwdValue} setValue={setPwdValue} placeholder="비밀번호" isError={isError}
                                   label="Password" type="password" register={register('password')} errors={errors.password}
                            />
                        <LongBtn isAble={isAble} text={"로그인"} type="submit"/>
                        <SignupBox>
                            <SignUpBtn>회원가입</SignUpBtn>
                        </SignupBox>
                    </form>
                </Container>
            </Wrapper>
        </>
    );
};
export default Login;


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 145px;
  width: 540px;
`;
const Title = styled.div`
  width: 150px;
  height: 74px;
  font-size: 54px;
  font-weight: 600;
  margin-bottom: 65px;
`;

const SignupBox = styled.div`
  display: flex;
  justify-content: end;
`
const SignUpBtn = styled.button`
  color: ${({theme}) => theme.colors.GRAY};
  font-size: 20px;
  font-weight: 600;
  margin-right: 15px;
`;