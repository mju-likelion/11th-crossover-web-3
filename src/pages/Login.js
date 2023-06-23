import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../components/Input';
import styled from 'styled-components';
import LongBtn from '../components/LongBtn';
import { useEffect, useState } from 'react';

export const ID_ERROR_MSG =
    '영문과 숫자를 조합하여 5~10글자 미만으로 입력하여 주세요.';
export const PWD_ERROR_MSG =
    '영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여 주세요.';
export const ID_MSG =
    '사용할 수 없는 아이디 입니다.';
export const PWD_MSG =
    '사용할 수 없는 비밀번호 입니다.';


const schema = yup.object().shape({
    id: yup.string().matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,10}$/, ID_MSG),
    password: yup
        .string()
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*_+=`|\\(){}[\]:;"'<>,.?])[a-zA-Z\d~!@#$%^&*_+=`|\\(){}[\]:;"'<>,.?]{8,14}$/,
            PWD_MSG
        ),
});


const Login = () => {
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
    const value = watch();
    const onSubmit = () => {
        console.log(value.id);
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
                            errors={errors.id}
                            register={register}
                        />
                        <Input
                            value={value}
                            setValue={setValue}
                            placeholder='비밀번호'
                            label='Password'
                            type='password'
                            name={'password'}
                            errors={errors.password}
                            register={register}
                        />
                        <LongBtn isAble={isAble} text={'로그인'} type='submit' />
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
`;
const SignUpBtn = styled.button`
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: 20px;
  font-weight: 600;
  margin-right: 15px;
`;