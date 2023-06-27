import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../components/Input';
import styled from 'styled-components';
import LongBtn from '../components/LongBtn';
import { useEffect, useState } from 'react';
import {AxiosLogin} from "../api/Login";
import {useNavigate} from "react-router-dom";

export const ID_MSG =
    '영문과 숫자을 조합하여 5~10글자 미만으로 입력하여 주세요.';
export const PWD_MSG =
    '영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여 주세요.';
export const ID_ERROR_MSG =
    '아이디를 잘못 입력하셨습니다. 다시 입력해주세요.';
export const PWD_ERROR_MSG =
    '비밀번호 잘못 입력하셨습니다. 다시 입력해주세요.';


const schema = yup.object().shape({
    id: yup.string().matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,10}$/, ID_MSG),
    password: yup
        .string()
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*_+=`|\\(){}[\]:;"'<>,.?])[a-zA-Z\d~!@#$%^&*_+=`|\\(){}[\]:;"'<>,.?]{8,14}$/,
            PWD_MSG
        ),
});


const Login = ({loginToggle}) => {
    const [isAble, setIsAble] = useState(true);
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    const navigate = useNavigate();
    const value = watch();
    const onSubmit = (data) => {
        AxiosLogin(data, loginToggle, ()=>navigate("/"));
        console.log(data);
        setValue('id', '')
        setValue('password', '')
        document.getElementsByName("id")[0].focus();
    };
    useEffect(() => {
        setIsAble(value.id && value.password);
    }, [value.id, value.password]);


    return (
        <>
            <Wrapper>
                <Container>
                    <Title>로그인</Title>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            value={value}
                            setValue={setValue}
                            placeholder='아이디'
                            type='text'
                            name={'id'}
                            valid={errors.id}
                            register={register}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    if (!errors.id) {
                                        document.getElementsByName("password")[0].focus();
                                    }
                                }
                            }}
                        />
                        <Input
                            value={value}
                            setValue={setValue}
                            placeholder='비밀번호'
                            label='Password'
                            type='password'
                            name={'password'}
                            valid={errors.password}
                            register={register}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    handleSubmit(onSubmit)();
                                }
                            }}
                        />
                        <LongBtn isAble={isAble} text={'로그인'} type='submit' />
                        <SignupBox>
                            <SignUpBtn onClick={()=>navigate("/join")}>회원가입</SignUpBtn>
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
`;
const SignUpBtn = styled.button`
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: 20px;
  font-weight: 600;
  margin-right: 15px;
`;