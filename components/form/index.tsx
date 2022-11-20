import { useForm, SubmitHandler } from "react-hook-form";
import Button from '@mui/material/Button'
import { FormHelperText, TextField } from "@mui/material";

type Inputs = {
    title: string,
    description: string,
};
interface Props {
    title: string,
}

export default function FormPage({ title }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (

        <>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <TextField defaultValue="test" {...register("title", { required: true })} />
                <label>Titulo</label>
                <FormHelperText>{errors.title && <span>El primer campo es requerido</span>}</FormHelperText>
                <TextField {...register("description", { required: true })} />
                <label>descripción</label>
                <FormHelperText>{errors.description && <span>El segundo campo es requerido</span>}</FormHelperText>
                <Button type="submit">Guardar</Button>
                
            </form>
        </>
    );
}

