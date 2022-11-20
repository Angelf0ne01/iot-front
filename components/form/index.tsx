import { useForm, SubmitHandler } from "react-hook-form";
import Button from '@mui/material/Button'
import { TextField } from "@mui/material";

type Inputs = {
    title: string,
    description: string,
};
interface Props {
    title: string,
}

export default function FormPage({ title }: Props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (

        <>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <TextField defaultValue="test" {...register("title", { required: true })} />
                <label>Titulo</label>
                {errors.title && <span>El primer campo es requerido</span>}
                <TextField {...register("description", { required: true })} />
                <label>descripción</label>
                {errors.description && <span>El segundo campo es requerido</span>}
                <Button type="submit">Guardar</Button>
            </form>
        </>
    );
}

