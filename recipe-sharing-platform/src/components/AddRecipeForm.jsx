import {Formik , Field, Form , ErrorMessage } from 'formik'
import { useState } from 'react';
import * as Yup from 'yup'

const validationSchema = Yup.object({
    title:Yup.string().required("Food Name is required"),
    summary:Yup.string().required("Add your thoughts about the food"),
    ingredients:Yup.string().required('How to mack the food'),
    instructions:Yup.string().required('At minimum the food should contain 2 steps')
})


const  AddRecipeForm = () => {
    const [submit , setSubmit] = useState(false);
    const [items , setItems ] = useState([]);
    const [input, setInput] = useState("");
    
    function handelSubmit() {
        setItems(Input.split(',').map(item=>item.trim()))


    }
    return ( 
        <div className="relative ">
            <Formik className="" initialValues={{
                title:'',
                summary:'',
                ingredients:'',
                instruction:'',

            }} 
            validationSchema={validationSchema}
            onSubmit={(values)=>{
                setSubmit(true);
                console.log("Form Submitted:", values);
            }}
            >
                {()=>(
                    <Form className="flex flex-col">
                        <Field type="text" placeholder="Food Name" name="title" className="border-2 border-gray-400 rounded-lg pl-2 m-4 w-64 shadow-md" required/> 
                        <ErrorMessage name="title" component="p"/>

                        <Field type="text" placeholder="Food description" name="summary" className="border-2 border-gray-400 rounded-lg pl-2 w-64 pb-4 m-4 shadow-md" required/> 
                        <ErrorMessage name="summary" component="p"/>
                       
                        <Field type="text" placeholder="Ingredients" name="ingredients" className="border-2 border-gray-400 rounded-lg pl-3 pt-3 m-4 pb-24 w-72 shadow-2xl" required/> 
                        <ErrorMessage name="ingredients" component="p"/>
                       
                        <Field type="text" onChange={(e)=>setInput(e.target.value)} onSubmit={handelSubmit}name="instructions" className="border-2 border-gray-400 rounded-lg pl-3 pt-3 m-4 pb-24 w-72 shadow-2xl" required/> 
                        <ErrorMessage name="instructions" component="p"/>

                        <button className="absolute bottom-40 left-80 border-red-500 border-2 rounded-xl p-2 hover:text-white hover:bg-red-500" type="submit">Add Recipe</button>
                        {submit && <p className="text-center text-xl text-red-500 font-semibold">new food item added</p>}
                    </Form>

                )}


           
           
            </Formik>
        </div>
     );
}
 
export default AddRecipeForm ;