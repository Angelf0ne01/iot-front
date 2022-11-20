import { useForm, SubmitHandler } from "react-hook-form";

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

                <input defaultValue="test" {...register("title", { required: true })} />
                <label>Titulo</label>
                {errors.title && <span>El primer campo es requerido</span>}
                <input {...register("description", { required: true })} />
                <label>descripción</label>
                {errors.description && <span>El segundo campo es requerido</span>}
                <button type="submit">Guardar</button>
            </form>
        </>
    );
}

