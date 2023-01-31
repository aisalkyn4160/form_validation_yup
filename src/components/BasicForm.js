import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required('Name is must not be empty'),
  lastName: yup.string().required('Last name is must not be empty'),
  email: yup.string().required('Email is must not be empty')
}).required();

const BasicForm = (props) => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' {...register("firstName")} />
          <p className='error-text'>{errors.firstName?.message}</p>
        </div>
        <div className='form-control'>
          <label htmlFor='lastname'>Last Name</label>
          <input type='text' id='lastname' {...register("lastName")}/>
          <p className='error-text'>{errors.lastName?.message}</p>
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' {...register("email")}/>
        <p className='error-text'>{errors.email?.message}</p>
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

