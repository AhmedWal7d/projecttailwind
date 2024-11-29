import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Audio } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

export default function Rejster() {
    const [error, seterror] = useState(null);
    const [isloading, setisloading] = useState(false);
    let navigat = useNavigate(); // programmatically navigate

    async function rejster(value) {
        setisloading(true);
        let { data } = await axios.post("URL", value)
            .catch((error) => {
                setisloading(false);
                seterror(error.message);
                
            }); // in case error

    }

    let phoneRegex = /^[0-9]{11}$/;

    let validation = yup.object({
        name: yup.string()
            .min(3, "يجب أن يكون الاسم على الأقل 3 أحرف")
            .max(10, "يجب ألا يتجاوز الاسم 10 أحرف")
            .required("الاسم مطلوب"),

        phone: yup.string()
            .matches(phoneRegex, "رقم الهاتف غير صالح")
            .required("رقم الهاتف مطلوب"),

        password: yup.string()
            .matches(/^[A-Z][a-z0-9]{5,10}$/, "يجب أن تتكون كلمة المرور من 6 إلى 11 حرفًا، وتبدأ بحرف كبير، وتتبعها حروف صغيرة وأرقام")
            .required("كلمة المرور مطلوبة"),

        repassword: yup.string()
            .oneOf([yup.ref("password")], "كلمتا المرور غير متطابقتين")
            .required("إعادة كلمة المرور مطلوبة")
    });

    let formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            password: "",
            repassword: ""
        },
        validationSchema: validation,
        onSubmit: rejster
    });

    return (
        <div className='w-75 mx-auto mt-5'>
            <form onSubmit={formik.handleSubmit}>
                {
                    error? <div className='alert alert-danger p-3'>  {error}  </div>:""
                }
                {/* input 1 */}
                <label htmlFor='name'>Name:</label>
                <input className='form-control border mt-2 border-dark' name="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} id="name" />
                {formik.errors.name && formik.touched.name ? (
                    <div className="alert alert-danger" role="alert">
                        {formik.errors.name}
                    </div>
                ) : ""}

                {/* input 2 */}
                <label htmlFor='phone' className='mt-2'>Phone:</label>
                <input className='form-control border mt-2 border-dark' type="tel" name="phone" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} id="phone" />
                {formik.errors.phone && formik.touched.phone ? (
                    <div className="alert alert-danger" role="alert">
                        {formik.errors.phone}
                    </div>
                ) : ""}

                {/* input 3 */}
                <label htmlFor='password' className='mt-2'>Password:</label>
                <input className='form-control border mt-2 border-dark' type="password" name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} id="password" />
                {formik.errors.password && formik.touched.password ? (
                    <div className="alert alert-danger" role="alert">
                        {formik.errors.password}
                    </div>
                ) : ""}

                {/* input 4 */}
                <label htmlFor='repassword' className='mt-2'>Confirm Password:</label>
                <input className='form-control border mt-2 border-dark' type="password" name="repassword" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.repassword} id="repassword" />
                {formik.errors.repassword && formik.touched.repassword ? (
                    <div className="alert alert-danger" role="alert">
                        {formik.errors.repassword}
                    </div>
                ) : ""}

                {/* Spinner and Submit Button */}
                <div className="d-flex justify-content-center mt-3">
                    {isloading ? 
                        <Audio height="80" width="80" radius="9" color="green" ariaLabel="loading" />
                    : 
                        <button disabled={!(formik.isValid && formik.dirty)} className='btn btn-info' type="submit">Submit</button>
                    }
                </div>

            </form>
        </div>
    );
}
