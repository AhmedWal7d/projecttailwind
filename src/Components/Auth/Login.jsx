import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Audio } from 'react-loader-spinner';
import * as yup from 'yup';
export default function Login() {
  const [error, seterror] = useState(null);
  const [isloading, setisloading] = useState(false);


  function Login(value) {
    setisloading(true)
    axios.post("URL", value)
      .catch((error) => {
        setisloading(false);
        seterror(error.message);

      })

  }


  let validation = yup.object({
    name: yup.string()
      .min(3, "يجب أن يكون الاسم على الأقل 3 أحرف")
      .max(10, "يجب ألا يتجاوز الاسم 10 أحرف")
      .required("الاسم مطلوب"),
    password: yup.string().required("الاسم مطلوب")
  })

  let formik = useFormik({
    initialValues: {
      name: "",
      password: ""
    },
    validationSchema: validation
    ,
    onSubmit: Login
  })

  return (
    <div>

      <form onSubmit={formik.handleSubmit}>




        <div className='w-75 mx-auto mt-5'>
          {
            error ? <div className='alert alert-danger p-3'>  {error}  </div> : ""
          }

          <label htmlFor='name' className='mt-3'>name:</label>
          <input name='name' id='name' className='form-control' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />

          {
            formik.errors.name && formik.touched ? <div className="alert alert-danger" role="alert">
              {formik.errors.name}
            </div> : ""
          }


          <label htmlFor='password' className='mt-3'>password:</label>
          <input name='password' id='password' className='form-control' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />




          {
            formik.errors.password && formik.touched ? <div className="alert alert-danger" role="alert">
              {formik.errors.password}
            </div> : ""
          }

  {/* Spinner and Submit Button */}
  <div className="d-flex justify-content-center mt-3">
                    {isloading ? 
                        <Audio height="80" width="80" radius="9" color="green" ariaLabel="loading" />
                    : 
                        <button disabled={!(formik.isValid && formik.dirty)} className='btn btn-info' type="submit">Submit</button>
                    }
                </div>

        </div>

      </form>

    </div>
  )
}
