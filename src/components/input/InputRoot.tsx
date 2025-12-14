
interface InputProps {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
    type: string;
}

export function InputRoot ({ state, setState, placeholder, type }: InputProps){
    return (
        <input
            className='w-full outline-none rounded-lg px-4 bg-slate-200 text-sm text-slate-400'
            type={ type }
            value={ state }
            onChange={(e) => setState(e.target.value)}
            placeholder={ placeholder }
        />

    )
}