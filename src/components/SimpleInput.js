import { useForm } from "react-hook-form";

const SimpleInput = (props) => {
  const {register, //регистрация для инпута, валидация
    formState: { errors, isValid }, // состояние формы
    handleSubmit,
    reset // после отправки текста изчезает
  } =useForm({mode:'all'})


  const formSubmitHandler = (data) => {
    console.log(data)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' {...register('userName',{required: {
          value: true,
          message: 'Must not be empty'
        }})}/> 
         <label htmlFor='pass'>Your Password</label>
        <input type='password' id='pass' {...register('password',{required: {
          value: true,
          message: 'Must not be empty'
        }})}/> 
      </div>
      <div>
        {errors?.password && <p className="error-text">{errors.password.message}</p>}
      </div>
      <div className="form-actions">
        <button disabled ={!isValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
