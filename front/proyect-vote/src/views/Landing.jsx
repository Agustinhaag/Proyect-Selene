import React from 'react'
import {Formik, Field, ErrorMessage, Form} from 'formik'
import { validateForm } from '../helpers/validate'
import { createPoll } from '../helpers/fetchPolls'

const Landing = () => {
  return (
    <div>
        <h2>Cree su propia encuesta</h2>
        <Formik 
        initialValues={ {
            question:'',
            option1:'',
         }}
         
        validate={validateForm}
        onSubmit={async(values)=>{

            await createPoll(values)
        }
    }

        >
            {(formikProps)=>(
                <Form style={{display:"flex", flexDirection:"column"}}>
                    <label htmlFor="question">Pregunta</label>
<Field type='text' placeholder='Ingrese su pregunta' name='question'/>
<ErrorMessage name='question'/>
<label htmlFor="option1">Opcion 1</label>
<ErrorMessage name='option1'/>
<Field type='text' placeholder='Opcion N1' name='option1'/>
<label htmlFor="option2">Opcion 2</label>
<Field type='text' placeholder='Opcion N2' name='option2'/>
<label htmlFor="option3">Opcion 3</label>
<Field type='text' placeholder='Opcion N3' name='option3'/>
<label htmlFor="option4">Opcion 4</label>
<Field type='text' placeholder='Opcion N4' name='option4'/>
<button type='submit'>
    Crear
</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default Landing