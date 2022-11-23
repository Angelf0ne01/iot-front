import { useForm, SubmitHandler } from "react-hook-form";
import styled from "@emotion/styled"

    type Inputs = {
        title: string,
        description: string,
    };
    interface Props {
        title: string,
    }

const MyDiv = styled.div`
    display: flex;
    min-height: 100vh;

    .Form{
        background-color: #fff;
        margin: auto;
        width: 90%;
        max-width: 400px;
        padding: 4.5em 3em;
        border-radius: 10px;
        box-shadow: 0 5px 13px -5px rgb(0 0 0 / 100%);
        text-align: center;
    }

    .Title{
        font-size: 2rem;
        margin-bottom: .5em;
    }

    .Input{
        width: 100%;
        background: none;
        color: #706c6c;
        font-size: 1rem;
        padding: .6em .3em;
        border: none;
        outline: none;
        border-bottom: 1px solid var(--color);
    }

    .Label{
        color: var(--color);
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 5px;
        transform: translateY(10px);
        transition: transform .5s, color .3s;
    }

    .FormCont{
        margin-top: 3em;
        display: grid;
        gap: 2.5em;
    }

    .FormG{
        position: relative;
        --color: #5757577e;
    }

    .Input:focus + .Label,
    .Input:not(:placeholder-shown) + .Label{
        transform: translateY(-12px) scale(.7);
        transform-origin: left top;
        color: #3866f2;
    } 

    .Input:not(:placeholder-shown){
        color: #4d4646;
    }

    .MyButton{
        background: #3866f2;
        color: #fff;
        padding: .8em 0;
        border: none;
        border-radius: .5em;
    }

    .Error{
        color:#d45252;
        margin-top:-10px;

        font-size: 13px;
    }
`

export default function FormPage({ title }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (    
       
        <MyDiv>
            <form className="Form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="Title">{title}</h2>
                <div className="FormCont">
                    
                    <div className="FormG">
                        
                        <input className="Input" placeholder=" " {...register("title", { required: true })} />
                        <label className="Label">Titulo</label>
                        {errors.title && <span className="Error">El primer campo es requerido</span>}
                        
                    </div>

                    
                    <div className="FormG">
                        <input className="Input" placeholder=" " {...register("description", { required: true })} />
                        <label className="Label">Descripcion</label>
                        {errors.description && <span className="Error">El segundo campo es requerido</span>}
                    </div>
                    <button type="submit" className="MyButton">Guardar</button>
                </div>
            </form>
        </MyDiv>
        
    );
}

