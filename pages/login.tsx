import React from 'react'
import { useForm } from 'react-hook-form'
import { TextField, Button, Grid } from '@mui/material'
import { auth, AuthProps } from './../api'
import { useRouter } from 'next/router'
import { useSnackbar, useAuth } from '../core/helpers'
import { ApiInstanceError } from './../core/clients/axios'
import Image from "next/image"
import LoginFormSvg from '../storybook/assets/img/login-form.svg'
import styled from "@emotion/styled"
import { Loading } from '../storybook/atoms'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  width: 55%;
  height: 481px;
  border-radius: 4px;
  background-color: #ffffff;
  background-size: cover;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardForm = () => {
    return (
        <Container>
            <Grid container>
                <Grid lg={6} xs={12} container alignItems="center" style={{
                    borderRight: "2px solid #f3f3f3"
                }}>
                    <LoginFormSvg />
                </Grid>
                <Grid lg={6} xs={12}>
                    <FormLogin />
                </Grid>
            </Grid>
        </Container>
    )
}

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 40px;
`

const FormTitle = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 48px;
  color: #111111;
  text-decoration: none solid rgb(17, 17, 17);
`

const ErrorBackMenssage = styled.span`
  color: red;
  font-size: 14px;
`

const FormLogin = () => {
    const snackbar = useSnackbar()
    const { login } = useAuth()
    const { push } = useRouter()
    const [errorMessage, setErrorMessage] = React.useState({
        view: false,
        message: ''
    })
    const [showLoading, setShowLoading] = React.useState({
        view: false
    })
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<AuthProps>()

    const resetErrorMessage = () =>
        setErrorMessage({
            view: false,
            message: ''
        })

    const resetShowLoading = () =>
        setShowLoading({
            view: false
        })

    const onSubmit = async (data: AuthProps) => {
        resetErrorMessage()
        try {
            // Set loading
            setShowLoading({
                view: true
            })
            const resp = await login(data)
            if (resp?.status === 200) {
                push('/')
            }
        } catch (e) {
            const error = e as ApiInstanceError
            if (error?.response?.status === 401) {
                setErrorMessage({
                    view: true,
                    message: error?.response?.data?.errorMessage || "No esta autorizado"
                })
            } else {
                snackbar.show({
                    message: 'Ocurrió un error en el sistema. Intente más tarde',
                    error: true
                })
            }
        }
        resetShowLoading()
        // Reset loading
    }

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Image src="/icon-company.jpg" alt="icon-company" height={200} width={200} />
            <TextField
                label="email"
                type="email"
                placeholder="email"
                variant="outlined"
                size="small"
                fullWidth
                margin="dense"
                error={Boolean(errors?.email)}
                {...register('email', {
                    required: {
                        value: true,
                        message: 'El campo es requerido.'
                    }
                })}
                helperText={errors?.email?.message ?? ''}
            />
            <TextField
                label="password"
                type="password"
                placeholder="password"
                variant="outlined"
                size="small"
                fullWidth
                margin="dense"
                error={Boolean(errors?.password)}
                {...register('password', {
                    required: {
                        value: true,
                        message: 'El campo es requerido.'
                    }
                })}
                helperText={errors?.password?.message ?? ''}
            />
            <Button
                variant="contained"
                style={{ margin: '52px', backgroundColor: '#1270A6', color: 'white' }}
                fullWidth
                type="submit"
            >
                Login
            </Button>
            {errorMessage?.view && (
                <ErrorBackMenssage>{errorMessage?.message}</ErrorBackMenssage>
            )}
            {showLoading?.view && (<Loading />)}
        </FormWrapper>
    )
}

const Login = () => {
    return (
        <Wrapper>
            <CardForm />
        </Wrapper>
    )
}
export default Login