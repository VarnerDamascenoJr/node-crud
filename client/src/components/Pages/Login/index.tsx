
import { useForm, SubmitHandler } from 'react-hook-form'


interface FormInput {
  username: string;
  password: string;
}

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormInput>({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username</label>
      <input
        type='text'
        id="username"
        {...register("username",
          {
            required: {
              value: true,
              message: 'Username must not be empty'
            },
            max: {
              value: 20,
              message: 'Should start with alphabet,the username must contain less than 20 characters'
            },
            min: {
              value: 8,
              message: 'Should start with alphabet,the username must contain more than 7 characters'
            },
            pattern: {
              value: /^[a-zA-Z]{8,20}$/i,
              message: 'Should start with alphabet, less than 20 characters '
            }
          })}
        aria-invalid={errors.username ? "true" : "false"}
      />
      {
        errors.username && (<p role='alert'>{errors.username?.message}</p>)
      }

      <label htmlFor="password">Password</label>
      <input
        type='password'
        id='password'
        {...register("password",
          {
            required: {
              value: true,
              message: 'Password is required'
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
              message: 'Follow the exemple Testing123!'
            }
          })}
        aria-invalid={errors.password ? "true" : "false"}
      />
      {errors.password && <p role="alert">{errors.password.message}</p>}
      <button type='submit'>Login</button>
    </form>
  )
}
